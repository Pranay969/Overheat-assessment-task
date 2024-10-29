// level1done.js

function loadLevel(level) {
    alert('Loading Level ' + level + '...');
    // You can redirect to a specific level page if you have separate HTML files for each level
    window.location.href = 'level' + level + '.html'; // Example: redirects to level1.html
}

// Optionally, you could include functionality to use items or other interactions here

// If you want to keep track of items or scores, you can store them in local storage
const items = {
    waterBuckets: 5,
    seeds: 10
};

// Function to display current items (optional)
function displayItems() {
    alert('You have ' + items.waterBuckets + ' water buckets and ' + items.seeds + ' seeds.');
}

// Optionally, you could call this function to show items when the levels page loads
window.onload = function() {
    displayItems();
}
