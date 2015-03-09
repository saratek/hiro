
exports.P2 = function(doc){
    console.log("envoie de donnée");
    doc(reponseP2);
}

var reponseP2 = {};
reponseP2.db = "twitter";
reponseP2.traitement = [];

T1= "var db = require('./twitter');"+
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
"traitement.TT =  @ARemplacer;"+
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
"@ARemplacer = traitement;"+
"};"+

"traitement.start();"

T2 ="trouverPoid = function () {"+
"var traitement  = @ARemplacer;"+
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
"@ARemplacer = traitement;"+
"};"+

"trouverPoid();"

//Ajoute plus de poids au mots avec un "#"
T3 ="var db = require('./twitter');"+
"hashtage = function () {"+
"var traitement = @ARemplacer;"+
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
"enregistreHas(motsTpm, i, traitement);"+
"}"+
"}"+
"traitement.TT.motsClefs = traitement.NewTabJsonMotPoids;"+
"@ARemplacer = traitement;"+
"};"+

//Enleve les caractères spéciaux et les mets en "bonne forme" pour la base
"enregistreHas = function (motsTpm,num,traitement) {"+
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

"hashtage();"

reponseP2.traitement.push(T1);
reponseP2.traitement.push(T2);
reponseP2.traitement.push(T3);
//setInterval(function () {
//eval(reponse.T1);
//}, date.heure);
//------------------------------------------------------------------------------------------------------------
exports.P4 = function(doc){
    console.log("envoie de donnée");
    doc(reponseP4);
}

var reponseP4 = {};
reponseP4.db1 = "twitter";
reponseP4.db2 = "article";
reponseP4.traitement = [];

P4T1= "var articles = require('./article');"+
"var traitements = {};"+
"traitements.tweetsArticles = {};"+

"start = function (){"+
"traitements =  @ARemplacer;"+
   " var tabArticle = [];"+
    'var stringTabArticle = "";'+
    "articles.trouverTout(function (article) {"+
        "for (i in article) {"+
            "tabArticle[i] = article[i];"+
            "tabArticle[i] = JSON.stringify(tabArticle[i]);"+
        "}"+
        "traitements.tabArticle = tabArticle;"+
        "@ARemplacer = traitements;"+

    "});"+
    //traitements.preMatching(twitter, tabArticle);
"};"+

"start();"
//Enregistrement en base apres le traitement de matching

P4T2= "preMatching = function () {"+
        "trend =  @ARemplacer;"+
        "trend.tweetsArticles = {};"+
    "tabArticle = trend.tabArticle;"+
    "var tabBonArticles = [];"+

    "for (i in tabArticle) {"+
        "matching(trend, tabArticle[i], tabBonArticles);"+
    "}"+
    "trend.tweetsArticles.nom = trend.name;"+
    "trend.tweetsArticles.tweets = trend.tabTweets;"+
    "trend.tweetsArticles.formate = trend.formate;"+
    "trend.tweetsArticles.date = trend.date;"+
    // todo ajouter l'image
    "if (tabBonArticles.length != 0) {"+
    "console.log('<<<<<<<<<<<<<<<<<mashing<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');"+
     "console.log(trend);"+
        "trend.tweetsArticles.tabArticles = tabBonArticles;"+
        "@ARemplacer = trend.tweetsArticles;"+
    "}"+
"};"+

//Fonction de matching, fait par trend. (en parrallèle )
"matching = function (trend, tabArticle, tabBonArticles) {"+
    "var poidTotal = 0;"+
    "var poidTotalArticle = 0;"+
    "var pourcentage = 0;"+

    "var tab = [];"+
    "if (trend.motsClefs){"+
        "for (k = 0; k < trend.motsClefs.length; k++) {"+

            "poidTotal += +(trend.motsClefs[k].poids);"+
            "if (tabArticle.indexOf(trend.motsClefs[k].mot) > 0) {"+
                "poidTotalArticle += +(trend.motsClefs[k].poids);"+
            "}"+
        "}"+

        "pourcentage = (poidTotalArticle / poidTotal) * 100;"+
        "if (pourcentage > 50) {"+
            "bonTabArticle = JSON.parse(tabArticle);"+
            "tabBonArticles.push(bonTabArticle);"+
            //todo faire un push
        "}"+
    "}"+

"};"+
"preMatching();"

reponseP4.traitement.push(P4T1);
reponseP4.traitement.push(P4T2);
