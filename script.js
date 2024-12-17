function addText() {
  var card = document.getElementById('card');
  var text = document.createElement('div');
  text.innerText = 'Texte personnalisé';
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

function changeBackgroundColor() {
  var card = document.getElementById('card');
  var color = document.getElementById('bgColor').value;
  card.style.backgroundColor = color;
}

function changeTextColor() {
  var card = document.getElementById('card');
  var color = document.getElementById('textColor').value;
  card.style.color = color;
}

function changeTextSize() {
  var card = document.getElementById('card');
  var size = document.getElementById('textSize').value;
  card.style.fontSize = size + 'px';
}

function changeFontFamily() {
  var card = document.getElementById('card');
  var font = document.getElementById('fontFamily').value;
  card.style.fontFamily = font;
}