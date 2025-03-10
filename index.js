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
  for (let i = 0; i < capitalizeSplitWords.length; i++) {
    if ((i % 2 == 0) && (i !== 0)) {
      finalOutput += "\n"
    }
    finalOutput += capitalizeSplitWords[i] + " ";
  }
  fs.writeFile(fileName, finalOutput, "utf-8", function (err) {
    if (err) throw err;
  });
}
