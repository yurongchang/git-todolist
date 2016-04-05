var Person = require('../models/person');

module.exports = function(){
  Person.findOne({_id:req.params.id},function(err,user){
    if(err) throw err;

    res.json({userinfo:user});
  });
};
