module.exports = {
    words: function (input){
        if (typeof input == 'string' ){

            var myreplace = input.replace(/[\n\t\r\\]/g,' ');
            myreplace = myreplace.replace(/\s\s+/g, ' ')
            var splitInput = myreplace.split(' ');    
            var objectVar = {};
            var Data;


            for ( Data in splitInput) {
                var count = 1    

                if (typeof objectVar[splitInput[Data]] === 'function'){       
                    objectVar[splitInput[Data]] = count       
                }  

                else if (splitInput[Data] in objectVar){      
                    objectVar[splitInput[Data]] +=count      
                }     

                else{        
                    objectVar[splitInput[Data]] = count  
                }    
            }

        }  

            return objectVar
    }
}
