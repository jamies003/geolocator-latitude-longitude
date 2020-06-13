function geoFindMe() {
  let output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;

  }

  function success(position) {
    let lat  = position.coords.latitude;
    let lon = position.coords.longitude;

    let apiKey = '9521708361c49a1c03f287c6e783f274';
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;


    output.innerHTML = '<p>Latitude is ' + lat + '° <br>Longitude is ' + lon + '°</p>';

    let img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lon + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);

}