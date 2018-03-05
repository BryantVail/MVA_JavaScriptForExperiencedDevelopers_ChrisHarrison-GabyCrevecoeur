function locale(){
    var city = 'orlando';

    return{
        get:function() {console.log(city);},
        set:function(newCity) {
            if(newCity){
                city = newCity;
            }
        }//end set
    }//end return object
}//end function locale(){

var myPlace = locale();
myPlace.get();
myPlace.set('Deland');
myPlace.get();