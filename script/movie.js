query_params = get_query_string_parameters();
var relevanteFilmen = movies_object[query_params.id];
var relevanteSjanger = genres_object[query_params.id];
var relevanteAnmeldelse = reviews_object[query_params.id];


/*------------------------------- Start på review kode--------------------------------------------*/
/*
var anId = relevanteAnmeldelse["object"];
var anmeldelseTilFilm = reviews_object[anId];*/

function add_row(table, left, right) {
    new_row = document.createElement("TR");
    left_cell = document.createElement("TD");
    left_cell.appendChild(left);
    new_row.appendChild(left_cell);
    
    right_cell = document.createElement("TD");
    right_cell.appendChild(right);
    new_row.appendChild(right_cell);
    
    table.appendChild(new_row);
}

review_table = document.getElementById("review");
for (key in relevanteAnmeldelse) {
	left = document.createTextNode(key);
	right = document.createTextNode(relevanteAnmeldelse[key]);
	add_row(review_table, left, right);
	for (subkey in relevanteAnmeldelse[key]) {
	    left = document.createTextNode(subkey);
	    right = document.createTextNode(relevanteAnmeldelse[key][subkey]);
	    add_row(review_table, left, right);
	}
    }
/*
for(var i =0 ; i< relevanteAnmeldelse.length; i++){
	document.getElementById("review").innerHTML =(relevanteAnmeldelse);

}


document.getElementById("review").innerHTML =("Rating fra " + relevanteAnmeldelse + " " + relevanteAnmeldelse['xyz010']['rating']);
	console.log(relevanteAnmeldelse);

console.log(relevanteAnmeldelse['xyz010']['rating']);
console.log(reviews_object["username"]);*/
/*------------------------------- slutt på review kode--------------------------------------------*/


/*------------------------------- Start på tittel kode--------------------------------------------*/
document.getElementById("otitle").innerHTML =(relevanteFilmen["otitle"]); //orginaltittel til filmen
document.getElementById("title").innerHTML =(relevanteFilmen["otitle"]); //tittel vises i breadcrum

if (relevanteFilmen["ntitle"] !== relevanteFilmen["etitle"]){
	if(relevanteFilmen["ntitle"] !== ""){
		document.getElementById("ntitle").innerHTML =("Norsk tittel: " + relevanteFilmen["ntitle"]);
		//console.log("norsk tittel");
		//id=239
	}

	if(relevanteFilmen["etitle"] !== ""){
		document.getElementById("etitle").innerHTML =("Engelsk tittel: " + relevanteFilmen["etitle"]);
		//console.log("engelsk tittel");
		//id 1697
	}

}

//2345
/*------------------------------- Slutt på tittel kode--------------------------------------------*/


/*------------------------------- Start på sjanger kode--------------------------------------------*/
//får feil hvis filmen ikke har sjanger!! 1697
if(relevanteSjanger && relevanteSjanger[0] !== "" ){
	//console.log(relevanteSjanger[0]);//id = 3519
	document.getElementById("genre").innerHTML =(relevanteSjanger);
}else{
	//console.log("null sjanger");
	var link = document.getElementById('genreDiv');
	link.style.display = 'none'; //1697
}

/*------------------------------- Slutt på sjanger kode--------------------------------------------*/


/*------------------------------- Start på trailer kode--------------------------------------------*/
var idTrailer = relevanteFilmen["id"];
var trailerTilFilm = movies_object[idTrailer];

if (trailerTilFilm["youtube trailer id"] !== "" ){
	//console.log("trailer"); //id= 46
	document.getElementById("trailer").src =('https://www.youtube.com/embed/' + trailerTilFilm["youtube trailer id"]);
}else{
	//console.log("null trailer");//id=64
	var link = document.getElementById('trailerDiv');
	link.style.display = 'none';
}
/*------------------------------- Slutt på trailer kode--------------------------------------------*/


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
	//console.log("null discription");
}
else{
	document.getElementById("description").innerHTML =(relevanteFilmen["description"]);
	//console.log(" discription");
	
}
/*------------------------------- Slutt på handling kode--------------------------------------------*/


/*------------------------------- Start på personer kode--------------------------------------------*/
if(movies_object["dir"] !== ""){
	if (relevanteFilmen["dir"] !== ""){
	document.getElementById("dir").innerHTML =(relevanteFilmen["dir"]);
	//console.log("direktør");
	} else{
		var link = document.getElementById('dirDiv');
		link.style.display = 'none';
		//console.log("null direktør");
	}
}

if(movies_object["folk"] !== ""){
	if (relevanteFilmen["folk"] !== null){
		document.getElementById("folk").innerHTML =(relevanteFilmen["folk"]);
	}
	if(relevanteFilmen["folk"] !== ""){
		document.getElementById("folk").innerHTML =(relevanteFilmen["folk"]);
	}else{
		//console.log("null skespillere");
		var link = document.getElementById('folkDiv');
		link.style.display = 'none'; //1697
	}
}
/*------------------------------- Slutt på personer kode--------------------------------------------*/