// input: Temperature and Wind Speed
// output: Wind Chill
// processing: calculate wind chill by (f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16)

function doInputOutput() {
    let temp = document.getElementById('temp').value;
    let speed = document.getElementById('speed').value;
    let chill = parseFloat(windChill(temp, speed));
    
    document.getElementById('output').innerHTML = "Wind Chill is: " + chill.toFixed(2) + "\u00B0F";
}

function windChill(tempF, speed) {
    windChill = 35.74 + 0.6215 * tempF - 35.75 * speed ** 0.16 + 0.4275 * tempF * speed ** 0.16
}

document.getElementById('windChill').textContent = windChill;