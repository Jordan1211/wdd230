document.getElementById('currentDate').textContent = new Date().toLocaleDateString(options);

const options = {weekday: 'long', day: 'short', month: 'medium', year:'numeric'}
