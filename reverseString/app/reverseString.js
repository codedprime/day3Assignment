module.exports = {    
    reverseString: function(input){
      
        if (input === ''){
            return null
        }
        splitInput = input.split('')
        result = splitInput.reverse();
        result = result.join('')
        result = result.toString()
      
      
       if(result == input){
          return true
       }
       else{
          return (result)
       }
      
    }
}


