var destino = {
    lat: 9.9470888,
    lng: -84.2907086,
  };

function initMap(){
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 15,
        center: destino,
    } )

    directionsRenderer.setMap(map);

    infoWindow = new google.maps.InfoWindow();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            calculateAndDisplayRoute(directionsService, directionsRenderer, pos);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
        );
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }

}

function calculateAndDisplayRoute(directionsService, directionsRenderer, pos){

        let request = {
            origin: pos,
            destination: destino,
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.IMPERIAL
        }
        
        directionsService.route(request, function(result, status) {
            if (status == "OK"){
                directionsRenderer.setDirections(result);
            } else {
                directionsDisplay.setDirections({ routes: [] });
            //center map in current Position
            map.setCenter(currentPosition);

            //show error message
            alert("Error");
            }
        })
        

      

}