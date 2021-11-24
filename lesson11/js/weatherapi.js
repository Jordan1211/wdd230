const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=524901&units=imperial&appid=9f5541804c0cbd0a629c5facccc2de31"
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
	document.getElementById('current-temp').textContent = jsObject.main.temp;
	const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  
	const desc = jsObject.weather[0].description;  
	document.getElementById('imagesrc').textContent = imagesrc;  
	document.getElementById('icon').setAttribute('src', imagesrc);  
	document.getElementById('icon').setAttribute('alt', desc);
 });