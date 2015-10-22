var translate = function(input) {

  var word = input.split('');
  console.log(word);
  var vowels = ["a","e","i","o","u"];
  var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y",
  "z"];

  var i = 0;
  consonants.forEach(function(consonant) {
    if (word[i] === consonant) {
      i++;
      var count = i;
      console.log(count + " = " + consonant);
      // count = count-1;
      
    }
    console.log(count);
    var slice = word.slice(0,count+1);
    console.log(slice);
    slice = slice.join('');
    console.log(slice);
    word.push(slice);
    // var slice = word.slice(0,count)
    // console.log(slice)
    // slice = slice.join('');
    // console.log(count + " = " + splice);
    // word.push(slice);

  });


  vowels.forEach(function(vowel) {
    if (word[0] === vowel) {
      word.push("ay");
    }
    // else if {
    //   consonants.forEach(function(consonant) {
    //     if (word[0] === consonant) && () {
    //       word.reverse().pop();
    //       word.reverse();
    //
    //     }
    //   })
    // }
  });

  var string = word.join('');
  console.log(word);
  console.log(string);
  return string;

};






// $(document).ready(function() {
//   $(".btn").click(function() {
//     input = $("input#word").val();
//     translate(input);
//     // console.log(input);
//     event.preventDefault();
//   });
//
//
//
// });
