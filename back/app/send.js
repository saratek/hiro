
exports.P2 = function(doc){
    console.log("envoie de donnée P2");
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
"trouverMotClef(traitement);"+
"};"+

"trouverMotClef = function (traitement) {"+
    "if(traitement.TT.tweets){"+
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
"}"+

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
"@ARemplacer = traitement.TT;"+
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
exports.P3 = function(doc){
    console.log("envoie de donnée P3");
    doc(reponseP3);
}

var reponseP3 = {};
reponseP3.dbEntree = "twitter";
reponseP3.dbSortie = "tweetsArticles";
reponseP3.traitement = [];

P3T1= "var articles = require('./article');"+
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
        "process.send(@ARemplacer);"+
    "});"+
    "event.emit('fin');"+
"});"+

"}"+

"};"+

"start();"

//Enregistrement en base apres le traitement de matching

P3T2= "var articles = require('./article');"+
"var  EventEmitter = require('events').EventEmitter;"+
"var event = new EventEmitter();"+

"event.on('fin', function(){" +
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

reponseP3.traitement.push(P3T1);
reponseP3.traitement.push(P3T2);


//-------------------------------------------  ARTICLES 1----------------------------------------------------------

exports.R2 = function(doc){
    console.log("envoie de donnée  R2");
    doc(reponseR2);
}

var reponseR2 = {};
reponseR2.dbEntree = "api";
reponseR2.dbSortie = "tmpArticles";
reponseR2.traitement = [];

R2T1=  "var util = require('util');"+
"var https = require('https');"+
"var  EventEmitter = require('events').EventEmitter;"+
"var event = new EventEmitter();"+
"var date = {};"+
"event.on('fin', function(){" +
    "process.send(@ARemplacer);"+
"});"+
"date.aujourdui = new Date();"+
" API = function (){"+
"this.nom = @ARemplacer.nom;"+
"this.url = @ARemplacer.url;" +
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
                "for (i= 0; i<____this.query.results.item.length; i++){"+
                    '____this.query.results.item[i].provenance = ____this.query.diagnostics.url.content;'+
                    "}"+
                "@ARemplacer.tab =____this.query.results.item;"+
            "}"+
            "event.emit('fin');"+
        "});"+
   " });"+

"}"+

"};"+

"start();"


reponseR2.traitement.push(R2T1);
//-------------------------------------------- ARTICLE 2 -----------------------------------------------------

exports.R3 = function(doc){
    console.log("envoie de donnée R3");
    doc(reponseR3);
}

var reponseR3 = {};
reponseR3.dbEntree = "tmpArticles";
reponseR3.dbSortie = "article";
reponseR3.traitement = [];
R3T1 =  "var  EventEmitter = require('events').EventEmitter;"+
"var event = new EventEmitter();"+
"event.on('fin', function(){" +
"process.send(@ARemplacer);"+
"});"+
"miseEnForme = function () {"+
"flux = @ARemplacer;"+
"var articles = [];"+
"var tmp = {};"+
"tmp.provenance = flux.provenance;"+
"tmp.titre = flux.title;"+
"tmp.date = new Date(flux.pubDate);"+

"var re = /<\/a>(.*)<\/p>/;"+
"var m;"+
"var res = flux.description ;"+
"while ((m = re.exec(res)) != null) {"+
    "if (m.index === re.lastIndex) {"+
        "re.lastIndex++;"+
    "}"+
"}"+
"if (m) tmp.description = m[0];"+
"else tmp.description = res ;"+

"if(flux.enclosure) {"+
    "tmp.image = flux.enclosure.url;"+
"} else if ( tmp.image =flux.content){"+
    "tmp.image =flux.content.url ;"+
"}else{"+
    "tmp.image = null ;"+
"}"+
"tmp.lien = flux.link;"+
"@ARemplacer = tmp;"+
"event.emit('fin');"+
"};"+

"miseEnForme();"

reponseR3.traitement.push(R3T1);
//------------------------------------------------------------------------------------------------------------

exports.R1 = function(doc){
    console.log("envoie de donnée R1");
    doc(reponseR1);
}

var reponseR1 = {};
reponseR1.dbEntree = "";
reponseR1.dbSortie = "tmpTwitter";
reponseR1.traitement = [];

R1T1=  "var https = require('https');"+
"var  EventEmitter = require('events').EventEmitter;"+
"var event = new EventEmitter();"+
"var https = require('https') ;"+
"var OAuth2 = require('oauth').OAuth2;"+

"var donnee ={};"+
"donnee.access_token ;"+
"donnee.key = 'xBCCHoLhtMr7tcPd9FyflzbMp';"+
"donnee.secret = 'DCDo8wGH4X85yoH1QlUdt18g4F0h9iVihORbHIQImqo4dGeDHn';"+
"donnee.Oauth2 = new OAuth2(donnee.key, donnee.secret, 'https://api.twitter.com/', null, 'oauth2/token', null);"+

" trend = function (){"+
"this.buffer;"+
"this.option2;"+
"};"+



"var start = function(){"+
    "var trends = new trend();"+
    "trends.test();"+
"};"+

"trend.prototype = {"+

"test : function () {"+
    "var _this = this;"+
        "donnee.Oauth2.getOAuthAccessToken('', {"+
            "'grant_type': 'client_credentials'"+
        "}, function (e, access_token) {"+
            "donnee.option1 = {"+
                "hostname: 'api.twitter.com',"+
                "path: '/1.1/trends/place.json?id=23424819',"+
                "headers: {"+
                    "Authorization: 'Bearer ' + access_token"+
                "}"+
            "};"+
            "donnee.option2 = donnee.option1;"+
            "_this.getTrends();"+

        "});"+

"},"+
    //-----------------------------------------------------------------------------------
"getTrends : function(){"+
        "var _this = this;"+
        "https.get(donnee.option1, function(result){"+
            "var buffer = '';"+
            "result.setEncoding('utf8');"+
            "result.on('data', function(data){"+
                "buffer += data;"+
            "});"+
            "result.on('end', function(){"+
            "_this.buffer = JSON.parse(buffer);"+
            "_this.option2 = donnee.option2;"+
            "event.on('fin', function(){" +
                "@ARemplacer = _this;"+
                "process.send(@ARemplacer);"+
            "});"+
            "event.emit('fin');"+
            "});"+
        "});"+
    "}"+
"};"+


"start();"
    //------------------------------------------------------------------------------------
R1T2= "var https = require('https');"+
"var  EventEmitter = require('events').EventEmitter;"+
"var event = new EventEmitter();"+
"formater = function(){"+
        "topics = @ARemplacer.buffer;"+
        "var trends = [];"+
        "var date = new Date();"+
        "for (tt in topics[0].trends) {"+
            "var new_tt ={};"+
            "new_tt.name = topics[0].trends[tt].name;"+
            'new_tt.formate = new_tt.name.replace(/#/g,"");'+
            'new_tt.formate = new_tt.formate.replace(/ /g,"");'+
            'new_tt.formate = new_tt.formate.replace(/[àâ]/g,"a");'+
            'new_tt.formate = new_tt.formate.replace(/[éèê]/g,"e");'+
            'new_tt.formate = new_tt.formate.replace(/[î]/g,"i");'+
            'new_tt.formate = new_tt.formate.replace(/[ûù]/g,"u");'+
            'new_tt.formate = new_tt.formate.replace(/[ô]/g,"o");'+
            'new_tt.formate = new_tt.formate.replace(/[ç]/g,"c");'+
            "new_tt.formate = new_tt.formate.replace(/"+"'"+'/g,"");'+
            "new_tt.date = date;"+
            "new_tt.option2 = @ARemplacer.option2;"+
            "trends[tt]=new_tt;"+
            //donnee.getTweets(new_tt);
            //trends[tt] = new_tt;
            //new_tt.tweets = topics[0].trends[tt].name;
        "}"+
            "event.on('fin', function(){" +
            "@ARemplacer.tab = trends;"+
            "process.send(@ARemplacer);"+
            "});"+
            "event.emit('fin');"+
        //db.trouverUnMorceau();
        //todo evenement ou appel de fonction
    "};"+

"formater();"

reponseR1.traitement.push(R1T1);
reponseR1.traitement.push(R1T2);

//------------------------------------------------------------------------------------------------------------

exports.P1 = function(doc){
    console.log("envoie de donnée P1");
    doc(reponseP1);
}

var reponseP1 = {};
reponseP1.dbEntree = "tmpTwitter";
reponseP1.dbSortie = "twitter";
reponseP1.traitement = [];

P1T1 ="var  EventEmitter = require('events').EventEmitter;"+
"var event = new EventEmitter();"+
"event.on('fin', function(){" +
"process.send(@ARemplacer);"+
"});"+
    "var https = require('https');"+
"var https = require('https');"+
" tweet = function (){"+
"this.date = @ARemplacer.date;"+
"this.formate = @ARemplacer.formate;;" +
"this.option2 = @ARemplacer.option2;;" +
"this.name = @ARemplacer.name;"+
 "this.tweets = {};"+
"this.tabTweets = [];"+
"this.motsClefs = [];"+
"};"+

"var start = function (){"+
"var tweets = new tweet();"+
"tweets.test();"+
"};"+
"tweet.prototype = {"+

"test : function () {"+
    "var tweets = [];"+
    "var _this = this;"+
    "this.option2.path =  '/1.1/search/tweets.json?q=%23'+_this.formate+'&lang=fr';"+
     "https.get(_this.option2, function(result){"+
    "var buffer = '';"+
    "var tweets = [];"+
    "result.setEncoding('utf8');"+
    "result.on('data', function(data){"+
    "buffer += data;"+
    "});"+
    "var __this = _this;"+
     "result.on('end', function(){"+
     "if(buffer.indexOf('statuses')>=0){"+
         "var topics = JSON.parse(buffer);"+
         "for (tt in topics.statuses) {"+
            "tweets[tt] = topics.statuses[tt].text;"+
         "}"+
         "__this.tweets = [];"+
         "__this.tweets = tweets;"+
         "__this.tabTweets = [];"+
         "__this.tabTweets = tweets;"+
        "@ARemplacer = __this;"+
        "event.emit('fin');"+
    "}else{" +
      "console.log('pas de tweets');" +
        "event.emit('fin');"+
    "}"+

 "});"+

 "});"+
"}"+
"};"+


"start();"

reponseP1.traitement.push(P1T1);

//--------------------------------------------------------------test-----------------------------------------------
var fs = require('fs');
exports.test = function(doc){
    console.log("envoie de donnée");
    fs.readFile('./app/config.json', 'utf-8', function (err, data) {
        if (err) {
            console.log("ERROR - " + err);
        } else if (data) {
            doc(data);
        }
    });
}
var json = {};
