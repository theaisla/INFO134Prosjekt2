// lese input
var input = get_query_string_parameters();

// lagre resultater/filmer i en array
var results = [];
var films = [];

//___________________________________ Gjør at objects.js kan leses som en array ___________________________________
function readAsArray(e){
	for (x in movies_object){
		films.push(movies_object[x]);
	}
}

//___________________________________ Søk etter tittel ____________________________________________________________

function search_for_movie_title(e) {
  //e.preventDefault();
  readAsArray(e);
  // søke gjennom objects til den finner en film med lik tittel som input.
	for(var i = 0; i < films.length; i++){
		if (films[i].otitle === input.title || films[i].etitle === input.title  || films[i].ntitle === input.title){
			results.push(films[i]);
			console.log(films[i]);
			// finne url til de ulike filmene.
			var url = "film1.html?id=" + films[i].id;
			// printer ut filmtittel
      document.getElementById("title").innerHTML = ("<ol><a href=" + url + ">" + films[i].otitle + "</a></ol>");
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



  // søke gjennom objects til den finner en regissør med samme navn.
	for(var i = 0; i < folkifilm.length; i++){
		//if (folkifilm[i].folk === input.actor){
		if (folkifilm[i].folk.includes(input.actor)){
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
		if (films[j].dir === input.director){

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


	//var relevanteSjanger = genres_object[];
	//console.log(relevanteSjanger );
  //søke gjennom til den finner like.
	for(var i = 0; i < genres.length; i++){
		if (genres[i] == input.genre){
			for(var j = 0; j < films.length; j++){
				if(genres[i] == films[j].id){

					console.log(films[j]);
				}
			}

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

	if (query_params.title) {
        title = document.getElementById("title");
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
