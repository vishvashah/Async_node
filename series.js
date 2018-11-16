var async =require('async');
 
var demo=[];
 demo.push(function(cb){
setTimeout(function(){console.log("first");
cb(null,"first");
},1000)
 
});
demo.push(function(cb){
setTimeout(function(){console.log("second");
cb(null,"second");
},4000)
 
});
demo.push(function(cb){
 
setTimeout(function(){console.log("final");
cb(null,"final");}
,6000)
 
});
 
async.series(demo,function(err,data){console.log(data)});
async.parallel(demo,function(err,data){console.log(data)});