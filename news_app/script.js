const API_KEY = "YOUR_API_KEY";
const PAGE_SIZE = 6;

const categories = ["general","business","entertainment","health","science","sports","technology"];

let state = {
  q: "",  
  category: "",   
  page: 1,       
  totalResults: 0,
};

const elements = {
  articles: document.getElementById("articles"),
  status: document.getElementById("status"),
  searchInput: document.getElementById("searchInput"),
  searchBtn: document.getElementById("searchBtn"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  pageIndicator: document.getElementById("pageIndicator"),
  categories: document.getElementById("categories")
};

function createCategoryButtons() {
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.dataset.cat = cat;
    btn.addEventListener("click", () => {
      if (state.category === cat) {
        state.category = "";
      } else {
        state.category = cat;
      }
      state.page = 1;
      updateCategoryUI();
      fetchAndRender();
    });
    elements.categories.appendChild(btn);
  });
}

function updateCategoryUI() {
  const btns = document.querySelectorAll(".category-btn");
  btns.forEach(b => {
    b.classList.toggle("active", b.dataset.cat === state.category);
  });
}

function showStatus(text) {
  elements.status.textContent = text;
}

function clearArticles() {
  elements.articles.innerHTML = "";
}

function createArticleCard(article) {
  const card = document.createElement("article");
  card.className = "card";

  const img = document.createElement("img");
  img.className = "thumb";
  img.alt = article.title || "article image";
  img.src = article.urlToImage || "https://via.placeholder.com/600x400?text=No+Image";

  const h3 = document.createElement("h3");
  h3.textContent = article.title || "Untitled";

  const p = document.createElement("p");
  p.textContent = article.description || (article.content ? article.content.slice(0, 150) + "…" : "No description available.");

  const meta = document.createElement("div");
  meta.className = "meta";

  const source = document.createElement("div");
  source.innerHTML = `<span class="source">${article.source.name || "Unknown"}</span>`;

  const link = document.createElement("a");
  link.href = article.url;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "Read";

  meta.appendChild(source);
  meta.appendChild(link);

  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(meta);

  return card;
}

async function fetchNews() {
  const params = new URLSearchParams();
  params.set("pageSize", PAGE_SIZE);
  params.set("page", state.page);
  params.set("apiKey", API_KEY);

  let url;
  if (state.q && state.q.trim().length > 0) {
    params.set("q", state.q.trim());
    url = `https://newsapi.org/v2/everything?${params.toString()}`;
  } else {
    if (state.category) params.set("category", state.category);
    params.set("country", "us");
    url = `https://newsapi.org/v2/top-headlines?${params.toString()}`;
  }

  const resp = await fetch(url);
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Network response not OK: ${resp.status} ${text}`);
  }
  const data = await resp.json();
  if (data.status !== "ok") {
    throw new Error(data.message || "API returned an error");
  }
  return data;
}

async function fetchAndRender() {
  clearArticles();
  showStatus("Loading…");
  elements.prevBtn.disabled = true;
  elements.nextBtn.disabled = true;

  try {
    const data = await fetchNews();
    state.totalResults = data.totalResults || 0;
    elements.pageIndicator.textContent = `Page ${state.page} — ${state.totalResults} results`;

    if ((data.articles || []).length === 0) {
      showStatus("No articles found. Try a different query or category.");
      return;
    }
    showStatus(`Showing ${data.articles.length} articles (page ${state.page}).`);
    data.articles.forEach(a => {
      elements.articles.appendChild(createArticleCard(a));
    });

    // pagination controls
    const maxPage = Math.ceil((state.totalResults || 0) / PAGE_SIZE) || 1;
    elements.prevBtn.disabled = state.page <= 1;
    elements.nextBtn.disabled = state.page >= maxPage;

  } catch (err) {
    console.error(err);
    showStatus("Error fetching news: " + err.message);
  }
}
elements.searchBtn.addEventListener("click", () => {
  state.q = elements.searchInput.value;
  state.page = 1;
  fetchAndRender();
});

elements.searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    state.q = elements.searchInput.value;
    state.page = 1;
    fetchAndRender();
  }
});

elements.prevBtn.addEventListener("click", () => {
  if (state.page > 1) {
    state.page -= 1;
    fetchAndRender();
  }
});

elements.nextBtn.addEventListener("click", () => {
  state.page += 1;
  fetchAndRender();
});

createCategoryButtons();
updateCategoryUI();
fetchAndRender();
