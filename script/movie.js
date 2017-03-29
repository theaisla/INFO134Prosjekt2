query_params = get_query_string_parameters();
var relevanteFilmen = movies_object[query_params.id];
var relevanteSjanger = genres_object[query_params.id];
var relevanteAnmeldelse = reviews_object[query_params.id];

/*------------------------------- Start på review kode--------------------------------------------*
var id3 = relevanteAnmeldelse["object"];
var anmeldelseTilFilm = reviews_object[id3];

document.getElementById("anmeldelse").innerHTML =(relevanteAnmeldelse["rating"]);
console.log(relevanteAnmeldelse);
/*------------------------------- slutt på review kode--------------------------------------------*/


/*------------------------------- Start på sjanger kode--------------------------------------------*/
if(relevanteSjanger[0] !== ""){
	console.log(relevanteSjanger[0]);//id = 3519
	document.getElementById("genre").innerHTML =(relevanteSjanger);
}else{
	console.log("null sjanger");
	var link = document.getElementById('genreDiv');
	link.style.display = 'none'; //1697
}
/*------------------------------- Slutt på sjanger kode--------------------------------------------*/


/*------------------------------- Start på trailer kode--------------------------------------------*/
var idTrailer = relevanteFilmen["id"];
var trailerTilFilm = movies_object[idTrailer];

if (trailerTilFilm["youtube trailer id"] !== "" ){
	console.log("trailer"); //id= 46
	document.getElementById("trailer").src =('https://www.youtube.com/embed/' + trailerTilFilm["youtube trailer id"]);
}else{
	console.log("null trailer");//id=64
	var link = document.getElementById('trailerDiv');
	link.style.display = 'none';
}
/*------------------------------- Slutt på trailer kode--------------------------------------------*/


/*------------------------------- Start på tittel kode--------------------------------------------*/
document.getElementById("otitle").innerHTML =(relevanteFilmen["otitle"]);
document.getElementById("title").innerHTML =(relevanteFilmen["otitle"]);

if (relevanteFilmen["ntitle"] !== relevanteFilmen["etitle"]){
	if(relevanteFilmen["ntitle"] !== "" ){
		document.getElementById("ntitle").innerHTML =(relevanteFilmen["ntitle"]);
		console.log("norsk tittel");
		//id=239
	}
	
	if(relevanteFilmen["etitle"] !== ""){
		document.getElementById("etitle").innerHTML =(relevanteFilmen["etitle"]);
		console.log("engelsk tittel");
		//id 1697
	}

}
if(relevanteFilmen["ntitle"] === "" ){
	var link = document.getElementById('norskt');
	link.style.display = 'none';
	console.log("null norsk");
	}

if(relevanteFilmen["etitle"] === "" ){
	var link = document.getElementById('engelskt');
	link.style.display = 'none';
	console.log("null engelsk");
}
/*------------------------------- Slutt på tittel kode--------------------------------------------*/


/*------------------------------- Start på fakta kode--------------------------------------------*/
if(relevanteFilmen["length"] !== null && relevanteFilmen["country"] !== null && relevanteFilmen["year"] !== null){
document.getElementById("facts").innerHTML =("| " + relevanteFilmen["length"] + " minutter | " + relevanteFilmen["country"] + " | " + relevanteFilmen["year"] + " | " );
}
else if(relevanteFilmen["country"] !== null && relevanteFilmen["year"] !== null){
	document.getElementById("facts").innerHTML =("| " + relevanteFilmen["country"] + " | " + relevanteFilmen["year"] + " | " );
}
else if(relevanteFilmen["length"] !== null && relevanteFilmen["year"] !== null){
document.getElementById("facts").innerHTML =("| " + relevanteFilmen["length"] + " minutter | "  + " | " + relevanteFilmen["year"] + " | " );
}
else if(relevanteFilmen["length"] !== null && relevanteFilmen["country"] !== null){
document.getElementById("facts").innerHTML =("| " + relevanteFilmen["length"] + " minutter | "  + " | " + relevanteFilmen["country"] + " | " );
}
else if(relevanteFilmen["length"] !== null){
document.getElementById("facts").innerHTML =("| " + relevanteFilmen["length"] + " minutter | ");
}else if(relevanteFilmen["year"] !== null){
document.getElementById("facts").innerHTML =("| " + relevanteFilmen["year"] + " | ");
}else if(relevanteFilmen["country"] !== null){
document.getElementById("facts").innerHTML =("| " + relevanteFilmen["country"] + " | ");
}
/*------------------------------- Slutt på fakta kode--------------------------------------------*/


/*------------------------------- Start på handling kode--------------------------------------------*/
if (relevanteFilmen["description"] === null || relevanteFilmen["description"] === "" ){
	var link = document.getElementById('descriptionDiv');
	link.style.display = 'none';
}
else{
	document.getElementById("description").innerHTML =(relevanteFilmen["description"]);
}
/*------------------------------- Slutt på handling kode--------------------------------------------*/


/*------------------------------- Start på personer kode--------------------------------------------*/
if(movies_object["dir"] !== ""){
	if (relevanteFilmen["dir"] !== ""){
	document.getElementById("dir").innerHTML =(relevanteFilmen["dir"]);
	} else{
		var link = document.getElementById('dirDiv');
		link.style.display = 'none';
	}
}

if(movies_object["folk"] !== ""){
	if (relevanteFilmen["folk"] !== null){
		document.getElementById("folk").innerHTML =(relevanteFilmen["folk"]);
	}
	if(relevanteFilmen["folk"] !== ""){
		document.getElementById("folk").innerHTML =(relevanteFilmen["folk"]);
	}else{
		console.log("null skespillere");
		var link = document.getElementById('folkDiv');
		link.style.display = 'none'; //1697
	}
}
/*------------------------------- Slutt på personer kode--------------------------------------------*/