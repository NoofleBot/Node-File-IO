var fs = require("fs");

myFunction("MyNames.txt");

function myFunction(fileName) {
  let data = fs.readFileSync(fileName, "utf-8");
  let removeLineBreaks = data.replace(/\n/g," "); //global replacement of all newlines in data
  let splitWords = removeLineBreaks.split(" ");
  let capitalizeSplitWords = splitWords.map(function(word){
    letterToCapitalize = word.charAt(0);
    remainingLetters = word.substring(1);
    capitalizedFirstLetter = letterToCapitalize.toUpperCase()
    return (capitalizedFirstLetter + remainingLetters);
  })

  let finalOutput = "";
  let i = 0;
  for (i = 0; i < capitalizeSplitWords.length; i++) {
    if ((i % 2 == 0) && (i !== 0)) {
      finalOutput = finalOutput.slice(0, -1); //remove space before newline
      finalOutput += "\n"
    }
    finalOutput += capitalizeSplitWords[i] + " ";
  }
  if (i = capitalizeSplitWords.length) {  //remove unnecessary space at end of file
    finalOutput = finalOutput.slice(0, -1);
  }

  fs.writeFileSync(fileName, finalOutput, "utf-8", function (err) {
    if (err) throw err;
  });
}