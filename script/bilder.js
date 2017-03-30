//bilder
/*For ˚a inkudere bildene i websiden, m˚a dere lage en JavaScript funksjon som henter bildene fra https://nelson.uib.no/o/X, hvor X er første siﬀer n˚ar tallet er formatert som ﬁresifret tall. 

For eksempel, for ˚a hente bildene av en ﬁlm med id=“1234”, m˚a søkefunksjonen hente bildene fra URLen https://nelson.uib. no/o/1/1234.jpg. Hvorav i “o/1/”, “o” er konstant for alle bildene, mens “1” her er første siﬀer av ﬁlm id. 

Om ﬁlm id er lik “123”, kan bildet hentes fra https://nelson.uib.no/o/0/123.jpg. Alle ﬁlmene med “id<1000” m˚a hentes fra https://nelson.uib.no/o/0/. 

Om ﬁlm id er lik “2345”, vil URLen være https://nelson.uib.no/o/2/2345.jpg. 

Det er krav om ˚a inkludere et bilde. Men dere kan inkludere to eller tre bilder (om de ﬁnnes), hvor for bilde 2, ender URLen med ﬁlm id etterfulgt av “b.jpg” (“2345b.jpg” i forrige eksempel), og for bilde nummer tre m˚a den bli etterfulgt av “c.jpg” (“2345c.jpg” i eksempelet). Merk at ikke alle ﬁlmene har mer en ett bilde.*/

query_params = get_query_string_parameters();
var relevanteFilmen = movies_object[query_params.id];

var bildeId = relevanteFilmen['id'];

// må fikse de som IKKE har bilde -- 1033
if(bildeId < 1000){
	document.getElementById("bilde").src =('https://nelson.uib.no/o/0/' + bildeId +  ".jpg");
}
if (bildeId >= 1000 && bildeId < 2000){
	document.getElementById("bilde").src =('https://nelson.uib.no/o/1/' + bildeId +  ".jpg");
}
if (bildeId >= 2000 && bildeId < 3000){
	document.getElementById("bilde").src =('https://nelson.uib.no/o/2/' + bildeId +  ".jpg");
}
if (bildeId >= 3000){
	document.getElementById("bilde").src =('https://nelson.uib.no/o/3/' + bildeId +  ".jpg");
}

//console.log(bildeId);