
exports.P2 = function(doc){
    console.log("envoie de donnée");
    doc(reponseP2);
}

var reponseP2 = {};
reponseP2.dbEntree = "twitter";
reponseP2.dbSortie = "twitter";
reponseP2.traitement = [];

T1= "var db = require('./twitter');"+
"var  EventEmitter = require('events').EventEmitter;"+
"var event = new EventEmitter();"+
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
"event.on('fin', function(){" +
"process.send(@ARemplacer);"+
"});"+
"event.emit('fin');"+
"};"+

"traitement.start();"

T2 ="var  EventEmitter = require('events').EventEmitter;"+
"var event = new EventEmitter();"+
"trouverPoid = function () {"+
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
"event.on('fin', function(){" +
"process.send(@ARemplacer);"+
"});"+
"event.emit('fin');"+
"};"+

"trouverPoid();"

//Ajoute plus de poids au mots avec un "#"
T3 ="var db = require('./twitter');"+
"var  EventEmitter = require('events').EventEmitter;"+
"var event = new EventEmitter();"+
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
"event.on('fin', function(){" +
"process.send(@ARemplacer);"+
"});"+
"event.emit('fin');"+
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

//------------------------------------------------------------------------------------------------------------
exports.P4 = function(doc){
    console.log("envoie de donnée");
    doc(reponseP4);
}

var reponseP4 = {};
reponseP4.dbEntree = "twitter";
reponseP4.dbSortie = "tweetsArticles";
reponseP4.traitement = [];

P4T1= "var articles = require('./article');"+
"var  EventEmitter = require('events').EventEmitter;"+
"var event = new EventEmitter();"+
" trait = function (){"+
"this.TT = @ARemplacer;"+
"this.articlesTab = [];" +
"this.tweetsArticles = {}"+
"};"+


"var start = function (){"+
"var traitements = new trait();"+
"traitements.test();"+
"};"+

"trait.prototype = {"+

" test : function(){"+

    "var tabArticles = [];"+
    "_this = this;"+

    "articles.trouverTout(function (article) {"+
     "for (i in article) {"+
         "tabArticles[i] = article[i];"+
         "tabArticles[i] = JSON.stringify(tabArticles[i]);"+
     "}"+
    "_this.articlesTab = tabArticles;"+
    "@ARemplacer = _this;"+
    "event.on('fin', function(){" +
        "console.log('emission d evenement !!!!!!!!!!!!!!!!!!!!');"+
        "process.send(@ARemplacer);"+
    "});"+
    "event.emit('fin');"+
"});"+

"}"+

"};"+

"start();"

//Enregistrement en base apres le traitement de matching

P4T2= "var articles = require('./article');"+
"var  EventEmitter = require('events').EventEmitter;"+
"var event = new EventEmitter();"+

"event.on('fin', function(){" +
   "console.log('emission d evenement !!!!!!!!!!!!!!!!!!!!');"+
    "process.send(@ARemplacer);"+
"});"+
    "preMatching = function () {"+
      "var trend =  @ARemplacer.TT;"+
      "var tweetsArticles = {};"+
    "var tabArticle = @ARemplacer.articlesTab;"+
    "var tabBonArticles = [];"+

    "for (i in tabArticle) {"+
        "matching(trend, tabArticle[i], tabBonArticles);"+
    "}"+
    "tweetsArticles.nom = trend.name;"+
    "tweetsArticles.tweets = trend.tabTweets;"+
    "tweetsArticles.formate = trend.formate;"+
    "tweetsArticles.date = trend.date;"+
    // todo ajouter l'image
    "if (tabBonArticles.length != 0) {"+
    "console.log('<<<<<<<<<<<<<<<<<mashing<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');"+
        "tweetsArticles.tabArticles = tabBonArticles;"+
        "@ARemplacer = tweetsArticles;"+
    "}"+
"event.emit('fin');"+
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


//------------------------------------------------------------------------------------------------------------

exports.P3 = function(doc){
    console.log("envoie de donnée");
    doc(reponseP3);
}

var reponseP3 = {};
reponseP3.dbEntree = "api";
reponseP3.dbSortie = "article";
reponseP3.traitement = [];

P3T1=  "var util = require('util');"+
"var https = require('https');"+
"var  EventEmitter = require('events').EventEmitter;"+
"var event = new EventEmitter();"+
"var date = {};"+
"event.on('fin', function(){" +
    "console.log('emission d evenement !!!!!!!!!!!!!!!!!!!!');"+
    "process.send(@ARemplacer);"+
"});"+
"date.aujourdui = new Date();"+
" API = function (){"+
"this.nom = @ARemplacer.nom;"+
"this.url = @ARemplacer.url;;" +
"};"+

"var start = function (){"+
"var api = new API();"+
"api.test();"+
"};"+

"API.prototype = {"+

"test : function () {"+
    "var b = '';"+
    "util.log('-------------------Recuperation des articles, source : '+@ARemplacer.nom +' --------------');"+
    "var _this = this;"+
    "https.get(this.url, function (r) {"+
    "var __this = _this;"+
        "r.on('data', function (d) {"+
    "var ___this = __this;"+
           "b += d;"+
        "});"+
        "r.on('end', function () {"+
      "var ____this = __this;"+
            "b = JSON.parse(b);"+
            "if (b.query.results) {"+
                "____this = b;"+
                "@ARemplacer=____this;"+
                 "console.log('____________________________________________________________1');"+
            "}"+
            "event.emit('fin');"+
        "});"+
   " });"+

"}"+

"};"+

"start();"

P3T2 = "var  EventEmitter = require('events').EventEmitter;"+
"var event = new EventEmitter();"+
"event.on('fin', function(){" +
"console.log('emission d evenement !!!!!!!!!!!!!!!!!!!!');"+
"process.send(@ARemplacer);"+
"});"+
    "miseEnForme = function () {"+
   "flux = @ARemplacer;"+
   "var articles = [];"+
    "if(flux.query && flux.query.results && flux.query.results.item){"+
        "for (i in flux.query.results.item) {"+
            "var tmp = {};"+
            "tmp.provenance = flux.query.diagnostics.url.content;"+
            "tmp.titre = flux.query.results.item[i].title;"+
            "tmp.date = new Date(flux.query.results.item[i].pubDate);"+
            "tmp.description = flux.query.results.item[i].description;"+
            "tmp.image = flux.query.results.item[i].enclosure;"+
            "tmp.lien = flux.query.results.item[i].link;"+
            "articles[i] = tmp;"+
        "}"+
    "}"+
"@ARemplacer = articles;"+
"event.emit('fin');"+
"};"+

"miseEnForme();"
//eval(P3T1);
reponseP3.traitement.push(P3T1);
reponseP3.traitement.push(P3T2);
