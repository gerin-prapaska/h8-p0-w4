// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Phase 0, Week 4
// Exercise 07 : Logic Challenge - Mengurutkan Abjad
// ----------------------------------------

// Problem :

// Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. 
// Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. 
// Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam 
// string tersebut.
// Code

function urutkanAbjad(str) {
  // you can only write your code here!
  var arr = str.split('')
  for (i = 0 ; i < arr.length ; i++) {
    for (j = 0 ; j < arr.length-i ; j++ ) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  str = arr.join('')
  return str
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'