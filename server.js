var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose   = require('mongoose');
// var passport = require('passport');

// require('./models/user');
// require('./config/passport');
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

app.use(function (req, res, next) {
    'use strict';
//---------lets applications use the api---------------//
    res.header('Access-Control-Allow-Origin', '*');

    if (req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    }
    if (req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    }

    res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else  {
        next();
    }
});

//--------------------api crud routes begins---------------// 
  app.get('/api/entities', function(req, res) {

        
        Entity.find(function(err, entities) {

            
            if (err)
                res.send(err)

            res.json(entities); 
    });

   }); 
    app.post('/api/entities', function(req, res) {

        
        Entity.create({
            borough : req.body.borough,
            neighborhood : req.body.neighborhood,
            rent : req.body.rent,
            confidence : req.body.confidence,
            happiness : req.body.happiness,
            negative : req.body.negative,
            safe : req.body.safe,
            real : req.body.real,
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

app.get('/', function(req, res){
  res.sendFile('./public/index.html');
});

app.listen(port);
console.log('Magic happens on port ' + port);


