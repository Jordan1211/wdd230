function lastv () {
let localStorage = window.localStorage;
const today = new Date();
let visited;
let result;

if(visited == null) {
    localStorage.setItem('visited',today);
    result = "This is your 1st time on this site, Welcome!";
    document.getElementById('visitDate').innerHTML = result;
} else {
    setlastvisited();
}

function setlastvisited() {
    lastVisit = Date.parse(localStorage.getItem('visited'));
    result = today - lastVisit;
    document.getElementById("visitDate").innerHTML = "Your last visit was [ " + result +  " ] days ago.";

    localStorage.removeItem('visited');
    localStorage.clear('visited');
    localStorage.setItem('visited', new Date());
    visited = localStorage.getItem('visited');
}
}
lastv();