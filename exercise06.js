// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Phase 0, Week 4
// Exercise 06 : Logic Challenge - Digit Perkalian Minimum
// ----------------------------------------

// Problem :

// Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. 
// Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter 
// tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. 
// Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, 
// sehingga function akan me-return 2.
// Code

function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  if (angka > 1) {
    for (var i = 0 ; i < Math.sqrt(angka); i ++) {
      if (angka%i===0) {
        if (!digit) {
          var digit = ''
          digit = i.toString() + (angka/i).toString()
          // console.log(digit)
        } else if (digit) {
          var temp = ''
          temp = i.toString() + (angka/i).toString()
          if (temp.length < digit.length) {
            digit = temp
            // console.log(digit)
          }
        }
      }
    } return digit.length
  } else if (angka < 1) {
    return 0 
  } else return 2
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2