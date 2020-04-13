const cipher = {
  encode : function (factor, word) {
    
    
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let letter = "";			  //each letter to be iterated
    let codedLetter = "";		//letter that will be returned as result of this function
    
    let position = 0;			  //number variable representing the index of the found letter in string alphabet
    let newPosition = 0;		//index of codedLetter
    
    let firstIndex = 0;			//Index of the first element of the group where the letter belongs
    let lastIndex = 0;			//Index of the last element of the group where the letter belongs
    let total = 0;				  //total of items in the range
    
    let i;						      //number variable to iterate with each character from alphabet
      let codedText = "";			
    
      //loop through each letter
      for(i = 0; i < word.length; i ++) {
   
      codedLetter = "";
      position = 0;
    
      firstIndex = 0;	
      lastIndex = 0;
  
      letter = word.charAt(i);
          
      //If letter does not exist in string alphabet, return the letter itself(codedLetter = letter)
      if (alphabet.indexOf(letter) == -1) {
        codedLetter = letter;
      }
      
      //If letter exists in string alphabet, find the new codedLetter
      else if (alphabet.indexOf(letter) != -1) {
        position = alphabet.indexOf(letter);	//Index of the found letter in string alphabet
  
        //_____________________________________________________________________________
        //define the first and last elements of the interval if letter is uppercase
        if (position >=0 &&  position <=25) {
          firstIndex = 0;
          lastIndex = 25;
        }
        //define the first and last elements of the interval if letter is lowercase
        else if (position >=26 &&  position <=51) {
          firstIndex = 26;
          lastIndex = 51;	
        }
          
        total = (lastIndex - firstIndex) + 1	//total of elements the interval
          
        //remove each turn from factor if it is greater than the total
        //(ex.:factor 33 is 1 turn of 26, + 7, factor 54 is 2 turns of 26, + 2, and so on)
        if (factor > total) {
        factor = factor % total;
        }
        //_____________________________________________________________________________
  
        newPosition = position + factor;				//index of codedLetter
          
        //If factor is 0 or a multiple of total, do not encode the letter, just make code - position(initial)
        if (factor % total == 0){

          newPosition = position; 
        }
        //If code is greater than lastIndex, discount amount of entire turns and add the rest to firstIndex
        else if (newPosition > lastIndex) {
          newPosition = firstIndex + ((newPosition - lastIndex) % (total)) - 1; 
        }
  
        //set codedLetter as the character to be returned by this function
        codedLetter = alphabet.charAt(newPosition);
      }
    codedText += codedLetter; 		
    }
  
    return codedText;
  },

  decode : function (factor, word) {
	
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let letter = "";			  //each letter to be iterated
    let codedLetter = "";		//letter that will be returned as result of this function
    
    let position = 0;			  //number variable representing the index of the found letter in string alphabet
    let newPosition = 0;		//index of codedLetter
    
    let firstIndex = 0;			//Index of the first element of the group where the letter belongs
    let lastIndex = 0;			//Index of the last element of the group where the letter belongs
    let total = 0;				  //total of items in the range
    
    let i;						      //number variable to iterate with each character from alphabet
      let codedText = "";			
    
      //loop through each letter
    for(i = 0; i < word.length; i ++) {
     
      codedLetter = "";
      position = 0;
    
      firstIndex = 0;	
      lastIndex = 0;
    
      letter = word.charAt(i);
          
      //If letter does not exist in string alphabet, return the letter itself(codedLetter = letter)
      if (alphabet.indexOf(letter) == -1) {
        codedLetter = letter;
      }
      
      //If letter exists in string alphabet, find the new codedLetter
      else if (alphabet.indexOf(letter) != -1) {
        position = alphabet.indexOf(letter);	//Index of the found letter in string alphabet
  
        //_____________________________________________________________________________
        //define the first and last elements of the interval if letter is uppercase
        if (position >=0 &&  position <=25) {
          firstIndex = 0;
          lastIndex = 25;
        }
        //define the first and last elements of the interval if letter is lowercase
        else if (position >=26 &&  position <=51) {
          firstIndex = 26;
          lastIndex = 51;	
        }
          
        total = (lastIndex - firstIndex) + 1	//total of elements the interval
    
        //remove each turn from factor if it is greater than the total
        //(ex.:factor 33 is 1 turn of 26, + 7, factor 54 is 2 turns of 26, + 2, and so on)
        if (factor > total) {
          factor = factor % total;
        }
        //_____________________________________________________________________________
  
        newPosition = position - factor;				//index of codedLetter
          
        //If factor is 0 or a multiple of total, do not encode the letter, just make code - position(initial)
        if (factor % total == 0){
          newPosition = position; 
        }
        //If code is greater than lastIndex, discount amount of entire turns and add the rest to firstIndex
        else if (newPosition < firstIndex) {
          newPosition = lastIndex - Math.abs((newPosition - firstIndex) % (total)) + 1; 
        }
  
        //set codedLetter as the character to be returned by this function
        codedLetter = alphabet.charAt(newPosition);
      }
    codedText += codedLetter; 		
    }
  
    return codedText;
  }

};

export default cipher;


