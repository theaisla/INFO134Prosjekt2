// lese input
var input = get_query_string_parameters();
// lagre resultater i en array
var results = [];
//var relevanteFilmen = movies_object[input.id];
//var resultList = document.querySelector("#res_list");
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
			//document.getElementById("title_h3").innerHTML = ("<h3>Filmtittel</h3>");
      document.getElementById("title").innerHTML = ("<a href=" + url + ">" + films[i].otitle + "</a>");
		}
	}
}


function search_for_director(e) {
  //e.preventDefault();
	var director = document.getElementById("director");
  readAsArray(e);
	var directors = [];

  // søke gjennom objects til den finner en film med lik tittel som input.
	for(var j = 0; j < films.length; j++){
		if (films[j].dir === input.director){
			//console.log(films[j]);

			var titles = films[j].otitle.toString();
			var url = "film1.html?id=" + films[j].id;
			//console.log(titles);
			//document.getElementById("director").innerHTML = (films[j].dir + ": Regissør av filmene - ");

			var ol = document.createElement("ol");
			ol.innerHTML = "<a href=" + url + ">" + titles + "</a>";
			var body = document.getElementById("director");
			body.appendChild(ol);


		//document.getElementById("director").innerHTML = ("<p>" + films[j].dir + ": Regissør av filmene - " + titles + "</p>");
		//<a href=
		}
	}
}

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
		director.innerHTML = ("<h4>" + query_params.director + ": Regissør av filmene - <h4>");
		search_for_director(input);
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
