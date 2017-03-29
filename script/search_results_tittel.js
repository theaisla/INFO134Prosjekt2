// lese input
var input = get_query_string_parameters();
// lagre resultater i en array
var results = [];

//var relevanteFilmen = movies_object[query_params.id];
//var idFilm = relevanteFilmen["id"];
//var trailerTilFilm = movies_object[idTrailer];

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

			//document.getElementById("search").action =("film1.html?id=" + films[i].id);
			var url = "film1.html?id=" + films[i].id;
			window.location = url;
		}

		/*else if (films[i].otitle !== input.film_title && films[i].etitle !== input.film_title  && films[i].ntitle !== input.film_title){
			//window.alert("Denne filmen finnes ikke hos oss");
			window.location = "google.com";
		}*/

	}
}
