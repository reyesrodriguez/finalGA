var mongoose=require('mongoose');

module.exports = mongoose.model('Entity',{
	name: String,
	about: String,
	attachment: String,
	confidence: Number,
	articulate: Number,
	dependable: Number,
	friendly: Number,
	outgoing: String
});



// //-------------------------api routes CRUD begins-------------------------//
// router.route('/entities')
// //-----post and get are chained same endpoint-------------//  
//     .post(function(req, res) {
//         var entity = new Entity();      
//         entity.name = req.body.name;  
//         entity.save(function(err) {
//             if (err)
//                 res.send(err);

//                 res.json({ message: 'Bear created!' });
//         });


        
//     })
//     .get(function(req, res) {
//         Entity.find(function(err, entities) {
//             if (err)
//                 res.send(err);

//             res.json(entities);
//         });
//     });

// //-----------byId get and update-----------------//
// router.route('/entities/:id')
//   .get(function(req, res) {
//       Entity.findById(req.params.id, function(err, entity) {
//             if (err)
//                 res.send(err);
//             res.json(entity);
//         });
   

//     })
//       .put(function(req, res) {
//           Entity.findById(req.params.id, function(err, entity) {
//             if (err)
//               res.send(err);
//               entity.name = req.body.name; 
//             entity.save(function(err) {
//                 if (err)
//                   res.send(err);

//                   res.json({ message: 'entity updated!' });
//             });

//         });
    


//     })
// //--------------delete---------------// 
//   .delete(function(req, res) {
//         Entity.remove({
//             _id: req.params.id
//         }, function(err, entity) {
//             if (err)
//               res.send(err);

//               res.json({ message: 'Successfully deleted' });
//         });
//     });
