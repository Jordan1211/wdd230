const options = {year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);


document.querySelector("#modified").textContent = `Last Updated: ${document.lastModified}`;