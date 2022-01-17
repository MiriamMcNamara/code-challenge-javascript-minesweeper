//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export (add this back in once you're done using the browser console)

const annotate = (inputArray) => {
  console.log("inputArray:", inputArray);

  //create an array to return, returnArray
  let returnArray = [];
  //loop through the inputArray
  for (let i = 0; i < inputArray.length; i++) {
    //add IFs for edge cases here?

    //declare variable for the inputString
    let inputString = inputArray[i];
    console.log("inputString:", inputString);

    //create a variable for the returnString
    let returnString = "";

    //loop through each inputString in the inputArray
    for (let j = 0; j < inputString.length; j++) {
      //add IFs for edge cases here?
      //create a variable for the space you are working in
      let currentSpace = 0;
      console.log("currentSpace:", currentSpace);
      //first check iF the character you are at is an asterisk, then currentSpace="*"
      if (inputString[j] === "*") {
        currentSpace = "*";
        console.log("currentSpace asterisk:", currentSpace);
      } else {
        // if ((inputString[j - 1] = !null)) { (not sure we need this?)
        if (inputString[j - 1] === "*") {
          currentSpace++;
          console.log("currentSpace increment:", currentSpace);
        }
        // }

        //inputArray[i].inputString[j] check if these are asterisks:

        //if each of these things EXISTS, do a thing (nest some ifs? would that take care of edges?)
        //inputArray[i].string[j-1, j+1]
        //inputArray[i-1].string[j, j+1, j-1]
        //inputArray[i+1].string[j, j+1, j-1]

        //IF the space we are checking against is an asterisk, currentSpace ++
      }
      if (currentSpace === 0) {
        returnString = returnString + " ";
      } else {
        //concatenate currentSpace onto returnString (might need to toString?), move to next spot
        returnString = returnString + currentSpace;
      }

      //if this doesn't work against edge pieces, i'll have to customize a bit further...
    } //end j loop
    console.log("returnString:", returnString);
    //once all the currentSpaces have been checked in each string, push the returnString into the returnArray
    returnArray.push(returnString);
  } //end i loop
  console.log("returnArray:", returnArray);
  //return the returnArray
};

annotate(["*  ", " * "]);
