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

function alignText(alignment) {
  var texts = document.getElementsByClassName('text-item');
  for (var i = 0; i < texts.length; i++) {
    texts[i].style.textAlign = alignment; 
  }
}

function addBorder() {
  var texts = document.getElementsByClassName('text-item');
  for (var i = 0; i < texts.length; i++) {
    texts[i].style.border = '1px solid black'; 
    texts[i].style.padding = '5px';
}
 }

 function addShadow() {
  var texts = document.getElementsByClassName('text-item');
  for (var i = 0; i < texts.length; i++) {
    texts[i].style.textShadow = '2px 2px 5px gray'; 
  }
}

function saveToLocalStorage() {
  var cardContent = document.getElementById('card').innerHTML;
  localStorage.setItem('savedCard', cardContent);
  alert('Carte sauvegardée avec succès !');
}
function loadFromLocalStorage() {
  var savedContent = localStorage.getItem('savedCard');
  if (savedContent) {
    document.getElementById('card').innerHTML = savedContent;
    alert('Carte chargée avec succès !');
  } else {
    alert('Aucune carte sauvegardée trouvée.');
  }
}