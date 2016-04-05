var Person = require('../models/person');

module.exports = function(){
  Person.find({},function(err,users){
    if(err) throw err;

    res.json({userinfos:users});
  })
};
