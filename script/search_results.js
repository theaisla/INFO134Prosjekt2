// Kode av tcl059

// lese input
var input = get_query_string_parameters();

// lagre filmer i en array
var films = [];

//___________________________________ Gjør at objects.js kan leses som en array ___________________________________
function readAsArray(e){
	for (x in movies_object){
		films.push(movies_object[x]);
	}
}


//___________________________________ Søk etter tittel ____________________________________________________________

function search_for_title(e) {
  //e.preventDefault();
  readAsArray(e);
  // søke gjennom objects til den finner en film med lik tittel som input.
	for(var i = 0; i < films.length; i++){
		if (films[i].otitle.includes(input.film_title) || films[i].etitle.includes(input.film_title)  || films[i].ntitle.includes(input.film_title) ){
			console.log(films[i]);
			// gjøre om filmtittel til string
			var titles = films[i].otitle.toString();
			// finne url til de ulike filmene.
			var url = "film1.html?id=" + films[i].id;
			// lage en liste av de ulike filmene regissøren har laget. Viktig at elementene ikke overskrives.
			var ol = document.createElement("ol");
			ol.innerHTML = "<a href=" + url + ">" + titles + "</a>";
			var body = document.getElementById("title1");
			body.appendChild(ol);
		}
	}
}

//___________________________________ Søk etter tittel avansert søk _________________________________________________

function search_for_movie_title(e) {
  //e.preventDefault();
  readAsArray(e);
  // søke gjennom objects til den finner en film med lik tittel som input.
	for(var i = 0; i < films.length; i++){
		if (films[i].otitle.includes(input.title) || films[i].etitle.includes(input.title)  || films[i].ntitle.includes(input.title)){
			console.log(films[i]);

			// gjøre om filmtittel til string
			var titles = films[i].otitle.toString();
			// finne url til de ulike filmene.
			var url = "film1.html?id=" + films[i].id;
			// lage en liste av de ulike filmene regissøren har laget. Viktig at elementene ikke overskrives.
			var ol = document.createElement("ol");
			ol.innerHTML = "<a href=" + url + ">" + titles + "</a>";
			var body = document.getElementById("title2");
			body.appendChild(ol);
		}
	}
}

//___________________________________ Søk etter skuespiller _______________________________________________________

function search_for_actor(e) {
  //e.preventDefault();
  readAsArray(e);
	var folkifilm = [];


	/*for(var i = 0; i < films.length; i++){
		//for(x in films[i].folk){
			folkifilm.push(films[i].folk[x]);
		//if (films[j].folk === input.actor){
			console.log(folkifilm[x]);*/

//streng.indexOf(streng2) > -1

  // søke gjennom objects til den finner en regissør med samme navn.
	for(var i = 0; i < films.length; i++){
		//
		if (films[i].folk && (films[i].folk.indexOf(input.actor)) > -1){
			console.log(films[i]);

			// gjøre om filmtittel til string
			var titles = films[i].otitle.toString();
			// finne url til de ulike filmene.
			var url = "film1.html?id=" + films[i].id;
			// lage en liste av de ulike filmene regissøren har laget. Viktig at elementene ikke overskrives.
			var ol = document.createElement("ol");
			ol.innerHTML = "<a href=" + url + ">" + titles + "</a>";
			var body = document.getElementById("actor");
			body.appendChild(ol);
		}
	}
}

//___________________________________ Søk etter regissør ____________________________________________________________

function search_for_director(e) {
  //e.preventDefault();
  readAsArray(e);

  // søke gjennom objects til den finner en regissør med samme navn.
	for(var j = 0; j < films.length; j++){
		if (films[j].fdir && (films[j].dir.indexOf(input.director)) > -1){

			// gjøre om filmtittel til string
			var titles = films[j].otitle.toString();
			// finne url til de ulike filmene.
			var url = "film1.html?id=" + films[j].id;
			// lage en liste av de ulike filmene regissøren har laget. Viktig at elementene ikke overskrives.
			var ol = document.createElement("ol");
			ol.innerHTML = "<a href=" + url + ">" + titles + "</a>";
			var body = document.getElementById("director");
			body.appendChild(ol);
		}
	}
}

//___________________________________ Søk etter sjanger ____________________________________________________________

