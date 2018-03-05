var color = 'blue';

function printColor(){
    if(arguments[0]){
        color = 'purple';
    }
    console.log(color);

}
printColor();
printColor(color);

