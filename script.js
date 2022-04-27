//Challenge 1 

// declare empty string variable
let string = "";

function drawStar(n){
    // create a loop for the number of rows
  for(let rowNum = 1; rowNum <= n; rowNum++){
      // create a loop for number of spaces, spaces are equal to n - rowNum
      for(let spaceNum = 0; spaceNum < n - rowNum; spaceNum++){
          string += " ";
      }
      // create a loop for number of stars, stars are equal to rowNum
       for(let starNum = 0; starNum < rowNum; starNum++){
        string += "*";
      }
      // append a new line
      string += "\n"
  }    
    // print out the completed string
    console.log(string);
}
