//current info
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=9f5541804c0cbd0a629c5facccc2de31"
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
const forecastURL ='https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=9f5541804c0cbd0a629c5facccc2de31';

fetch(forecastURL)
 .then((response) => {
   if (!response.ok) {
     throw Error(response.statusText);
   } else {
     return response.json();
   }})

  .then((jsObject) => {
    const sixpm = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    let day = 1;

    sixpm.forEach(forecast => {

      let thedate = new Date(forecast.dt_txt);
      const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
      const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

      document.querySelector(`#dayofweek${day}`).innerHTML = weekdays[thedate.getDay()];
      document.querySelector(`#icon${day}`).setAttribute('src', `${imagesrc}`);
      document.querySelector(`#icon${day}`).setAttribute('alt',`${forecast.weather[0].description}`);
      document.querySelector(`#forecast${day}`).innerHTML = `${forecast.main.temp.toFixed(1)}&#176;F`;
      day++;
        })
  });

    // events
    const homepageurl = 'https://byui-cit230.github.io/weather/data/towndata.json';
    fetch(homepageurl)
    
      .then(function (response) {
    
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
        return response.json();
        }})
      .then(function (jsonObject) {
        let towns = jsonObject['towns'];
        towns.forEach((town) => {
        if (town.name == "Soda Springs"){
          let towns = document.createElement('section');
          let p1 = document.createElement('p');
          let p2 = document.createElement('p');
          let p3 = document.createElement('p');
    
            p1.innerHTML = 
              `${town.events[0]}`;
            towns.appendChild(p1);
            p2.innerHTML =
              `${town.events[1]}`;
            towns.appendChild(p2);
            p3.innerHTML = 
            `${town.events[2]}`;
            towns.appendChild(p3);
          document.querySelector('div.events').appendChild(towns);
          }
        })});
    