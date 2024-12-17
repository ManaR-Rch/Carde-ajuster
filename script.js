function addText() {
  var card = document.getElementById('card');
  var text = document.createElement('div');
  text.innerText = 'Texte personnalisé';
  text.className = 'text-item'; 
  card.appendChild(text);
}

function addImage() {
  var card = document.getElementById('card');
  var url = prompt('Entrez l\'URL de l\'image :');
  if (url) { 
    var img = document.createElement('img');
    img.src = url;
    img.style.width = '100%';
    card.appendChild(img); 
  }
}