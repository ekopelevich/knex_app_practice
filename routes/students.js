var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  Students().select().then(function(result) {
    res.json(result);
  }).catch(function(error){
    handleError(error, res);
  });
});

router.get('/:id', function(req, res) {
  Students().where(student.id, req.params.id).first()
  .join('cohorts', 'cohorts.id', 'student.cohorts_id')
  .select('students.id', 'students.name', 'cohorts.name as cohort')
  .then(function(result){
    res.json(result);
  }).catch(function(err){
    handleError(err, res);
  });
});

router.post('/:id', function(req, res) {
  Students().insert({
    name:req.body.name,
    cohort_id: req.body.cohort_id
  }).then(function(result){
    res.json(result);
  }).catch(function(err){
    handleError(err, res);
  });
});

router.put('/:id', function(req, res) {
  var update = {};

  if(){

  };
});


module.exports = router;
