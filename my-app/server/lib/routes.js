const e = require('express');
let express = require('express');
let router = express.Router();
let Assign = require('./models/recipes');


//Get all
router.route('/recipe')
    .get(function (req, res) {
        Assign.all()
            .then((users) => {
                res.status(200);
                res.json(users);
            })
            .catch((err) => {
                res.status(500);
                res.json(err);
            });
    })
    //Post New assignment
    .post(function(req, res) { //needs more work
		var newAssInfo = req.body;
		var newAss = new Assign(newAssInfo);
		newAss.save()
			.catch(err => {
				res.status(500);
				res.json(err);
			})
			.then(doc => {
				res.status(200);
				res.json(doc);
			});
    });
router.route('/recipe/name/:name')   //by name

    .get(function (req, res) {
        Assign.findOne().where({name: req.params.name}).exec()
            .then((assignment) => {
                if(assignment===null){
                    res.sendStatus(404)
                    return res.json("not found")
                }
                res.status(200);
                res.json(assignment);
            })
            .catch((err) => {
                res.status(404);
                return res.json(err);
            });
    })
    //Delete single assignment
    .delete(function (req, res) {
        Assign.findOne().where({name: req.params.name})
        .exec((err, doc) => {
            if (err) {
                res.status(404);
                res.json(err);
                return;
                //kitchen sink
            }
            if(doc===null)
            {
                res.sendStatus(204)
                return;
            }
            doc.delete()
                .then(() => { res.sendStatus(204) })
                .catch((err) => {
                        res.status(500);
                        res.json(err);
                        return            
                    });
        });
    })
router.route('/recipe/type/:type')   //by type

    .get(function (req, res) {
        Assign.find().where({type: req.params.type}).exec((err, recipes) => {
            if (err) {
              res.status(500);
              res.json(err);
              return;
            }
            if(recipes===null)
            {
                res.status(404);
                res.json("not found");
                return;
            }
            let ret = [];
            for (let recipe of recipes) {
              ret.push(recipe);
            }
            res.status(200);
            res.json(ret);
          })
    })
router.route('/recipe/primeIngredient/:primeIngredient')   //by ingredient

    .get(function (req, res) {
        Assign.find().where({primeIngredient: req.params.primeIngredient}).exec((err, recipes) => {
            if (err) {
              res.status(500);
              res.json(err);
              return;
            }
            if(recipes===null)
            {
                res.status(404);
                res.json("not found");
                return;
            }
            let ret = [];
            for (let recipe of recipes) {
              ret.push(recipe);
            }
            res.status(200);
            res.json(ret);
          })
    })
// /v1/assignments/class/:className/:assignmentName
router.route('/recipe/type/:type/primeIngredient/:primeIngredient')   //by tpe and ingredient

    .get(function (req, res) {
        Assign.find().where({type: req.params.type, primeIngredient: req.params.primeIngredient}).exec((err, recipes) => {
            if (err) {
                res.status(500);
                res.json(err);
                return;
              }
              if(recipes===null)
              {
                  res.status(404);
                  res.json("not found");
                  return;
              }
              let ret = [];
              for (let recipe of recipes) {
                ret.push(recipe);
              }
              res.status(200);
              res.json(ret);
            })
    })

//Put update assignment
    .put(function (req, res) {
        let newAssInfo = req.body;

        if (req.params.className !== String(req.body.class)||req.params.assignmentName !== String(req.body.name)) {
            res.status(400);
            return res.json("Your assignments or class doesn't exist, or you spelled it wrong.");
        }

        Assign.findOne().where({class: req.params.className, name: req.params.assignmentName})
        .exec((err, doc) => {
            if (err) {
                res.status(400);
                res.json(err);
                return;
            }
            for (let field in newAssInfo)
                    doc[field] = newAssInfo[field];
            doc.save()
                .then(() => { res.status(200).json(doc) })
                .catch((err) => { res.status(500).json(err) })
            return;
        })
                

    });


module.exports = router;
