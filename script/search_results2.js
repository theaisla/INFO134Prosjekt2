// lese input
var input = get_query_string_parameters();
// lagre resultater i en array
var results = [];

query_params = get_query_string_parameters();
var relevanteFilmen = movies_object[query_params.id];
//var relevanteSjanger = genres_object[query_params.id];
//var relevanteAnmeldelse = reviews_object[query_params.id];

var resultList = document.querySelector("#res_list");

function search_for_movie(e) {
  //e.preventDefault();
  // Gjør at objects.js kan leses som en array
	var films = [];
	for (x in movies_object){
		films.push(movies_object[x]);
	}
  // søke gjennom objects til den finner en film med lik tittel som input.
	for(var i = 0; i < films.length; i++){
		if (films[i].otitle === input.film_title || films[i].etitle === input.film_title  || films[i].ntitle === input.film_title ){
			results.push(films[i]);
			console.log(films[i]);
      //displayResults(results)
      //console.log(results);
      document.getElementById("film_title").innerHTML = ("Tittel: " + films[i].otitle);
		}
	}
}

//function displayResults(results) {



  //if(relevanteFilmen["length"] !== null && relevanteFilmen["country"] !== null && relevanteFilmen["year"] !== null){
  //document.getElementById("facts").innerHTML =("| " + relevanteFilmen["length"] + " minutter | " + relevanteFilmen["country"] + " | " + relevanteFilmen["year"] + " | " );
  //}

/*
  <div id="film_title"></div>
  <div id="actor"></div>
  <div id="director"></div>
  <div id="genre"></div>
  <div id="country"></div>
  <div id="picture" src=""></div>
  <!-- Returnere resultatene som en (ordered <ol>) liste -->
  <ol id="res_list"></ol>

*/






/*function displayResults(results) {

  for(var i = 0; i < results.length; i++) {
    //console.log(results[i]);
  	// Opprett en ny li-tagg
  	var ol = document.createElement("ol");
  	// Sett en tekststreng som innhold
    ol.innerHTML = results[i];

    //getElementById("film_title");
  	// Legg li-taggen til i resultList (resultList er en ol-tagg)
  	resultList.appendChild(ol);
  }
}*/


//search_for_X(input);
//displayResults(results);

window.onload = function() {
	query_params = get_query_string_parameters();

	search_results = movies_object;

	if (query_params.film_title) {
        film_title = document.getElementById("film_title");
    search_for_movie(input);
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