function search_for_genre(e) {
  //e.preventDefault();
  readAsArray(e);
	var genres = [];

	// legge all genre objekter i en array
	for (x in genres_object){
		genres.push(genres_object[x]);
	}

genre[id]
	for(var i = 0; i < films.length; i++){
		//for(var j = 0; j < genres.length; j++){
		if (genres_object[id] == input.genre){
			// gjøre om filmtittel til string
			var titles = films[j].otitle.toString();
			// finne url til de ulike filmene.
			var url = "film1.html?id=" + films[j].id;
			// lage en liste av de ulike filmene regissøren har laget. Viktig at elementene ikke overskrives.
			var ol = document.createElement("ol");
			ol.innerHTML = "<a href=" + url + ">" + titles + "</a>";
			var body = document.getElementById("genre");
			body.appendChild(ol);
		}

	}
}

	//var relevanteSjanger = genres_object[];
	//console.log(relevanteSjanger );
  //søke gjennom til den finner like.
	/*for(var i = 0; i < genres.length; i++){
		if (genres[i] == input.genre){
			for(var j = 0; j < films.length; j++){
				if(genres[i] == films[j].id){

					console.log(films[j]);
				}
			}*/

			//console.log(genres[i]);


			// gjøre om filmtittel til string

			//var gen = genres[i].otitle.toString();


			// finne url til de ulike filmene.
			//var url = "film1.html?id=" + genres[];
			//console.log(url);

			// lage en liste av de ulike filmene regissøren har laget. Viktig at elementene ikke overskrives.
			//var ol = document.createElement("ol");
			//ol.innerHTML = "<a href=" + url + ">" + gen + "</a>";
			//var body = document.getElementById("genre");
			//body.appendChild(ol);


/*var relevanteSjanger = genres_object[query_params.id];
//får feil hvis filmen ikke har sjanger!! 1697
if(relevanteSjanger && relevanteSjanger[0] !== "" ){
	console.log(relevanteSjanger[0]);//id = 3519
	document.getElementById("genre").innerHTML =(relevanteSjanger);
}else{
	console.log("null sjanger");
	var link = document.getElementById('genreDiv');
	link.style.display = 'none'; //1697
}
*/

//___________________________________ Søk etter land ____________________________________________________________

function search_for_country(e) {
  //e.preventDefault();
  readAsArray(e);

  // søke gjennom objects til den finner en regissør med samme navn.
	for(var i = 0; i < films.length; i++){
		if (films[i].country === input.country){

			// gjøre om filmtittel til string
			var titles = films[i].otitle.toString();
			// finne url til de ulike filmene.
			var url = "film1.html?id=" + films[i].id;
			// lage en liste av de ulike filmene. Viktig at elementene ikke overskrives.
			var ol = document.createElement("ol");
			ol.innerHTML = "<a href=" + url + ">" + titles + "</a>";
			var body = document.getElementById("country");
			body.appendChild(ol);
		}
	}
}



//___________________________________ Kjøre kode ________________________________________________________________

window.onload = function() {
	query_params = get_query_string_parameters();
	search_results = movies_object;

	if (query_params.film_title) {
				title1 = document.getElementById("title1");
		title1.innerHTML = ("<h4> Tittel: <h4>");
		search_for_title(input);
		}

	if (query_params.title) {
        title2 = document.getElementById("title2");
		title2.innerHTML = ("<h4> Tittel: <h4>");
    search_for_movie_title(input);
    }

	if (query_params.actor) {
        actor = document.getElementById("actor");
		actor.innerHTML = ("<h4>" + query_params.actor + ": Skuespiller i filmene: <h4>");
		search_for_actor(input);
    }

	if (query_params.director) {
		director = document.getElementById("director");
		director.innerHTML = ("<h4>" + query_params.director + ": Regissør av filmene: <h4>");
		search_for_director(input);
    }

	if (query_params.genre) {
        genre = document.getElementById("genre");
		genre.innerHTML = ("<h4>Films with genre " + query_params.genre + ":<h4>");
		search_for_genre(input);
    }

	if (query_params.country) {
        //country = document.getElementById("country");
		country.innerHTML = ("<h4> Films from " + query_params.country + ":<h4>");
		search_for_country(input);
	}
}
