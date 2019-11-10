//FIRST DIV SECTION
var myDiv = document.createElement("div");
document.body.appendChild(myDiv);
myDiv.innerText = "Hell0!";
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
myDivTres.id = "idDos";
	//ADDING DIV TO DOCUMENT BODY TO CHECK IF IT FUNCTIONS
document.body.appendChild(myDivTres);

//SECOND H1 SECTION (13+)
var myH1Dos = document.createElement("h2");
	//ADDING H1 TEXT FOR VISIBILITY
myH1Dos.textContent = "Ya tu sabes!";
	//ADDING H1 BACKGROUND COLOR FOR VISIBILITY
myH1Dos.style.backgroundColor = "purple";

var textN = document.createTextNode(" WHUT!");

myH1Dos.appendChild(textN);
myDivTres.appendChild(myH1Dos);



//14.

var myImg= document.createElement('img');
myImg.setAttribute('id', 'image');
myImg.setAttribute('src', 'img/player1.jpg');
myImg.setAttribute('alt', 'You heard?');
monkeyMoney= myImg.alt;

var myBtn= document.createElement('button');
myBtn.setAttribute('id', 'elBotton');
myBtn.innerText= 'orale!';

	//creating p element to display alt property in
	var myP= document.createElement('p');
	document.body.appendChild(myP);
	myP.innerText= monkeyMoney;


//appending image and button elements to document body
document.body.appendChild(myImg);
document.body.appendChild(myBtn);

//15.

myBtn.addEventListener('click', magic)

function magic(){                                //NOTE:
	myImg.setAttribute('src', 'img/cpu.jpg');    //img URL is broken to see ALt property
	myP.innerText= "You knoooooow!";
	myImg.setAttribute('alt', 'Hello World!');   //The logic doesnt Work, to change the P innerText, but it does change the Alt, when image URL is broken.
	return;
};

