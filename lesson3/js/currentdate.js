const options = {year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

// previously had day and month: weekday: 'long', day: 'numeric', month: 'long', 