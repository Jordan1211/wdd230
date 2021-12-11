//alert
const alertURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.3898999&lon=-111.8478224&?&units=imperial&appid=9f5541804c0cbd0a629c5facccc2de31"

fetch(alertURL)
 .then((response) => {
   if (!response.ok) {
     throw Error(response.statusText);
   } else {
     return response.json();
   }})

  .then((jsObject) => {
    document.querySelector(`#alert`).innerHTML = jsObject.alerts[0].description;
  });