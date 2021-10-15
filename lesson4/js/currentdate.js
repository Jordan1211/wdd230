const options = {weekday: 'long', day: 'short', month: 'medium', year:'numeric'};
document.getElementById('currentDate').textContent = new Date().toLocaleDateString(options);