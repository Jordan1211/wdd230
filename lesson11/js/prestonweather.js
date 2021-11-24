//current info
const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=9f5541804c0cbd0a629c5facccc2de31"
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
	document.getElementById('current-temp').textContent = `${JSON.parse(Math.round(jsObject.main.temp))}`;
	document.getElementById('condition').textContent = jsObject.weather[0].main;
    document.getElementById('humidity').textContent = `${jsObject.main.humidity}%`;
    document.getElementById('speed').textContent = JSON.parse(Math.round(jsObject.wind.speed));
 });

 //forecast info
const forecastURL ='http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=9f5541804c0cbd0a629c5facccc2de31';
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
        const list = jsObject['list'];
        list.forEach((forecast) => {
        if (dt_txt = '18:00:00') {  
        document.getElementById('sun-temp').textContent = forecast.temp;
        document.getElementById('mon-temp').textContent = forecast.temp;
        document.getElementById('tue-temp').textContent = forecast.temp;
        document.getElementById('wed-temp').textContent = forecast.temp;
        document.getElementById('thu-temp').textContent = forecast.temp;
        document.getElementById('fri-temp').textContent = forecast.temp;
        document.getElementById('sat-temp').textContent = forecast.temp;

        document.getElementById('sun-img').textContent = forecast.temp;
        document.getElementById('mon-img').textContent = forecast.temp;
        document.getElementById('tue-img').textContent = forecast.temp;
        document.getElementById('wed-img').textContent = forecast.temp;
        document.getElementById('thu-img').textContent = forecast.temp;
        document.getElementById('fri-img').textContent = forecast.temp;
        document.getElementById('sat-img').textContent = forecast.temp;
        }
        })
  });