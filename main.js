(function(){
    arg = arguments[0];
    function print(str){
        console.log(str)
    }
    print(arg)//result returned by the immediate Invokation of the Anonymous Function
})('name');//arg passed to the IIFE

