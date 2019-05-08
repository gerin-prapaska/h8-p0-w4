// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Phase 0, Week 4
// Exercise 02 : Logic Challenge - Faktor Persekutuan Terbesar
// ----------------------------------------

// Problem : 

// Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. Function akan 
// mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat 
// positif terbesar yang dapat membagi habis kedua bilangan tersebut.
// Code

function fpb(angka1, angka2) {
  // you can only write your code here!
  if (angka1>angka2) x = angka1
  else x = angka2 
  var flag = true
  while (x>=0 && flag) {
    if(angka1 % x == 0 && angka2 % x == 0) flag = false
    else x--
  }
  return x 
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1