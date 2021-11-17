const nameType = document.getElementById('fullname');
nameType.addEventListener('nameType',testInfo);

var re = /[a-zA-z\s]{5,}/;
function testInfo(nameInput) {
  var OK = re.exec(nameInput.value);

  if (!OK) {
    document.getElementById('fullname').classList.add("ok")
  } else {
    document.getElementById('fullname').classList.add("regex")
  }
} 
