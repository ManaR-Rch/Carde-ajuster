function addText() {
  var card = document.getElementById('card');
  var text = document.createElement('div');
  text.innerText = 'Texte personnalisé';
  text.className = 'text-item'; 
  card.appendChild(text);
}