// Kode av: kandidat 268

query_params = get_query_string_parameters();
var relevanteFilmen = movies_object[query_params.id];
var relevanteSjanger = genres_object[query_params.id];
var relevanteAnmeldelse = reviews_object[query_params.id];

/*------------------------------- Start på review kode--------------------------------------------*/
//skriver ut bruker, rating og kommentar
for (key in relevanteAnmeldelse) {
	var bruker = relevanteAnmeldelse[key]['username'] + ":   ";
	var rate = " Karakter: " + relevanteAnmeldelse[key]['rating']  
	var p = document.createElement("p");
	var p2 = document.createElement("p");
	var p3 = document.createElement("p");
	var p4 = document.createElement("br");
	p.innerHTML = bruker;
	p2.innerHTML = rate;
	p3.innerHTML = kom;
	p4.innerHTML = "";
	document.getElementById("review").appendChild(p);
	document.getElementById("review").appendChild(p2);
	if (relevanteAnmeldelse[key]['comment']!== ""){
		var kom = " Kommentar: " + relevanteAnmeldelse[key]['comment'];
		document.getElementById("review").appendChild(p3);
	}
	document.getElementById("review").appendChild(p4);
}

//skriver ut gjennomsnittlig rate
if (relevanteAnmeldelse){
	var brukerneIArray = [];
	var karaktereneIArray = [];
	for(kommentarFraBruker in relevanteAnmeldelse){
		brukerneIArray.push(relevanteAnmeldelse[kommentarFraBruker]);
	}
	for (var i=0; i < brukerneIArray.length; i++){
		if(brukerneIArray[i]["rating"]){
			karaktereneIArray.push(brukerneIArray[i]['rating']);
		}
	}

	var p = document.createElement("p");
	var total = 0;
	for(var i = 0; i < karaktereneIArray.length; i++) {
		total += karaktereneIArray[i];
	}

	var avg = total / karaktereneIArray.length;
	p.innerHTML ="Gjennomsnittlig karakter: "+avg;

	document.getElementById("rate2").appendChild(p);
}
/*------------------------------- slutt på review kode--------------------------------------------*/


/*------------------------------- Start på sjanger kode--------------------------------------------*/
if(relevanteSjanger && relevanteSjanger[0] !== "" ){
	document.getElementById("genre").innerHTML =(relevanteSjanger);
}else{
	var link = document.getElementById('genreDiv');
	link.style.display = 'none'; //1697
}
/*------------------------------- Slutt på sjanger kode--------------------------------------------*/


/*------------------------------- Start på trailer kode--------------------------------------------*/
var idTrailer = relevanteFilmen["id"];
var trailerTilFilm = movies_object[idTrailer];



if (trailerTilFilm["youtube trailer id"] !== "" ){
	var h2 = document.createElement("h2");
	h2.innerHTML ="Trailer";
	document.getElementById("tra").appendChild(h2);
	document.getElementById("trailer").src =('https://www.youtube.com/embed/' + trailerTilFilm["youtube trailer id"]);
}else{
	var link = document.getElementById('trailerDiv');
	link.style.display = 'none';
}
/*------------------------------- Slutt på trailer kode--------------------------------------------*/


/*------------------------------- Start på tittel kode--------------------------------------------*/
document.getElementById("otitle").innerHTML =(relevanteFilmen["otitle"]); //orginaltittel til filmen
document.getElementById("title").innerHTML =(relevanteFilmen["otitle"]); //tittel vises i breadcrum

if (relevanteFilmen["ntitle"] !== relevanteFilmen["etitle"]){
	if(relevanteFilmen["ntitle"] !== ""){
		document.getElementById("ntitle").innerHTML =("Norsk tittel: " + relevanteFilmen["ntitle"]);
	}
	if(relevanteFilmen["etitle"] !== ""){
		document.getElementById("etitle").innerHTML =("Engelsk tittel: " + relevanteFilmen["etitle"]);
	}
}
/*------------------------------- Slutt på tittel kode--------------------------------------------*/


