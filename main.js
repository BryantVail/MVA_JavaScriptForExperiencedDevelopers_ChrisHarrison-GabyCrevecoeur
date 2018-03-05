//main

//function expression
var sayHi = function(){
    console.log('FunctionExpression');
};//end sayHi
sayHi();

//Anonymous Function within an object
var Pony = {
    sayName: function(){
        console.log('Anonymous Function within an object');
    }
};
Pony.sayName();

//event handler
/*
$("p").click = function(){
    alert('hello with a click');
};//end $("p").click
//no explicit invokation
*/

//self invoking functions
((function(){
    var arg = arguments[0];
    console.log(arg);
})('self invoked'));

