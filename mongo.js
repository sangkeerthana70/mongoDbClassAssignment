/*Level-1 mongo assignment.
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
console.log(process.env.PORT);

var name = 'Gyarados';
var health = 'good';
var attacks = ['smell','dig','jump'];
var stats = {'attack':10,'defense':20};
var db = 'myGame';

//insertMonster(name,health,attacks,stats,db);

//displayCollection('myGame','monsters');

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("connected");
  var dbo = db.db("myGame");
    //command to find a monster based on name.
    dbo.collection("monsters").find({"Name": "Onix"}).toArray(function(err, result) {
        if (err) throw err;
        //console.log(result);
        //db.close();
      });
    //command to find a monster based on attacks  
    dbo.collection("monsters").find({"Attacks": "bite"}).toArray(function(err, result) {
        if (err) throw err;
       // console.log(result);
       // db.close();
      });
    //command to find a monster based on defense stat
    dbo.collection("monsters").find({"Stats.Defense": 34}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
    


});

//function to insert a new document.
function insertMonster(name, health, attacks, stats,myDb) {

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      console.log("connected");
      var dbo = db.db(myDb);
      var myObj = 
      {"Name": name,
	   "Health": health,
	   "Attacks": attacks,
	   "Stats": stats
	  };
      dbo.collection("monsters").insert(myObj,function(err, res){
        if (err) throw err;
        console.log("1 document inserted");
      });

      db.close();
    });
}

//function to display all documents inside the db.
function displayCollection(dbName,collection){

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      console.log("connected");
      var dbo = db.db(dbName);
      
      dbo.collection(collection).find().toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
    
    });
    
}
*/
//Level-3 Class Assign
var mongo = function(db) {
	db.myMonsters.find({"stats.attack": {"$lt": 10}});
	db.myMonsters.find({"Level": {"$gt": 5, "$lte": 15}});
	db.myMonsters.find({"attacks": {"$ne": "bite"}});
	db.myMonsters.find({"Level": {"$lt": 6}},{"name": true, "Level": true, "health": true});
	db.myMonsters.find({"stats.attack": {"$gte": 10, "$lte": 20}},{"health": false, "style": false});
	db.myMonsters.find().count();
	db.myMonsters.find().sort({"Level": -1});
};
