$(document).ready(function() {
    var map = L.map('map').setView([51.505, -0.09], 13); // Initialize map

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var routeCoordinates = [
        [51.505, -0.09],
        [51.51, -0.1],
        [51.52, -0.12],
        [51.53, -0.13]
        
        // Add more coordinates as needed
    ];

    var polyline = L.polyline(routeCoordinates, {color: 'blue'}).addTo(map); // Add route polyline to map

    var marker = L.marker(routeCoordinates[0]).addTo(map); // Add marker at the beginning of the route

    var currentIndex = 0; // Index of the current coordinate

    // Function to update marker position
    function updateMarker() {
        marker.setLatLng(routeCoordinates[currentIndex]);
        map.panTo(routeCoordinates[currentIndex]);
    }

    // Function to update progress
    function updateProgress() {
        if (currentIndex < routeCoordinates.length - 1) {
            currentIndex++;
            updateMarker();
            setTimeout(updateProgress, 1000); // Update progress every 1 second (adjust as needed)
        }
    }

    updateProgress(); // Start updating progress
});
