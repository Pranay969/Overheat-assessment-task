// Function to load a specific level
function loadLevel(levelNumber) {
  if (levelNumber === 1) {
      // Redirect to the tutorial page for Level 1
      window.location.href = 'tutorial.html'; // Ensure the file name matches the actual tutorial page name
  } else {
      alert('This level is locked! Complete the previous levels to unlock.');
  }
}
