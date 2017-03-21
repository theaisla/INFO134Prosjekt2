//var input = document.forms.searchForm.film_t;
var input = document.getElementById("film_title");
//var searchBtn = document.forms.searchForm.submit;
var results = [];

// Her kan dere implementere en søkefunksjon. For eksempel:
function search_for_X(e) {
	e.preventDefault();
	// Hent ut søkeverdi fra input-felt
	/*var search = input.value;

	// Vi oppretter en tom liste for å lagre resultatene i
	var results = [];
	// Så iterer vi gjennom alle dyrene
	//for(var i = 0; i < animals.length; i++) {
	//list_element = document.getElementById("all_movies");
	for (movie_id in movies_object){
		// Hvis typen til dyret matcher det vi har søkt på
		//if(animals[i].type === search) {
		if (search == otitle || search == ntitle || search == etitle ) {
			// legg dyr til i resultatlisten
			results.push(movie_id);

		}
	}*/

	var films = [];
	var results = [];
	for (x in movies_object){
		films.push(movie_object[x]);
	}

	for(var i = 0; i < films.length; i++){
		if (films[i].otitle === input){
			results.push(films[i]);
			console.log(films[i]);
		}
	}
		//displayResults(results);
	}

	// Kall en metode som viser resultatene på skjermen for brukeren

	// Først resetter vi søkeresultatene, dersom det har vært søkt på noe tidligere.
	// Prøv å kommentere ut metodekallet under og se hva som skjer
	//resetSearchResults();
	// For hvert element i resultatlisten
	function displayResults(results) {
		for(var i = 0; i < results.length; i++) {
			// Opprett en ny li-tagg
			var ol = document.createElement("ol");
			// Sett en tekststreng som innhold
			ol.innerHTML = results[i];

			// Legg li-taggen til i resultList (resultList er en ol-tagg)
			resultList.appendChild(ol);
		}
	}

/* Her kan dere implementere en display function som viser resulatetene av søket. For eksempel:
function display_X() {
}
*/

window.onload = function() {
	query_params = get_query_string_parameters();

	search_results = movies_object;

	if (query_params.film_title) {
        film_title = document.getElementById("film_title");

		//Her kan dere for eksempel kalle en søkefunksjon som søker for tittel.
    }

	if (query_params.actor) {
        actor = document.getElementById("actor");
		actor.innerHTML = query_params.actor;
    }

	if (query_params.director) {
		director = document.getElementById("director");
		director.innerHTML = query_params.director;
    }

	if (query_params.genre) {
        genre = document.getElementById("genre");
		genre.innerHTML = query_params.genre;
    }

	if (query_params.country) {
        country = document.getElementById("country");
		country.innerHTML = query_params.country;
    }

	//Her kan dere for eksempel kalle en (display) funksjon som viser søkeresultater
}
