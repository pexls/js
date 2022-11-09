








document.getElementById("hh").addEventListener("mouseover", mouseOver);
document.getElementById("hh").addEventListener("mouseout", mouseOut);

function mouseOver() {
  // document.getElementById("hh").textContent = "nothing";
  // document.getElementById("hh").style.border = "";
  document.getElementById("hh").style.width = "400px";
  document.getElementById("hh").style.height= "400px";
  document.getElementById("hh").style.marginLeft = "35%";
  document.getElementById("hh").style.marginRight = "35%";
  document.getElementById("hh").style.textAlign = "center";
  document.getElementById("hh").style.paddingTop = "20%";
  document.getElementById("hh").style.backgroundColor = "blue";
  document.getElementById("hh").style.color = "white";



}

function mouseOut() {
  // document.getElementById("hh").textContent = "All or";
  // document.getElementById("hh").style.border = "";
document.getElementById("hh").style.width = "400px";
document.getElementById("hh").style.height= "400px";
document.getElementById("hh").style.marginLeft = "35%";
document.getElementById("hh").style.marginRight = "35%";
document.getElementById("hh").style.textAlign = "center";
document.getElementById("hh").style.paddingTop = "20%";
document.getElementById("hh").style.backgroundColor = "Maroon";
document.getElementById("hh").style.color = "black";

  // document.getElementById("hh").style.color = "black";
}