var async = require('async');
var stack = [];
function first_fun(callback)
{
    callback(null ,"First function");
}
function second_fun(callback)
{
   // console.log('hii');
    callback(null,"second function");
}
function third_fun(callback)
{
    callback(null,"third function");
}
stack.push(first_fun);
stack.push(second_fun);
stack.push(third_fun);
async.parallel(stack, function(err,result){

    console.log(result);
   // console.log('hiii');
});
