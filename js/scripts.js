var translate = function(input) {

  var word = input.split('');
  console.log(word);
  var vowels = ["a","e","i","o","u"];

  vowels.forEach(function(vowel) {
    if (word[0] === vowel) {
      word.push("ay");
    }
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
