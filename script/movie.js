query_params = get_query_string_parameters();
var relevanteFilmen = movies_object[query_params.id];
//var relevanteSjanger = genre_object[query_params.id];

/*------------------------------- Start på trailer kode--------------------------------------------*/
var id = relevanteFilmen["id"];
var trailerTilFilm = movies_object[id];

if (movies_object["youtube trailer id"] !== "" ){
document.getElementById("trailer").src =('https://www.youtube.com/embed/' + trailerTilFilm["youtube trailer id"]);
}
/*------------------------------- Slutt på trailer kode--------------------------------------------*/

document.getElementById("ntitle").innerHTML =(relevanteFilmen["ntitle"]);
document.getElementById("etitle").innerHTML =(relevanteFilmen["etitle"]);
document.getElementById("length").innerHTML =(relevanteFilmen["length"]);
document.getElementById("country").innerHTML =(relevanteFilmen["country"]);
document.getElementById("year").innerHTML =(relevanteFilmen["year"]);
//document.getElementById("genre").innerHTML =(relevanteSjanger["genre"]);
document.getElementById("description").innerHTML =(relevanteFilmen["description"]);
document.getElementById("dir").innerHTML =(relevanteFilmen["dir"]);
document.getElementById("folk").innerHTML =(relevanteFilmen["folk"]);