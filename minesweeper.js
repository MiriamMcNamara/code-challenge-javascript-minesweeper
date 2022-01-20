export const annotate = (inputArray) => {
  //handle empty array/no rows
  if (inputArray.length === 0) {
    return inputArray;
  }

  //handle empty string/no columns
  if (inputArray[0] === "") {
    return inputArray;
  }
  //create an array to return
  let returnArray = [];

  //loop through the inputArray
  for (let i = 0; i < inputArray.length; i++) {
    //declare variable for the strings from the inputArray
    let inputString = inputArray[i];

    //declare a variable for the string you will be returning
    let returnString = "";

    //loop through the input string
    for (let j = 0; j < inputString.length; j++) {
      //is this a single string?
      if (inputArray.length === 1) {
        //declare a variable for the space you are working in
        let currentSpace = 0;
        //first check iF the character you are at is an asterisk, then currentSpace="*"
        if (inputString[j] === "*") {
          currentSpace = "*";
        } else {
          //check characters on either side
          if (inputString[j - 1] === "*") {
            currentSpace++;
          }
          if (inputString[j + 1] === "*") {
            currentSpace++;
          }
        }
        //if the space hasn't incremented, concatenate a whitespace onto the returnString
        if (currentSpace === 0) {
          returnString = returnString + " ";
          //otherwise, concatenate the currentSpace onto the returnString
        } else {
          returnString = returnString + currentSpace;
        }
      } //END LOGIC FOR SINGLE STRING
      //is this the FIRST string in the array?
      else if (i === 0) {
        //declare a variable for the following string in the inputArray
        let stringFollowing = inputArray[i + 1];
        let currentSpace = 0;
        if (inputString[j] === "*") {
          currentSpace = "*";
        } else {
          //check against same string and string following it
          if (inputString[j - 1] === "*") {
            currentSpace++;
          }
          if (inputString[j + 1] === "*") {
            currentSpace++;
          }
          if (stringFollowing.charAt(j) === "*") {
            currentSpace++;
          }
          if (stringFollowing.charAt(j - 1) === "*") {
            currentSpace++;
          }
          if (stringFollowing.charAt(j + 1) === "*") {
            currentSpace++;
          }
        }
        if (currentSpace === 0) {
          returnString = returnString + " ";
        } else {
          returnString = returnString + currentSpace;
        }
      } //END LOGIC FOR FIRST STRING
      //is this the LAST string in the array?
      else if (i === inputArray.length - 1) {
        //declare a variable for the previous string in the inputArray
        let stringPrevious = inputArray[i - 1];
        let currentSpace = 0;
        if (inputString[j] === "*") {
          currentSpace = "*";
        } else {
          //check same string and string previous
          if (inputString[j - 1] === "*") {
            currentSpace++;
          }
          if (inputString[j + 1] === "*") {
            currentSpace++;
          }
          if (stringPrevious.charAt(j) === "*") {
            currentSpace++;
          }
          if (stringPrevious.charAt(j - 1) === "*") {
            currentSpace++;
          }
          if (stringPrevious.charAt(j + 1) === "*") {
            currentSpace++;
          }
        }
        if (currentSpace === 0) {
          returnString = returnString + " ";
        } else {
          returnString = returnString + currentSpace;
        }
      } //END LOGIC FOR LAST STRING
      //for all other rows, check same string, the string previous and the string following
      else {
        let stringPrevious = inputArray[i - 1];
        let stringFollowing = inputArray[i + 1];
        let currentSpace = 0;
        if (inputString[j] === "*") {
          currentSpace = "*";
        } else {
          if (inputString[j - 1] === "*") {
            currentSpace++;
          }
          if (inputString[j + 1] === "*") {
            currentSpace++;
          }
          if (stringPrevious.charAt(j) === "*") {
            currentSpace++;
          }
          if (stringPrevious.charAt(j - 1) === "*") {
            currentSpace++;
          }
          if (stringPrevious.charAt(j + 1) === "*") {
            currentSpace++;
          }
          if (stringFollowing.charAt(j) === "*") {
            currentSpace++;
          }
          if (stringFollowing.charAt(j - 1) === "*") {
            currentSpace++;
          }
          if (stringFollowing.charAt(j + 1) === "*") {
            currentSpace++;
          }
        }
        if (currentSpace === 0) {
          returnString = returnString + " ";
        } else {
          returnString = returnString + currentSpace;
        }
      } //END LOGIC FOR ALL MIDDLE STRINGS
    } //end j loop
    //once all the currentSpaces have been checked in each string, push the returnString into the returnArray
    returnArray.push(returnString);
  } //end i loop
  //return the returnArray
  return returnArray;
};
