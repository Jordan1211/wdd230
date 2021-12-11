const direcClass = document.getElementById("directorycards").classList[0];
console.log(direcClass)

function toggleList() {
    document.getElementById("directorycards").classList.toggle("hide");
    document.getElementById("directorylist").classList.toggle("hide");
}