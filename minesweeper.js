// export (add this back in once you're done using the browser console)

const annotate = (inputArray) => {
  console.log("inputArray:", inputArray);

  //create an array to return, returnArray
  let returnArray = [];
  //loop through the inputArray
  for (let i = 0; i < inputArray.length; i++) {
    //declare variable for the inputString
    let inputString = inputArray[i];
    console.log("inputString:", inputString);

    //create a variable for the returnString
    let returnString = "";

    //loop through each inputString in the inputArray
    for (let j = 0; j < inputString.length; j++) {
      //is this the first item and the last item? (single string?)
      if (
        inputArray[i] === inputArray[0] &&
        inputArray[inputArray.length - 1]
      ) {
        //create a variable for the space you are working in
        let currentSpace = 0;
        console.log("currentSpace:", currentSpace);
        //first check iF the character you are at is an asterisk, then currentSpace="*"
        if (inputString[j] === "*") {
          currentSpace = "*";
          console.log("currentSpace asterisk:", currentSpace);
        } else {
          //check characters on either side
          if (inputString[j - 1] === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
          // }
          if (inputString[j + 1] === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
        }
        if (currentSpace === 0) {
          returnString = returnString + " ";
        } else {
          //concatenate currentSpace onto returnString, move to next spot in the string
          returnString = returnString + currentSpace;
        }
        console.log("returnString:", returnString);
      } //END LOGIC FOR SINGLE STRING
      //is this the first item in the array?
      else if (inputArray[i] === inputArray[0]) {
        let stringFollowing = inputArray[i + 1];
        console.log("stringFollowing:", stringFollowing);
        //create a variable for the space you are working in
        let currentSpace = 0;
        console.log("currentSpace:", currentSpace);
        //first check iF the character you are at is an asterisk, then currentSpace="*"
        if (inputString[j] === "*") {
          currentSpace = "*";
          console.log("currentSpace asterisk:", currentSpace);
        } else {
          //check against same string and string following it
          if (inputString[j - 1] === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
          // }
          if (inputString[j + 1] === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
          if (stringFollowing.charAt(j) === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
          if (stringFollowing.charAt(j - 1) === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
          if (stringFollowing.charAt(j + 1) === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
        }
        if (currentSpace === 0) {
          returnString = returnString + " ";
        } else {
          //concatenate currentSpace onto returnString
          returnString = returnString + currentSpace;
        }
        console.log("returnString:", returnString);
      } //END LOGIC FOR FIRST STRING
      //is this the last item in the array?
      else if (inputArray[i] === inputArray[inputArray.length - 1]) {
        let stringPrevious = inputArray[i - 1];
        console.log("stringPrevious:", stringPrevious);
        //create a variable for the space you are working in
        let currentSpace = 0;
        console.log("currentSpace:", currentSpace);
        //first check iF the character you are at is an asterisk, then currentSpace="*"
        if (inputString[j] === "*") {
          currentSpace = "*";
          console.log("currentSpace asterisk:", currentSpace);
        } else {
          //check same string and string previous
          if (inputString[j - 1] === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
          // }
          if (inputString[j + 1] === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
          if (stringPrevious.charAt(j) === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
          if (stringPrevious.charAt(j - 1) === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
          if (stringPrevious.charAt(j + 1) === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
        }
        if (currentSpace === 0) {
          returnString = returnString + " ";
        } else {
          //concatenate currentSpace onto returnString
          returnString = returnString + currentSpace;
        }
        console.log("returnString:", returnString);
      } //END LOGIC FOR LAST STRING
      //otherwise, check same string, string previous and string following
      else {
        let stringPrevious = inputArray[i - 1];
        console.log("stringPrevious:", stringPrevious);
        let stringFollowing = inputArray[i + 1];
        console.log("stringFollowing:", stringFollowing);
        //create a variable for the space you are working in
        let currentSpace = 0;
        console.log("currentSpace:", currentSpace);
        //first check iF the character you are at is an asterisk, then currentSpace="*"
        if (inputString[j] === "*") {
          currentSpace = "*";
          console.log("currentSpace asterisk:", currentSpace);
        } else {
          //check em all
          if (inputString[j - 1] === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
          // }
          if (inputString[j + 1] === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
          if (stringPrevious.charAt(j) === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
          if (stringPrevious.charAt(j - 1) === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
          if (stringPrevious.charAt(j + 1) === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
          if (stringFollowing.charAt(j) === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
          if (stringFollowing.charAt(j - 1) === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
          if (stringFollowing.charAt(j + 1) === "*") {
            currentSpace++;
            console.log("currentSpace increment:", currentSpace);
          }
        }
        if (currentSpace === 0) {
          returnString = returnString + " ";
        } else {
          //concatenate currentSpace onto returnString
          returnString = returnString + currentSpace;
        }
        console.log("returnString:", returnString);
      } //END LOGIC FOR ALL MIDDLE STRINGS
    } //end j loop
    //once all the currentSpaces have been checked in each string, push the returnString into the returnArray
    returnArray.push(returnString);
  } //end i loop
  console.log("returnArray:", returnArray);
  //return the returnArray
};

annotate(["*  ", " * "]);
