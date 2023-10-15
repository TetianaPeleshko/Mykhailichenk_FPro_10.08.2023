const textField = document.getElementById('input-text');
const divGhost = document.getElementById('div-ghost');

function handleFocus() {
  divGhost.style.display = 'block';
}
function handleBlur() {
  divGhost.style.display = 'none';
}
textField.addEventListener('focus', handleFocus);
textField.addEventListener('blur', handleBlur);
