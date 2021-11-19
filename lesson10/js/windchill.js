// input: Temperature and Wind Speed
// output: Wind Chill
// processing: calculate wind chill by (f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16)

// function doInputOutput() {
    let temp = parseFloat(document.querySelector('#temp').textContent);
    let speed = parseFloat(document.querySelector('#speed').textContent);
//    let chill = parseFloat(windChill(temp, speed));
    
    // document.getElementById('output').innerHTML = "Wind Chill is: " + chill.toFixed(2) + "\u00B0F";
// }

// function windChill(tempF, speed) {
    if (temp >= 50 && speed > 3 ) {
        let result = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16
        document.querySelector('#windChill').textContent = result.toFixed(1);
    }
    else {
        let result = 'Wind Speed <= 3 or Temp < 50'
        document.querySelector('#windChill').textContent = result;
    }


