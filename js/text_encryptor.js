function encryptText() {
  const input = document.getElementById('inputText').value;
  const encrypted = btoa(input); // base64 encoding
  document.getElementById('output').textContent = `🔒 Encrypted: ${encrypted}`;
}

function decryptText() {
  const input = document.getElementById('inputText').value;
  try {
    const decrypted = atob(input); // base64 decoding
    document.getElementById('output').textContent = `🔓 Decrypted: ${decrypted}`;
  } catch {
    document.getElementById('output').textContent = "❌ Invalid encrypted text!";
  }
}
