// lese input
var input = get_query_string_parameters();
// lagre resultater i en array
var results = [];

var relevanteFilmen = movies_object[input.id];

var resultList = document.querySelector("#res_list");

var films = [];

function readAsArray(a){
	// Gjør at objects.js kan leses som en array
	for (x in movies_object){
		films.push(movies_object[x]);
	}
}

function search_for_movie_title(e) {
  //e.preventDefault();
  readAsArray(e);
  // søke gjennom objects til den finner en film med lik tittel som input.
	for(var i = 0; i < films.length; i++){
		if (films[i].otitle === input.film_title || films[i].etitle === input.film_title  || films[i].ntitle === input.film_title){
			results.push(films[i]);
			console.log(films[i]);

			var url = "film1.html?id=" + films[i].id;
			document.getElementById("title").innerHTML = ("<h3> Filmtittel </h3>");
      document.getElementById("title").innerHTML = ("<a href=" + url + ">" + films[i].otitle + "</a>");
		}
	}
}

function search_for_actor(e) {
  //e.preventDefault();
  readAsArray(e);
	var actors = [];
  // søke gjennom objects til den finner en film med lik tittel som input.
	for(var i = 0; i < films.length; i++){
		if (films[i].folk === input.actor){
			results.push(films[i]);
			console.log(films[i]);

			/*var url = "film1.html?id=" + films[i].id;
			document.getElementById("title").innerHTML = ("<h3> Skuespiller </h3>");
			for (x in films){
				films.push(movies_object[x]);
      	document.getElementById("title").innerHTML = ("<a href=" + url + ">" + films[i].otitle + "</a>");
			}*/
		}
	}
}






window.onload = function() {
	query_params = get_query_string_parameters();

	search_results = movies_object;

	if (query_params.film_title) {
        film_title = document.getElementById("film_title");
    search_for_movie_title(input);
    }

	if (query_params.actor) {
        actor = document.getElementById("actor");
		actor.innerHTML = query_params.actor;
		search_for_actor(input);
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



// skriver ut id til alle som har youtubevideo.
/*var films = [];
var results = [];

for(x in movies_object){
	films.push(movies_object[x]);
}
for (var i=0; i < films.length; i++){
	if(films[i]["youtube trailer id"]){
		results.push(films[i]);
		console.log(films[i]["id"]);


	}
}
*/
