function words(input)
{
  if (typeof input == 'string' )
  {
    var myreplace = input.replace(/[\n\t\r\\]/g,' ');
    myreplace = myreplace.replace(/\s\s+/g, ' ')
    var splitInput = myreplace.split(' ');
    var ObjectVar = {};
    var Data;
   
    
    for ( Data in splitInput)
    {
      var count = 1
      if (splitInput[Data] in ObjectVar){
        
       ObjectVar[splitInput[Data]] +=count  
      }  
      else
      {
        ObjectVar[splitInput[Data]] = count
      }
      
      
    }
  }
  return ObjectVar
}