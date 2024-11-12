
function loadLevel(level) {
    alert('Loading Level ' + level + '...');
    window.location.href = 'level' + level + '.html'; 
}


const items = {
    waterBuckets: 5,
    seeds: 10
};

function displayItems() {
    alert('You have ' + items.waterBuckets + ' water buckets and ' + items.seeds + ' seeds.');
}

window.onload = function() {
    displayItems();
}
