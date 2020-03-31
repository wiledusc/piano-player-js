var sounds = [
  { key: 'C4', 'sound': new Audio("sounds/C4.mp3") },
  { key: 'Db4', 'sound': new Audio("sounds/Db4.mp3") },
  { key: 'D4', 'sound': new Audio("sounds/D4.mp3") },
  { key: 'Eb4', 'sound': new Audio("sounds/Eb4.mp3") },
  { key: 'E4', 'sound': new Audio("sounds/E4.mp3") },
  { key: 'F4', 'sound': new Audio("sounds/F4.mp3") },
  { key: 'Gb4', 'sound': new Audio("sounds/Gb4.mp3") },
  { key: 'G4', 'sound': new Audio("sounds/G4.mp3") },
  { key: 'Ab4', 'sound': new Audio("sounds/Ab4.mp3") },
  { key: 'A4', 'sound': new Audio("sounds/A4.mp3") },
  { key: 'Bb4', 'sound': new Audio("sounds/Bb4.mp3") },
  { key: 'B4', 'sound': new Audio("sounds/B4.mp3") },
  { key: 'C5', 'sound': new Audio("sounds/C5.mp3") },
  { key: 'Db5', 'sound': new Audio("sounds/Db5.mp3") },
  { key: 'D5', 'sound': new Audio("sounds/D5.mp3") },
  { key: 'Eb5', 'sound': new Audio("sounds/Eb5.mp3") },
  { key: 'E5', 'sound': new Audio("sounds/E5.mp3") }
];

document.addEventListener("DOMContentLoaded", function(){
  bindClick();
})

const playSound = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};

const play = (key) => {
  const selectedKey = document.querySelector(`.${key}-key`);
  var selectedSound = sounds.filter( (arr) => arr.key == key)[0]?.sound;
  playSound(selectedSound);
  selectedKey.classList.add("active");
  setTimeout(() => selectedKey.classList.remove("active"), 200);
}

const bindClick = () => {
  sounds.map((arr) => {
    var selectedKey = document.querySelector(`.${arr.key}-key`);
    selectedKey.addEventListener("click", () => { play(arr.key) });
  });
}

window.addEventListener("keydown", ({ keyCode }) => {
  // Press Q
  if (keyCode === 81) return play('C4');
  // Press 2
  if (keyCode === 50) return play('Db4');
  // Press W
  if (keyCode === 87) return play('D4');
  // Press 3
  if (keyCode === 51) return play('Eb4');
  // Press E
  if (keyCode === 69) return play('E4');
  // Press R
  if (keyCode === 82) return play('F4');
  // Press 5
  if (keyCode === 53) return play('Gb4');
  // Press T
  if (keyCode === 84) return play('G4');
  // Press 6
  if (keyCode === 54) return play('Ab4');
  // Press Y
  if (keyCode === 89) return play('A4');
  // Press 7
  if (keyCode === 55) return play('Bb4');
  // Press U
  if (keyCode === 85) return play('B4');
  // Press I
  if (keyCode === 73) return play('C5');
  // Press 9
  if (keyCode === 57) return play('Db5');
  // Press O
  if (keyCode === 79) return play('D5');
  // Press 0 
  if (keyCode === 48) return play('Eb5');
  // Press P
  if (keyCode === 80) return play('E5');
}); 