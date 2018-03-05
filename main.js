/*
**  functions w/out names
**  Dynamically Declared @ runtime
**  Uses:
**      -Function Expression
**      -IN an object
**      -Event Handler
**      -Self Invoking Function/ Recursive
**  Commonly: Recursion & Enclosures
*/

//anonymous function
var ven = function(){
    console.log('anonymous');
};//end anonymous function, assigned to ven

//named function
function venn(){
    console.log('named venn');
}//end venn


ven();
venn();
