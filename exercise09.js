// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Phase 0, Week 4
// Exercise 09 : Logic Challenge - Check AB
// ----------------------------------------

// Problem :

// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function 
// tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki 
// jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak 
// bisa dari a ke b, atau b ke a.
// Code

function checkAB(str) {
  // you can only write your code here!
  var flag = false, i = 0
  while (!flag && i < str.length) {
    
    if (str[i]==='a'||str[i]==='b') {
      var j = i+1 , counter = 0
      while(!flag && j < str.length) {
        if(((str[i]==='a'&&str[j]==='b')||(str[i]==='b'&&str[j]==='a'))&&counter===3) {
          flag =true
        } else {
          counter++
          j++
        }
      }
    }
    i++ 
  }
  return flag
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false