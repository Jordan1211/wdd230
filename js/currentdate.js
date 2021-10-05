const options = {year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);


document.querySelector("#modified").textContent = `Last Updated: ${document.lastModified}`;

// previously had day and month: weekday: 'long', day: 'numeric', month: 'long', 