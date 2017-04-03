// Kode av: tcl059, kandidat 139

// lese input
var input = get_query_string_parameters();
// lagre filmer i en array
var films = [];
// lagre resultater i en array
var results = [];

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
		if (films[i].otitle.toLowerCase().includes(input.film_title.toLowerCase()) ||
		films[i].etitle.toLowerCase().includes(input.film_title.toLowerCase())  ||
		films[i].ntitle.toLowerCase().includes(input.film_title.toLowerCase()) ){
			//console.log(films[i]);
			results.push(films[i]);
			displayResults("title1", i);
		}
	}
}

//___________________________________ Søk etter tittel responsiv ______________________________________________________

function search_for_title_res(e) {
  //e.preventDefault();
  readAsArray(e);
  // søke gjennom objects til den finner en film med lik tittel som input.
	for(var i = 0; i < films.length; i++){
		if (films[i].otitle.toLowerCase().includes(input.title.toLowerCase()) ||
		films[i].etitle.toLowerCase().includes(input.title.toLowerCase())  ||
		films[i].ntitle.toLowerCase().includes(input.title.toLowerCase()) ){
			//console.log(films[i]);
			results.push(films[i]);
			displayResults("title1", i);
		}
	}
}

//___________________________________ Søk etter tittel avansert søk _________________________________________________

function search_for_movie_title(e) {
  //e.preventDefault();
  readAsArray(e);
  // søke gjennom objects til den finner en film med lik tittel som input.
	for(var i = 0; i < films.length; i++){
		if (films[i].otitle.toLowerCase().includes(input.title.toLowerCase()) ||
		films[i].etitle.toLowerCase().includes(input.title.toLowerCase())  ||
		films[i].ntitle.toLowerCase().includes(input.title.toLowerCase()) ){
			//console.log(films[i]);
			results.push(films[i]);
			displayResults("title2", i);
		}
	}
}

//___________________________________ Søk etter skuespiller _______________________________________________________

function search_for_actor(e) {
  //e.preventDefault();
  readAsArray(e);

  // søke gjennom objects til den finner en regissør med samme navn.
	for(var i = 0; i < films.length; i++){
		//
		if (films[i].folk && (films[i].folk.toLowerCase().indexOf(input.actor.toLowerCase())) > -1){
			//console.log(films[i]);
			results.push(films[i]);
			displayResults("actor", i);
		}
	}
}

//___________________________________ Søk etter regissør ____________________________________________________________

function search_for_director(e) {
  //e.preventDefault();
  readAsArray(e);

  // søke gjennom objects til den finner en regissør med samme navn.
	for(var i = 0; i < films.length; i++){
		if (films[i].dir && (films[i].dir.toLowerCase().indexOf(input.director.toLowerCase())) > -1){
			//console.log(films[i]);
			results.push(films[i]);
			displayResults("director", i);
		}
	}
}

//___________________________________ Søk etter sjanger ____________________________________________________________

function search_for_genre(e) {
  //e.preventDefault();
  readAsArray(e);
	var genres = [];

for (x in genres_object){
		if (genres_object[x] && (genres_object[x].indexOf(input.genre.toLowerCase())) > -1){
			for (var i = 0; i < films.length; i++){
				if (x == films[i].id){
					results.push(films[i]);
					displayResults("genre", i);
				}
			}
		}
	}
}

//___________________________________ Søk etter land ____________________________________________________________

function search_for_country(e) {
  //e.preventDefault();
  readAsArray(e);

  // søke gjennom objects til den finner en regissør med samme navn.
	for(var i = 0; i < films.length; i++){
		if (films[i].country.toLowerCase() === input.country.toLowerCase()){
			results.push(films[i]);
			displayResults("country", i);

		}
	}
}

//___________________________________ display results ____________________________________________________________

function displayResults(arg, i){
	// gjøre om filmtittel til string
	var titles = films[i].otitle.toString();
	// finne url til de ulike filmene.
	var url = "film1.html?id=" + films[i].id;
	// lage en liste av de ulike filmene. Viktig at elementene ikke overskrives.
	var ol = document.createElement("ol");
	ol.innerHTML = "<a href=" + url + ">• " + titles + "</a>";
	var body = document.getElementById(arg);
	body.appendChild(ol);
}



//___________________________________ Kjøre kode ________________________________________________________________

window.onload = function() {
	query_params = get_query_string_parameters();
	search_results = movies_object;

	if (query_params.film_title) {
				title1 = document.getElementById("title1");
		title1.innerHTML = ("<h2> Filmtitler som inneholder "  + query_params.film_title +  ": <h2>");
		search_for_title(input);
		}

	if (query_params.film_title_res) {
				title1 = document.getElementById("title1");
		title1.innerHTML = ("<h2> Filmtitler som inneholder "  + query_params.title +  ": <h2>");
		search_for_title_res(input);
		}

	if (query_params.title) {
        title2 = document.getElementById("title2");
		title2.innerHTML = ("<h2> Filmtitler som inneholder "  + query_params.title +  ": <h2>");
    search_for_movie_title(input);
    }

	if (query_params.actor) {
        actor = document.getElementById("actor");
		actor.innerHTML = ("<h2>" + query_params.actor + ", skuespiller i filmene: <h2>");
		search_for_actor(input);
    }

	if (query_params.director) {
		director = document.getElementById("director");
		director.innerHTML = ("<h2>" + query_params.director + ", regissør av filmene: <h2>");
		search_for_director(input);
    }

	if (query_params.genre) {
        genre = document.getElementById("genre");
		genre.innerHTML = ("<h2>Films with genre " + query_params.genre + ":<h2>");
		search_for_genre(input);
    }

	if (query_params.country) {
        //country = document.getElementById("country");
		country.innerHTML = ("<h2> Films from " + query_params.country + ":<h2>");
		search_for_country(input);
	}

	if(results[""] == null){
		nores = document.getElementById("nores");
		nores.innerHTML = ("<p>Beklager, fant ikke noen resultater</p>");
	}
	// hvis resultarray er tomt, skriv det på resultatsiden
}
