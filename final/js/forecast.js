//current info
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.3898999&lon=-111.8478224&?&units=imperial&appid=9f5541804c0cbd0a629c5facccc2de31"
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
	document.getElementById('current-temp').textContent = `${JSON.parse(Math.round(jsObject.current.temp))}`;
	document.getElementById('condition').textContent = jsObject.current.weather[0].main;
    document.getElementById('humidity').textContent = `${jsObject.current.humidity}%`;
 });

//    //forecast info
// const forecastURL ='https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=9f5541804c0cbd0a629c5facccc2de31';

// fetch(forecastURL)
//  .then((response) => {
//    if (!response.ok) {
//      throw Error(response.statusText);
//    } else {
//      return response.json();
//    }})

//   .then((jsObject) => {
//     const sixpm = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
//     let day = 1;

//     sixpm.forEach(forecast => {

//       let thedate = new Date(forecast.dt_txt);
//       const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
//       const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

//       document.querySelector(`#dayofweek${day}`).innerHTML = weekdays[thedate.getDay()];
//       document.querySelector(`#icon${day}`).setAttribute('src', `${imagesrc}`);
//       document.querySelector(`#icon${day}`).setAttribute('alt',`${forecast.weather[0].description}`);
//       document.querySelector(`#forecast${day}`).innerHTML = `${forecast.main.temp.toFixed(1)}&#176;F`;
//       day++;
//         })
//   });

const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.3898999&lon=-111.8478224&?&units=imperial&appid=9f5541804c0cbd0a629c5facccc2de31"

fetch(forecastURL)
 .then((response) => {
   if (!response.ok) {
     throw Error(response.statusText);
   } else {
     return response.json();
   }})

  .then((jsObject) => {
    const daily = [jsObject.daily[0], jsObject.daily[1], jsObject.daily[2]];
    let day = 1;

    // console.log(`dt1: ${(new Date(daily[1].dt))} - should say Tomorrows Date`);
    // console.log(`getDay1: ${(new Date(daily[1].dt)).getDay()} - should match # for day of week`);
    // console.log(`getTime1: ${(new Date(daily[1].dt)).getTime()} - should match milliseconds`);
    
    // console.log(`today: ${daily[0].dt}`);
    // console.log(`tomorrow: ${daily[1].dt}`);
    // console.log(`next day: ${daily[2].dt}`);

    // var timestamp = daily[0].dt;
    // var date = new Date(timestamp);
    // console.log(date);

    // console.log(jsObject);

    daily.forEach( daily => {
      let thedate = new Date(daily.dt);
      const imagesrc = 'https://openweathermap.org/img/w/' + daily.weather[0].icon + '.png';
      const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

      document.querySelector(`#dayofweek${day}`).innerHTML = weekdays[thedate.getDay()];
      document.querySelector(`#icon${day}`).setAttribute('src', `${imagesrc}`);
      document.querySelector(`#icon${day}`).setAttribute('alt',`${daily.weather[0].description}`);
      document.querySelector(`#forecast${day}`).innerHTML = `${daily.temp.day.toFixed(1)}&#176; F`;
      day++;
        })
  });