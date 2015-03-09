var reponse = {};
reponse.db = "twitter";
reponse.code ="var db = require('./twitter');"+
" var date = {};"+
"date.heure = 70000;"+
"var traitement = {};"+
"traitement.motDuTT = [];"+
"traitement.TT = [];"+
"traitement.tabJsonMotPoids = [];"+
"traitement.NewTabJsonMotPoids = [];"+


"traitement.start = function () {"+
"traitement.recupTweets();"+

"};"+


"traitement.recupTweets = function () {"+
"traitement.TT = @ARemplacer;"+
"traitement.trouverMotClef(traitement);"+

"};"+

"traitement.trouverMotClef = function (traitement) {"+
'var motsTweet = traitement.TT.tweets.replace(/,/g," ");'+
"motsTweet = motsTweet.split(' ');"+
"traitement.mots = [];"+
"var k = 0;"+
"for (j in motsTweet) {"+
"if (motsTweet[j].length > 4) {"+
"traitement.mots[k++] = motsTweet[j];"+
"}"+
"}"+
"traitement.motDuTT = traitement.mots;"+
"traitement.trouverPoid(traitement);"+
"};"+

"traitement.trouverPoid = function (traitement) {"+
"var tabMot = traitement.motDuTT;"+
"var indice = 1;"+
"var tmp = 0;"+
"var k = 0;"+
"var jsonMotPoids = [];"+
"var occurence = 1;"+
"for (mots = 0; mots < tabMot.length - 1; mots++) {"+
"if ((tabMot.indexOf(tabMot[mots], indice)) >= 0) {"+
"occurence++;"+
"indice = (tabMot.indexOf(tabMot[mots], indice)) + 1;"+
"tabMot[indice - 1] = tabMot[indice - 1].replace(tabMot[indice - 1], tmp++);"+
"mots--;"+
"}"+
"else {"+
"if (occurence > 1) {"+
"motPoids = {};"+
"motPoids.poids = occurence;"+
"motPoids.mot = tabMot[mots];"+
"jsonMotPoids[k++] = motPoids;"+
"}"+
"occurence = 1;"+
"indice = mots + 2;"+
"}"+
"}"+
"traitement.tabJsonMotPoids= jsonMotPoids;"+
"traitement.hashtage(traitement);"+
"};"+

//Ajoute plus de poids au mots avec un "#"
"traitement.hashtage = function (traitement) {"+
"var jsonMotPoids = traitement.tabJsonMotPoids;"+
"for (i in jsonMotPoids) {"+
"var stringJsonMotPoids = JSON.stringify(jsonMotPoids[i]);"+
'if ((stringJsonMotPoids.indexOf("'+"'"+'")) > 0 || (stringJsonMotPoids.indexOf("'+"\'"+'")) > 0) {'+
"motsTemporaire = jsonMotPoids[i].mot.split(/'/);"+
"jsonMotPoids[i].mot = motsTemporaire[1];"+
"traitement.tabJsonMotPoids[i].mot = motsTemporaire[1];"+
"}"+

'else if ((stringJsonMotPoids.indexOf("#")) > 0) {'+
"motsTpm = jsonMotPoids[i].mot.split(/(?=[A-Z])/);"+
"jsonMotPoids[i].poids = jsonMotPoids[i].poids * 10;"+
"traitement.enregistreHas(motsTpm, i);"+
"}"+
"}"+
"traitement.TT.motsClefs = traitement.NewTabJsonMotPoids;"+
    "console.log(traitement.TT);"+
"};"+

//Enleve les caractères spéciaux et les mets en "bonne forme" pour la base
"traitement.enregistreHas = function (motsTpm,num) {"+
"for (i in motsTpm) {"+
"if (motsTpm[i].length > 1) {"+

"var jsonTemp = {};"+
"jsonTemp.poids = traitement.tabJsonMotPoids[num].poids;"+
"jsonTemp.mot = motsTpm[i];"+
"traitement.tabJsonMotPoids.push(jsonTemp);"+
"}"+
"}"+
"traitement.tabJsonMotPoids[num].poids = 0;"+
"stringTabJsonMotPoids = JSON.stringify(traitement.tabJsonMotPoids);"+
'stringTabJsonMotPoids = stringTabJsonMotPoids.replace(/[@()&=/!#?+_….]/g, "");'+
"traitement.NewTabJsonMotPoids = JSON.parse(stringTabJsonMotPoids);"+


"};"+
"traitement.start();"

//setInterval(function () {
eval(reponse.code);
//}, date.heure);

