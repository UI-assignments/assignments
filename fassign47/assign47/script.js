const getLocation = document.getElementById("getlocation");

getLocation.addEventListener('click', evt=>{
    if('geolocation' in navigator){
        let watchID = navigator.geolocation.watchPosition(position=>{
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            let googleMapURL = `https://maps.googleapis.com/maps/api/staticmap?${latitude},${longitude}&zoom=11&size=400x400`;
            const mapImage = document.getElementById("mapImage");
            mapImage.src = googleMapURL;


            console.log(latitude,longitude);
        },error=>{
            console.log(error.code);
                });
                console.log(watchID)
            }
        else{
            console.log("Not Supported")
        }
});