/**
 * Created by Sara on 18/02/2015.
 */
var mongoose = require('mongoose');//mongoose

var connection = function(){

    if(mongoose.connection.readyState == 0){
        mongoose.connect('mongodb://127.0.0.1:27017/db', function(err) { //
            if (err) { console.log(err);}
            else
            {console.log("----------------connexion à la Base TweetsArticles-------------");}
        });
    }
};
connection();

var schemaTweetsArticles = mongoose.Schema({
    nom  : {type : String, unique : true},
    formate : {type : String},
    tweets : [],
    tabArticles :[],
    date : Date
})
var modelTweetsArticles = mongoose.model('TweetsArticles', schemaTweetsArticles);
//---------------------------------------------------------------
exports.supprimerTout = function()
{
    modelTweetsArticles.remove ("*", function(err)
    {
        if(err)
            console.log('Erreur ');
        else
            console.log('Achete toi des lunettes !!!!!!!');
    });

};
//-----------------------------------------------------------------
exports.trouverTout = function(cb) // todo passer cb en arg pr une valeur de retour
{
    modelTweetsArticles.find("*", function(err,rep){
        if (err) {
            console.log(err);
        }else {
            if(rep==null)
            {
                console.log("pas de reponse ! ");
            }else{
                cb(rep);
            }
        }

    });

};
//----------------------------------------------------------------------------------------------
exports.trouverToutsansCB = function()
{
    modelTweetsArticles.find("*", function(err,rep){
        if (err) {
            console.log(err);
        }else {
            if(rep==null)
            {
                console.log("pas de reponse ! ");
            }else{
                console.log(rep);
            }
        }

    });

};

//----------------------------------------------------------------------
exports.sauvegarder = function (obj)
{
    var tweetsArt = new modelTweetsArticles(obj);
    tweetsArt.save(function(err){
        if (err)
        {
            console.log(err);
            console.log("Echec de l'enregistrement en Base Tweets Articles");
        }else{
            console.log("************************** Enregistrement en Base Tweets Articles ************************************");
        }

    });

};

//==============================================================================================================================
exports.sauvegarderOuMAJ = function (obj)
{
    var string = "";
    string = JSON.stringify(obj.nom);

    modelTweetsArticles.find('*').where("nom").equals(string).exec(function (err, rep) {
        var tweetsArt = new modelTweetsArticles(obj);
      //  console.log(obj);
       // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        if (err) {
            //console.log(err);
            console.log("------erreur de sauvegarde : le json exsite déja------- ");
        }
        else if (rep.length >0){
            tweetsArt.update({"tabArticles" : obj.tabArticles},function(err){
                if (err) {
                    console.log("Echec de la mise à jour de la base Tweets Articles");
                }else{
                    console.log("-----------------------------Mise a jour de la base Tweets Articles ------------------------");
                }
            });
        }
        else {
            tweetsArt.save(function(err){
                if (err) {
                    console.log(err);
                    console.log("Echec de l'enregistrement en Base Tweets Articles");
                }else{
                    console.log("************************** Enregistrement en Base Tweets Articles ************************************");
                }

            });
        }
    });
};


//----------------------------------------------------------------------
exports.miseAJour = function (obj)
{
    var tweetsArt = new modelTweetsArticles(obj);
    tweetsArt.update({"motsClefs" : obj.motsClefs},function(err){
        if (err)
        {
            console.log("Echec de la mise à jour de la base Tweets Articles");
        }else{
            console.log("-----------------------------Mise a jour de la base Tweets Articles ------------------------");
        }

    });

};

var json = {};
exports.trouverTout(function(json){console.log(json)});
//renvoie un json plein avec pour chaque tweet un
//exports.trouverToutsansCB();
//exports.supprimerTout();