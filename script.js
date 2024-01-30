class plot {
  constructor() {
    this.plant = "Empty",
    this.waterLevel = 0
  }
}
let farm = [new plot, new plot, new plot, new plot, new plot, new plot, new plot, new plot, new plot];
let md = false;
let mm = false;
let mo = -1;
function loadFarm(){
  const myPlots = document.getElementsByTagName("td");
  for (var x = 0; x < myPlots.length; x++) {
    console.log("Plot: " + myPlots[x].innerHTML + " has loaded.");
    myPlots[x].children[0].src = "sprites/" + farm[x].plant + ".png";
  }
}
function plotClick(id){
  console.log(id + "Plant Type: " + farm[id].plant + " | Water Level: " + farm[id].waterLevel);
}
document.addEventListener("DOMContentLoaded", function(event) { 
  loadFarm();
});

document.addEventListener("mousedown", function(event){
  md = true;
});
var holding1 = false;
var holding2 = false;
var heldCrop;
document.addEventListener("mousemove", function(e){
  document.getElementById("moDisplay").innerHTML = "Current mo: " + mo;
  mm = true;
  if(md == true && mm == true){
    //console.log("Moving with mouse down!");
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    if(!holding1){
      if(!holding2){
        heldCrop = document.createElement("img");
        heldCrop.src = "sprites/" + farm[mo].plant + ".png";//"sprites/Pumpkin.png";//CHANGE
        document.getElementById('body').appendChild(heldCrop);
        heldCrop.style.pointerEvents = "none";
        heldCrop.style.position = "absolute";
        heldCrop.style.transform = "scale(2)";
        heldCrop.id = "heldItem";
      }
      holding2 = true;
      heldCrop.style.left = e.pageX-10 + "px";
      heldCrop.style.top = e.pageY-10 + "px";
    }
    // console.log(e.pageX, e.pageY);
  }
});
document.addEventListener("mouseup", function(event){
  md = false;
  alert(mo);
  holding2=false;
  if(mo == 9){
    alert("sold");
  }
  //Left position of helf item = document.getElementById("heldItem").style.left
  mo = -1;
  document.getElementById("heldItem").remove();
});

farm[0].plant = "Pumpkin";
farm[1].plant = "Eggplant";
farm[2].plant = "Cauliflower";
farm[3].plant = "Carrot";
farm[4].plant = "Potato";
farm[5].plant = "Tomato";
farm[6].plant = "Watermelon";
farm[7].plant = "Corn";
farm[8].plant = "Cabbage";
console.log(farm);