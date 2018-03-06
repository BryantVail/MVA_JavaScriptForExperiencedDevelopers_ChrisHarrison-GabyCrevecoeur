/*
    module:
        Creating Objects
        Dot & Bracket notation
            Bracket:
                -allows property name through other variable names
                -
            Dot:
                -Period between the object name & property
        Constructors
        Prototypes
        Inheritance
        Encapsulation

    How to Create an Object
        1. Object Literals
        2. Object constructor
*/

//creating an object

function Order(user, total){
    //log creation of object
    console.log('OrderCreated');

    this.user   = user;
    this.total  = total;
    this.type   = function(){
        console.log('Hi, I\'m a fruit!');
    };//end this.type  = function(){
}//end function Order(user, total){

var orange = new Order('Orange', 4.25);










































