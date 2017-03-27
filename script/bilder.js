var films = [];
var results = [];

for(x in movies_object){
	films.push(movies_object[x]);
}


for (var i=0; i < films.length; i++){
	if(films[i]["youtube trailer id"]){
		//results.push(films[i]);
		console.log(films[i]["youtube trailer id"]);
	}
}


/*
hide(document.querySelectorAll('.target'));

function hide (elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';
  }
}


document.getElementById('trailer').innerHTML = "youtube trailer id";*/


//var id = "46";  //hente fra query url parameter
/*var thisMovie = movies_object[15];
console.log(thisMovie);*/
var ailien = movies_object["46"];
var films = [];
for(x in movies_object){
	films.push(movies_object[x]);
}

for (var i=0; i < films.length; i++){
	if(films[i]["youtube trailer id"]){
		//console.log(films[i]["youtube trailer id"]);
		if(films[i]===ailien){
		 console.log(ailien["youtube trailer id"]);
		}
		
	}
}
document.getElementById("trailer").src =('https://www.youtube.com/embed/' + ailien["youtube trailer id"]);


//
//document.getElementById('trailer').src = 'https://www.youtube.com/embed/p9sE1fIyIlg';
//document.getElementById('trailer').innerHTML ="hei" + "youtube trailer id";

//console.log(thiseMovie.["youtube trailer id"]);