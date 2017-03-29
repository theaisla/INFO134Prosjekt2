//bilder
/*For ˚a inkudere bildene i websiden, m˚a dere lage en JavaScript funksjon som henter bildene fra https://nelson.uib.no/o/X, hvor X er første siﬀer n˚ar tallet er formatert som ﬁresifret tall. 

For eksempel, for ˚a hente bildene av en ﬁlm med id=“1234”, m˚a søkefunksjonen hente bildene fra URLen https://nelson.uib. no/o/1/1234.jpg. Hvorav i “o/1/”, “o” er konstant for alle bildene, mens “1” her er første siﬀer av ﬁlm id. 

Om ﬁlm id er lik “123”, kan bildet hentes fra https://nelson.uib.no/o/0/123.jpg. Alle ﬁlmene med “id<1000” m˚a hentes fra https://nelson.uib.no/o/0/. 

Om ﬁlm id er lik “2345”, vil URLen være https://nelson.uib.no/o/2/2345.jpg. 

Det er krav om ˚a inkludere et bilde. Men dere kan inkludere to eller tre bilder (om de ﬁnnes), hvor for bilde 2, ender URLen med ﬁlm id etterfulgt av “b.jpg” (“2345b.jpg” i forrige eksempel), og for bilde nummer tre m˚a den bli etterfulgt av “c.jpg” (“2345c.jpg” i eksempelet). Merk at ikke alle ﬁlmene har mer en ett bilde.*/
/*
if(x<1000){
https://nelson.uib.no/o/0/xxx.jpg
}
if (x>=1000 && x<2000){
https://nelson.uib.no/o/1/xxxx.jpg
}
if (x>=2000){
https://nelson.uib.no/o/2/xxxx.jpg
}*/

function hentBilder(x){
	
}