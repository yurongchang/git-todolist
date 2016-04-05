var Person = require('../models/person');

module.exports = function(req,res,next){
  Person.find({},function(err,users){
    if(err) throw err;
    res.render('index',{userinfos:users});
  });
  
  var person = new Person({
    workname:req.body.workname,
    contentname:req.body.contentname
  });
  person.save(function(err){
    if(err) throw err;
    console.log('person saved!');
  });
};
