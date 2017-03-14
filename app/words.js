function words(input)
{
         if (typeof input == 'string' ){

            var myreplace = input.replace(/[\n\t\r\\]/g,' ');
            myreplace = myreplace.replace(/\s\s+/g, ' ')
            var splitInput = myreplace.split(' ');    
            var objectVar = {};
            var data;


            for ( data in splitInput) {
                var count = 1    

                if (typeof objectVar[splitInput[data]] === 'function'){       
                    objectVar[splitInput[data]] = count       
                  }  

                  else if (splitInput[data] in objectVar){      
                    objectVar[splitInput[data]] +=count      
                  }     

                  else{        
                    objectVar[splitInput[data]] = count  
                  }    
                }

              }  

          return objectVar
  }

