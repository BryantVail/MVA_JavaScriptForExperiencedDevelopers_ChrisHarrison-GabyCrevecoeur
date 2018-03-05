/*
**  functions w/out names
**  Dynamically Declared @ runtime
**  Uses:
**      -Function Expression
**      -IN an object
**      -Event Handler
**      -Self Invoking Function/ Recursive
**  Commonly: Recursion & Enclosures
**
**  Both functions logically do THE SAME THINGS, & can both be invoked the same way (by calling the function's ref name)
!!  However, the Anonymous function cannot be accessed before the ASSIGNMENT to the variable has taken place (compilation).
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
