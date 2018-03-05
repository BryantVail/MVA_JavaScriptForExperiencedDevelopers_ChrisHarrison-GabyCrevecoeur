/*
**  Errors:
**      -Syntax
**      -Runtime
**      -Logical
**
**  Methods for Exception Handling
**      -Try..catch..finally statment
**      -Throw statement
**      -The 'onerror()' method. (on Error)

    'try' block executes code that is subject to break
        -MUST BE followed by either:
            1. exactly 1 'catch' block|| exactly 1 'funally' block
            2. Exception is passed to the 'catch' block
        'catch' block 
            -executes code that should only be ran when the exception is caught.
        'finally' block: 
            -optional
            -will always execute.
        -note:
            -syntax errors will not be caught
            -'runtime' && 'programmer generated' exceptions caught.

    onerror Method:
        -event handler fired when an exception occurs
        -declared as a function throughout the code
        -3 pieces of info:
            -error message
            -File where the error occurred
            -Line Number in the code
        -info is usually manipulated to display as needed. 
*/

function myFn(a,b){
    var a = a;
    var b = b;

    try{
        if(b==0){
            throw("Divide by Zero Error");
        }
        else{
            var val = a/b;
            console.log(val);
        }
    }//end try
    catch(e){
        var msg;
        msg  = `Error: "${e}"`;
        console.log(msg);
    }
    finally{
        console.log('finally');
    }
}//end function myFn

myFn(1,0);
myFn(5,2);
myFn(10,5);

































































































