/*------------------------------- Start på fakta kode--------------------------------------------*/
if(relevanteFilmen["length"] !== null && relevanteFilmen["country"] !== null && relevanteFilmen["year"] !== null){
document.getElementById("facts").innerHTML =("| " + relevanteFilmen["length"] + " minutter | " + relevanteFilmen["country"] + " | " + relevanteFilmen["year"] + " | " );
}else if(relevanteFilmen["country"] !== null && relevanteFilmen["year"] !== null){
	document.getElementById("facts").innerHTML =("| " + relevanteFilmen["country"] + " | " + relevanteFilmen["year"] + " | " );
}else if(relevanteFilmen["length"] !== null && relevanteFilmen["year"] !== null){
	document.getElementById("facts").innerHTML =("| " + relevanteFilmen["length"] + " minutter | "  + " | " + relevanteFilmen["year"] + " | " );
}else if(relevanteFilmen["length"] !== null && relevanteFilmen["country"] !== null){
	document.getElementById("facts").innerHTML =("| " + relevanteFilmen["length"] + " minutter | "  + " | " + relevanteFilmen["country"] + " | " );
}else if(relevanteFilmen["length"] !== null){
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
		var direk = relevanteFilmen["dir"];
		var direkList = direk.split(',');
		var direkt = '<a href="search_results.html?director=' + direkList[0] + '">' + direkList[0] + '</a>'
		for(var i =1; i<direkList.length;i++){
			direkt = direkt + ", " + '<a href="search_results.html?director=' + direkList[i] + '">' + direkList[i] + '</a>';
		}
	document.getElementById("dir").innerHTML =(direkt);
	//console.log("direktør");
	} else{
		var link = document.getElementById('dirDiv');
		link.style.display = 'none';
		//console.log("null direktør");
	}
}

if(movies_object["folk"] !== ""){
	if (relevanteFilmen["folk"] !== null || relevanteFilmen["folk"] !== ""){
		var skuespillere = relevanteFilmen["folk"];
		var skuList = skuespillere.split(',');
		var sku = '<a href="search_results.html?actor=' + skuList[0] + '">' + skuList[0] + '</a>'
		for(var i =1; i<skuList.length;i++){
			sku = sku + ", " + '<a href="search_results.html?actor=' + skuList[i] + '">' + skuList[i] + '</a>';
		}
		document.getElementById("folk").innerHTML = sku;
	}
else{
		//console.log("null skespillere");
		var link = document.getElementById('folkDiv');
		link.style.display = 'none'; //1697
	}
}
/*------------------------------- Slutt på personer kode--------------------------------------------*/


/*------------------------------- Start på bilde kode--------------------------------------------*/
var bildeId = relevanteFilmen['id'];
var tittel = relevanteFilmen['otitle'];
if(bildeId){
	document.getElementById("bilde").alt =('Coverbilde til ' + tittel);
	document.getElementById("bilde2").alt =('Coverbilde til ' + tittel);
	document.getElementById("bilde3").alt =('Coverbilde til ' + tittel);

	if(bildeId < 1000){
		document.getElementById("bilde").src =('https://nelson.uib.no/o/0/' + bildeId +  ".jpg");
		document.getElementById("bilde2").src =('https://nelson.uib.no/o/0/' + bildeId +  "b.jpg");
		document.getElementById("bilde3").src =('https://nelson.uib.no/o/0/' + bildeId +  "c.jpg");
	}
	if (bildeId >= 1000 && bildeId < 2000){
		document.getElementById("bilde").src =('https://nelson.uib.no/o/1/' + bildeId +  ".jpg");
		document.getElementById("bilde2").src =('https://nelson.uib.no/o/1/' + bildeId +  "b.jpg");
		document.getElementById("bilde3").src =('https://nelson.uib.no/o/1/' + bildeId +  "c.jpg");
	}
	if (bildeId >= 2000 && bildeId < 3000){
		document.getElementById("bilde").src =('https://nelson.uib.no/o/2/' + bildeId +  ".jpg");
		document.getElementById("bilde2").src =('https://nelson.uib.no/o/2/' + bildeId +  "b.jpg");
		document.getElementById("bilde3").src =('https://nelson.uib.no/o/2/' + bildeId +  "c.jpg");	
	}
	if (bildeId >= 3000){
		document.getElementById("bilde").src =('https://nelson.uib.no/o/3/' + bildeId +  ".jpg");
		document.getElementById("bilde2").src =('https://nelson.uib.no/o/3/' + bildeId +  "b.jpg");
		document.getElementById("bilde3").src =('https://nelson.uib.no/o/3/' + bildeId +  "c.jpg");	
	}
}
/*------------------------------- Slutt på bilde kode--------------------------------------------*/