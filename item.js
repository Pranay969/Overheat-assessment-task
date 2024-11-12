let waterBuckets = 5;
let seeds = 10;

document.getElementById('useWater').addEventListener('click', function() {
    if (waterBuckets > 0) {
        waterBuckets--;
        document.getElementById('waterCount').textContent = waterBuckets;
        document.getElementById('message').textContent = 'You used a Water Bucket. Remaining: ' + waterBuckets;
    } else {
        document.getElementById('message').textContent = 'No more Water Buckets remaining!';
    }
});

document.getElementById('useSeeds').addEventListener('click', function() {
    if (seeds > 0) {
        seeds--;
        document.getElementById('seedCount').textContent = seeds;
        document.getElementById('message').textContent = 'You used Seeds. Remaining: ' + seeds;
    } else {
        document.getElementById('message').textContent = 'No more Seeds remaining!';
    }
});

document.getElementById('goBack').addEventListener('click', function() {
    window.location.href = 'homepage.html'; 
});
