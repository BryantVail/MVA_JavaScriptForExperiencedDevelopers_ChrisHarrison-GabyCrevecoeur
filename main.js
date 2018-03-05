/*
**  Enclosures: Similar to a nested function, an enclosure is a function written inside another function
**      -Has access to: its own variables, outer functions variables, params/args, Globals
**    Function is made using 'The Function Keyword'
**      -Enclosures are implemented using this scoping
**
**  Enclosure Fun Facts
**      W/access to their outer functions' variables & parameters, this allows the enclosures to be called later, after the 
**          ->function returns and still be able to have access to these variables
**      Enclosures only store references to outer function variables, not the actual variables themselves.
**      -this allows for variables to be updated at all times
*/

function employeeName(firstName){
    var nameIntro = "This employee is ";

    function lastName(theLastName){
        console.log(`${nameIntro}${firstName} ${theLastName}`);
    }

    return lastName;

}//end function employeeName

var myName  = employeeName('Bryant');
myName('vail');



