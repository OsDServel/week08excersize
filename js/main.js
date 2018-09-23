//FIRST DIV SECTION
var myDiv = document.createElement("div");
document.body.appendChild(myDiv);
myDiv.innerText = "Hell0!"
myDiv.classList.add("one");
myDiv.classList.add("two");
myDiv.style.backgroundColor = "yellow";



//SECOND DIV SECTION (8+)
var myDivToo = document.createElement("div");
document.body.appendChild(myDivToo);
myDivToo.textContent = "Oh shit!";
myDivToo.id = "idUno";

//FIRST H1 SECTION (9+)
var myH1Uno = document.createElement("h2");
myDivToo.appendChild(myH1Uno);
myH1Uno.textContent = "Yeeeee!";
myH1Uno.style.backgroundColor = "forestgreen";



//THIRD DIV SECTION (12+)
var myDivTres = document.createElement("div");
myDivTres.id = "idDos"
	//ADDING DIV TO DOCUMENT BODY TO CHECK IF IT FUNCTIONS
document.body.appendChild(myDivTres);

//SECOND H1 SECTION (13+)
var myH1Dos = document.createElement("h2");
	//ADDING H1 TEXT FOR VISIBILITY
myH1Dos.textContent = "Ya tu sabes!"
	//ADDING H1 BACKGROUND COLOR FOR VISIBILITY
myH1Dos.style.backgroundColor = "purple";

var textN = document.createTextNode(" WHUT!");

myH1Dos.appendChild(textN)
myDivTres.appendChild(myH1Dos);


// textN.appendChild(myH1Dos);

// myH1Dos.appendChild(myDivTre);
