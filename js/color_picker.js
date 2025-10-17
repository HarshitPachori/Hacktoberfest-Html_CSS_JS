const colorInput = document.getElementById('colorInput');
const hexText = document.getElementById('hex');
const rgbText = document.getElementById('rgb');

colorInput.addEventListener('input', () => {
  const color = colorInput.value;
  hexText.textContent = `Hex: ${color}`;
  
  const r = parseInt(color.slice(1,3),16);
  const g = parseInt(color.slice(3,5),16);
  const b = parseInt(color.slice(5,7),16);
  rgbText.textContent = `RGB: ${r}, ${g}, ${b}`;
});
