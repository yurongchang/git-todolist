var Person = require('../models/person');

module.exports = function(req,res,next){
  res.send('Thank you!');
  var person = new Person({
    workname:req.body.workname,
    contentname:req.body.contentname
  });
  person.save(function(err){
    if(err) throw err;
    console.log('person saved!');
  });
};
