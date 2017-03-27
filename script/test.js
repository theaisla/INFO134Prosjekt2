var id = "46";
var alien = movies_object[id];
var films = [];
for(x in movies_object){
	films.push(movies_object[x]);
}

for (var i=0; i < films.length; i++){
	if(films[i]["youtube trailer id"]){
		if(films[i]===alien){
		 console.log(alien["youtube trailer id"]);
		}
		
	}
}



if (movies_object["youtube trailer id"] !== "" ){
document.getElementById("trailer").src =('https://www.youtube.com/embed/' + alien["youtube trailer id"]);
}
/*
window.onload = function(){
var link = 'https://www.youtube.com/embed/';
var iframe = document.createElement('iframe');
iframe.frameBorder=0;
iframe.width="300px";
iframe.height="250px";
iframe.id="randomid";
iframe.setAttribute("src", link);
document.getElementById("ad54").appendChild(iframe);

}*/