function Maintab(evt, Tabname) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Tabname).style.display = "block";
  evt.currentTarget.className += " active";
}
function showTable() {
  document.getElementById("table").style.visibility = "visible";
}
function hideTable() {
  document.getElementById("table").style.visibility = "hidden";
}
function showTable2() {
  document.getElementById("Summarytable").style.visibility = "visible";
}
function hideTable2() {
  document.getElementById("Summarytable").style.visibility = "hidden";
}

document.getElementById("defaultOpen").click();
/* If the department of birth is not a French */
var departmentOfBirth = document.getElementById("departmentOfBirth");
if (departmentOfBirth.value != "French") {
  /* department then you must enter 99 in the department of birth, then as soon as */
  departmentOfBirth.value = "99";
  /* you leave this text area (click elsewhere or press the tab key) anew text box */
  departmentOfBirth.addEventListener("blur", function () {
    /* appears to enter the country of birth. */
    var countryOfBirth = document.createElement("input");
    countryOfBirth.type = "text";
    countryOfBirth.id = "countryOfBirth";
    countryOfBirth.name = "countryOfBirth";
    countryOfBirth.placeholder = "Country of birth";
    countryOfBirth.style.marginLeft = "10px";
    departmentOfBirth.parentNode.appendChild(countryOfBirth);
  });
}

