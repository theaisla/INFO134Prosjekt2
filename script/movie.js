
/*------------------------------- Strat på trailer kode--------------------------------------------*/
var id = "46";
var alien = movies_object[id];
if (movies_object["youtube trailer id"] !== "" ){
document.getElementById("trailer").src =('https://www.youtube.com/embed/' + alien["youtube trailer id"]);
}
/*------------------------------- Slutt på trailer kode--------------------------------------------*/


var films = [];
for(x in movies_object){
	films.push(movies_object[x]);
}

for (var i=0; i < films.length; i++){
	if(films[i]["youtube trailer id"]){
		console.log(films[i]);
		
		if(films[i]===alien){
		 console.log(alien["youtube trailer id"]);
		}
		
	}
}
