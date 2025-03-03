const music = document.getElementById('background-music');
const muteButton = document.getElementById('mute-button');

muteButton.addEventListener('click', () => {
  if (music.muted) {
    music.muted = false;
    muteButton.textContent = '🔊';
  } else {
    music.muted = true;
    muteButton.textContent = '🔇';
  }
});



document.getElementById('downloadButton').addEventListener('click', function() {
  const userPassword = prompt("Entrez le mot de passe pour télécharger :");

  const correctPassword = "LeJambonCEstpasHalal"; 

  if (userPassword === correctPassword) {
    alert("Mot de passe correct. Téléchargement autorisé !");
  
    const link = document.createElement('a');
    link.href = 'Star.png'; // fichier à télécharger
    link.download = 'Star.png'; // Nom du fichier 
    link.click(); 
  } else {
    alert("Mot de passe incorrect !");
  }
});
