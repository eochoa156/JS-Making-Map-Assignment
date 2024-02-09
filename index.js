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

navigator.geolocation.getCurrentPosition((success) => {
    console.log('it works:', position)

}, (error) => {
    console.log(error)
})
