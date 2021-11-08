function populatevisit() {
    localStorage.setItem('visited',document.getElementById('visited').value);
}

function setlastvisited() {
    const lastvisit = localStorage.getItem('visited');

    document.getElementById('visited').value = lastvisit;

   document.querySelector('lastvisitdays') = Date() - lastvisit;
}