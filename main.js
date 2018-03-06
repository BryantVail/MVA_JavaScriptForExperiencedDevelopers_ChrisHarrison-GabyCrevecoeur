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

function Person(name){//base class constructor
    this.firstName = name;
}

Person.prototype.toString = function(){
    return `This person's name is ${this.name}`;
};

function Student(firstName, favoriteSubj){
    Person.call(this, firstName);//passing superClass constructor

    //student specific properties
    this.favoriteSubject = favoriteSubj;
}//end function Student(...) constructor

Student.prototype = Object.create(Person.prototype);

//set the 'consructor' property to refer to Student
Student.prototype.constructor = Student;

Student.prototype.toString = function(){
    console.log(`This Student's Name is:\t  ${this.firstName},\nMy favorite Subject is:\t  ${this.favoriteSubject}.`);
};//end Student.prototype.sayHello = function(){

//example usage
var student1 = new Student('Bry', 'Computer Science');
    student1.toString();
    




















































