function loadLevel(levelNumber) {
  if (levelNumber === 1) {
      window.location.href = 'tutorial.html'; 
  } else {
      alert('This level is locked! Complete the previous levels to unlock.');
  }
}
