document.addEventListener("DOMContentLoaded", function(){

    //http://api.openweathermap.org/data/2.5/weather?zip=02906,us&appid=9521708361c49a1c03f287c6e783f274\
    // const url = "https://api.github.com/users";

    // navigator.gelocation.getCurrentPosition(logPositionDataSuccess, logPositionDataError);
    if (navigator.geolocation) { // see if the user browser even supports geolocation
    navigator.geolocation.getCurrentPosition(logPositionDataSucces);
    } else {
    alert('Your using a older Browser')
    }
    
    // document.getElementByID('button').addEventListener('click', getWeather);

    function logPositionDataSucces(position) {

      const apiKey = '9521708361c49a1c03f287c6e783f274';
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // const url = "https://api.openweathermap.org/data/2.5/weather";
      const combineUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      console.log(combineUrl);
    }



}
















})