/* 
   things we need to do
    - get user location
    - create leaflet map
    - after a category is selected (addEventListener)
        - make a fetch request
            -use the place search method
            specify lat/long, categories and sort
        - programatically render a list of results
        -map the locations on the map
*/
let map = L.map('map').setView([51.505, -0.09], 13)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    maxZoom: 19, 
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' })
    .addTo(map);

navigator.geolocation.getCurrentPosition((success) => {
    console.log('it works:', position)

}, (error) => {
    console.log(error)
})
