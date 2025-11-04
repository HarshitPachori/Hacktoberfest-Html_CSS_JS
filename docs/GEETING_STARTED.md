# 🚀 Getting Started Guide

Welcome to the Hacktoberfest HTML/CSS/JS repository! This guide will help you set up your development environment and make your first contribution.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Setting Up Your Environment](#setting-up-your-environment)
3. [Understanding the Project Structure](#understanding-the-project-structure)
4. [Making Your First Contribution](#making-your-first-contribution)
5. [Best Practices](#best-practices)
6. [Getting Help](#getting-help)

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

### Required
- **Git** - [Download & Install Git](https://git-scm.com/downloads)
- **GitHub Account** - [Create Account](https://github.com/join)
- **Text Editor/IDE** - We recommend [VS Code](https://code.visualstudio.com/)

### Optional but Recommended
- **Node.js** - For JavaScript development ([Download](https://nodejs.org/))
- **Live Server** - For local development ([VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer))

### Verify Installation

```bash
# Check Git installation
git --version

# Check Node.js installation (if installed)
node --version
npm --version
```

## 🛠️ Setting Up Your Environment

### Step 1: Fork the Repository

1. Visit the [repository page](https://github.com/HarshitPachori/Hacktoberfest-Html_CSS_JS)
2. Click the **Fork** button in the top-right corner
3. This creates a copy of the repository in your GitHub account

### Step 2: Clone Your Fork

```bash
# Clone your fork to your local machine
git clone https://github.com/YOUR-USERNAME/Hacktoberfest-Html_CSS_JS.git

# Navigate to the project directory
cd Hacktoberfest-Html_CSS_JS
```

### Step 3: Configure Git

```bash
# Set your Git username
git config --global user.name "Your Name"

# Set your Git email
git config --global user.email "your.email@example.com"

# Add upstream remote (original repository)
git remote add upstream https://github.com/HarshitPachori/Hacktoberfest-Html_CSS_JS.git

# Verify remotes
git remote -v
```

### Step 4: Install VS Code Extensions (Recommended)

If using VS Code, install these extensions:
- Prettier - Code formatter
- ESLint - JavaScript linter
- Live Server - Local development server
- Auto Rename Tag - HTML tag renaming
- GitLens - Git visualization

Or simply open the project in VS Code and it will recommend the extensions automatically!

## 📁 Understanding the Project Structure

```
Hacktoberfest-Html_CSS_JS/
├── html/              # HTML files and components
├── css/               # Stylesheets
├── js/                # JavaScript files
├── dsa_in_js/         # DSA in JavaScript
├── dsa_in_cpp/        # DSA in C++
├── dsa_in_java/       # DSA in Java
├── design_patterns/   # Design pattern implementations
├── tools/             # Development tools
└── docs/              # Documentation
```

**Detailed structure:** See [REPOSITORY_STRUCTURE.md](../REPOSITORY_STRUCTURE.md)

## 🎯 Making Your First Contribution

### Step 1: Find an Issue

1. Browse [open issues](https://github.com/HarshitPachori/Hacktoberfest-Html_CSS_JS/issues)
2. Look for issues labeled `good first issue` or `beginner-friendly`
3. Comment on the issue to get assigned

**⚠️ Important:** Always get assigned to an issue before starting work!

### Step 2: Create a Branch

```bash
# Sync with upstream
git fetch upstream
git checkout main
git merge upstream/main

# Create a new branch
git checkout -b feature/your-feature-name
```

**Branch naming conventions:**
- `feature/add-button-component`
- `fix/navigation-bug`
- `docs/update-readme`

### Step 3: Make Your Changes

1. Open the project in your code editor
2. Make your changes following the [style guidelines](../CONTRIBUTING.md#style-guidelines)
3. Test your changes thoroughly

**Example: Adding a new HTML component**

```html
<!-- html/components/card.html -->
<div class="card">
  <img src="image.jpg" alt="Card image" class="card-image">
  <div class="card-content">
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">Card description goes here.</p>
  </div>
</div>
```

**Example: Adding corresponding CSS**

```css
/* css/components/card.css */
.card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
```

### Step 4: Test Your Changes

```bash
# For HTML/CSS/JS
# Open html/index.html in a browser
# Or use Live Server extension in VS Code

# For JavaScript
# You can use Node.js to test
node js/your-script.js
```

### Step 5: Commit Your Changes

```bash
# Check status
git status

# Stage changes
git add .

# Commit with meaningful message
git commit -m "feat: add responsive card component"
```

**Commit message format:**
```
<type>: <description>

Examples:
feat: add dark mode toggle
fix: resolve mobile menu issue
docs: update installation guide
```

### Step 6: Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### Step 7: Create a Pull Request

1. Go to your fork on GitHub
2. Click **Compare & pull request**
3. Fill in the PR template
4. Submit the pull request

## ✅ Best Practices

### Code Quality
- ✅ Write clean, readable code
- ✅ Add comments for complex logic
- ✅ Follow the existing code style
- ✅ Test thoroughly before submitting

### Git Workflow
- ✅ Keep commits atomic (one feature/fix per commit)
- ✅ Write descriptive commit messages
- ✅ Sync with upstream regularly
- ✅ Don't commit sensitive information

### Communication
- ✅ Ask questions if unclear
- ✅ Be respectful and patient
- ✅ Respond to feedback promptly
- ✅ Help others when you can

## 🆘 Getting Help

### Resources
- 📖 [Contributing Guide](../CONTRIBUTING.md)
- 🔒 [Security Policy](../SECURITY.md)
- 📜 [Code of Conduct](../CODE_OF_CONDUCT.md)
- 🏗️ [Repository Structure](../REPOSITORY_STRUCTURE.md)

### Ask Questions
- **GitHub Issues:** For bugs and features
- **GitHub Discussions:** For general questions
- **Tag Maintainers:** @HarshitPachori @ayushHardeniya

### Common Issues

**Problem:** Git push rejected
```bash
# Solution: Pull latest changes first
git pull origin main --rebase
git push origin your-branch-name
```

**Problem:** Merge conflicts
```bash
# Solution: Fetch and merge upstream changes
git fetch upstream
git merge upstream/main
# Resolve conflicts in your editor
git add .
git commit -m "fix: resolve merge conflicts"
```

**Problem:** Wrong branch
```bash
# Solution: Stash changes and switch
git stash
git checkout main
git checkout -b correct-branch-name
git stash pop
```

## 🎊 After Your PR is Merged

1. **Celebrate!** 🎉 You're now a contributor!
2. **Add yourself** to `Contributor.md`
3. **Share** your contribution on social media
4. **Keep contributing** - The journey has just begun!

## 📚 Next Steps

- Explore more complex issues
- Help review other PRs
- Improve documentation
- Suggest new features
- Mentor new contributors

## 🌟 Tips for Success

1. **Start Small:** Begin with documentation or simple bug fixes
2. **Read First:** Understand existing code before modifying
3. **Ask Questions:** No question is too basic
4. **Be Patient:** Reviews take time
5. **Stay Consistent:** Regular small contributions > occasional large ones

## 🚀 Ready to Contribute?

Head over to the [issues page](https://github.com/HarshitPachori/Hacktoberfest-Html_CSS_JS/issues) and find your first issue!

---

**Happy Coding! 🎃**

Need help? Reach out to:
- Harshit Pachori - [@HarshitPachori](https://github.com/HarshitPachori)
- Ayush Sharma - [@ayushHardeniya](https://github.com/ayushHardeniya)