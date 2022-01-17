//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export (add this back in once you're done using the browser console)

const annotate = (inputArray) => {
  console.log("inputArray:", inputArray);

  //Pseudocode brainstorm:
  //reminder: console.log each step, check each one along the way!

  //create an array to return, returnArray
  let returnArray = [];
  //loop through the inputArray
  for (let i = 0; i < inputArray.length; i++) {
    //add IFs for edge cases here

    //declare variable for the inputString
    let inputString = inputArray[i];
    console.log("inputString:", inputString);

    //create a variable for the new string here? returnString
    let returnString = "";

    //loop through each inputString in the inputArray
    for (let j = 0; j < inputString.length; j++) {
      //add IFs for edge cases here
      //create a variable for the space you are working in, currentSpace=0
      let currentSpace = 0;
      if (inputString[j] === "5") {
        currentSpace = "*";
      } else {
        currentSpace = inputString[j];
      }
      //first check iF the character you are at is an asterisk, currentSpace='/*' (will this work in javascript? i think so)
      //concatenate currentSpace onto returnString, move to next spot
      returnString = returnString + currentSpace;

      //for each character that IS NOT an edge piece OR an asterisk, this should work:
      //array[i].string[j] check if these are asterisks:
      //array[i].string[j-1, j+1]
      //array[i-1].string[j, j+1, j-1]
      //array[i+1].string[j, j+1, j-1]

      //IF it's an asterisk, currentSpace ++

      // after you check all of them, concatenate currentSpace onto returnString
      //move to next currentSpace
      //once all the currentSpaces have been checked in each string, push the returnString into the returnArray

      //if this doesn't work against edge pieces, i'll have to customize a bit further

      //at the end, toString to ensure the numbers are all returned to string?
    } //end j loop
    console.log("returnString:", returnString);
    returnArray.push(returnString);
  } //end i loop
  console.log("returnArray:", returnArray);
  //return the returnArray
};

annotate(["hel5o", "wor5d"]);

//Pseudocode brainstorm:
//reminder: console.log each step, check each one along the way!

//create an array to return, returnArray
//loop through the array
//add IFs for edge cases here
//create a variable for the new string here? returnString
//loop through each string
//add IFs for edge cases here
//create a variable for the space you are working in, currentSpace=0
//first check iF the character you are at is an asterisk, currentSpace='/*' (will this work in javascript? i think so)
//concatenate currentSpace onto returnString, move to next spot

//for each character that IS NOT an edge piece OR an asterisk, this should work:
//array[i].string[j] check if these are asterisks:
//array[i].string[j-1, j+1]
//array[i-1].string[j, j+1, j-1]
//array[i+1].string[j, j+1, j-1]

//IF it's an asterisk, currentSpace ++

// after you check all of them, concatenate currentSpace onto returnString
//move to next currentSpace
//once all the currentSpaces have been checked in each string, push the returnString into the returnArray

//if this doesn't work against edge pieces, i'll have to customize a bit further

//at the end, toString to ensure the numbers are all returned to string?

//return the returnArray
