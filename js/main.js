// var getDiv = document.getElementById("myDiv");
var myDiv = document.createElement("div")
// var div = getElementById.add("myDiv")
myDiv.innerText = "Hell0!"

myDiv.classList.add("one");

myDiv.classList.add("two");

document.body.appendChild(myDiv);

myDiv.style.backgroundColor = "yellow";

var myDivToo = document.createElement("div")

myDivToo.id = "three"
document.body.appendChild(myDivToo)
myDivToo.innerText = "Oh shit!"
// document.getElementById("myDivToo").id = "three"