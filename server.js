var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose   = require('mongoose');
// var database = require('./config/database');


app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


//------------------mongodb connect-------------------------//

var dbName = 'Entities'

mongoose.connect('mongodb://localhost:27017/' + dbName); 

// var Entity = mongoose.model('Entity', {
//   name: String,
//   about: String,
//   confidence: Number
//     });

var port = process.env.PORT || 8080;

//-----------------------------router express connnect model db with server-----------//

var router = express.Router(); 
var Entity = require('./models/entity');



//-----------------------check router connection with api via postman---------------//
router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); 
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
  
  app.get('/api/entities', function(req, res) {

        
        Entity.find(function(err, entities) {

            
            if (err)
                res.send(err)

            res.json(entities); 
    });

   }); 
    app.post('/api/entities', function(req, res) {

        
        Entity.create({
            name : req.body.name,
            about : req.body.about,
            confidence : req.body.confidence,
            done : false
        }, function(err, entity) {
            if (err)
                res.send(err);

        
            Entity.find(function(err, entities) {
                if (err)
                    res.send(err)
                res.json(entities);
            });
        });

    });

    // delete a todo
    app.delete('/api/entities/:entity_id', function(req, res) {
        Entity.remove({
            _id : req.params.entity_id
        }, function(err, entity) {
            if (err)
                res.send(err);

           
            Entity.find(function(err, entities) {
                if (err)
                    res.send(err)
                res.json(entities);
            });
        });
    });

 app.use('/api', router);

//---------------------aplication----------

app.get('', function(req, res){
  res.sendFile('./public/index.html');
});

app.listen(port);
console.log('Magic happens on port ' + port);


