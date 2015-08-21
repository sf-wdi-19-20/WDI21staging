function letterCount( word ) {
  var letters = word.toLowerCase().replace(/ /g, "").split('');
  var countIndex = {};
  letters.forEach(function(letter){
    if(countIndex[letter]) {
      console.log("true", countIndex[letter])
      countIndex[letter] = countIndex[letter] + 1;
    } else {
      countIndex[letter] = 1;
    }
  });
  return countIndex;
}