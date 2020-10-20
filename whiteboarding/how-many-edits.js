//There are three types of edits that can be performed of strings:
 //insert a character, remove a character, or replace a character. 
 //Given two strings, write a function to check if they are one edit (or zero edits away).
 // Examples:  pale, ple --> true,   /  pale, bake --> false  / pale, bale --> true.

//is ple the result of a character change to pale?


// pale, bale
function oneAway(str1, str2) {
  let change = '';
  while (str1[0] === str2[0]) {
    str1 = str1.substring(1);
    str2 = str2.substring(1); // 'hello'.substring(1) => 'ello'; 
  }
  while (str1[str1.length-1] === str2[str2.length-1]) {
    str1 = str1.substring(0, str1.length-1); // p
    str2 = str2.substring(0, str2.length-1); // b
  }
  if(str1.length === str2.length){
    change = 'replaced';
  } else if (str1.length < str2.length) {
    change = 'insertion';
  } else {
    change = 'deletion';
  }

  if (str1.length <= 1 && str2.length <= 1) {
    return [true, change];
  } else {
    return false;
  }
}
  
