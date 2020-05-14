const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

function configureRoutes (app,db) {
      
      app.get('/store', function (req, res) {
        
        var filters = {}

        if(req.query.price_lt){
            filters.price = {
                $lt: parseInt(req.query.price_lt)
            }
        }
        if(req.query.price_gt){
            filters.price = {
                $gt: parseInt(req.query.price_gt)
            }
        }
        
        if(req.query.search){
            filters.licor = {
                    $regex: new RegExp(req.query.search, 'i')
                }
        }
        

        const collection = db.collection('products');
        // Find some documents
        collection.find(filters).toArray(function(err, docs) {
          assert.equal(err, null);
          var context = {
            list: docs,
          }
          res.render('shop', context);
        });        
      });
      
      app.get('/product/:name/:id', function (req, res) {
        const filter = {
            _id: {
                $eq: new ObjectId(req.params.id)
            }
        };

        const collection = db.collection('products');
        // Find some documents
        collection.find(filter).toArray(function(err, docs) {
          assert.equal(err, null);
          var context = docs[0]
          res.render('product', context);
        });
      });

      app.get('/checkout', function(req,res){
          res.render('checkout');
      });

      app.post('/checkout', function(req,res){
        console.log(req.body.name);

        req.body.creation_date = new Date();

        if(!req.body.products || !req.body.name || !req.body.cardnumber || !req.body.cvv || !req.body.expirationdate){
            res.redirect('/checkout');
            return;
        }
        req.body.products = JSON.parse(req.body.products)

        const collection = db.collection('orders');
        collection.insertOne(req.body);
        res.redirect('/store');
      });
}

module.exports = configureRoutes;