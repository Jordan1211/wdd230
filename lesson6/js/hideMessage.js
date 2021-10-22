const today = new Date();
const weekday = parseInt(today.getDay());

function hideMessage() {
    if (weekday == 5) {
        document.getElementById('fridayMessage').classList.remove("hide");
}
    else {document.getElementById('fridayMessage').classList.add("hide");}
}

document.getElementById('weekday').textContent = weekday;

/*
function hideMessage() {
    console.log(document.getElementById("fridayMessage").classList);
    document.getElementById('fridayMessage').classList.remove("hide"); }*/