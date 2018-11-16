const async = require('async')
//const promisify = require('es6-promisify')
//const { fastAsyncFunction, asyncFunction, slowAsyncFunction } = require('../util')

function handler (callback) {
  async.series
    fastAsyncFunction,
    asyncFunction,
    slowAsyncFunction
  
}
async.series(handler, function(err,result){

    console.log(result);
   console.log('hiii');
});

//module.exports = promisify(handler)