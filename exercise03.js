// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Phase 0, Week 4
// Exercise 03 : Logic Challenge - Mencari Median
// ----------------------------------------

// Problem :

// Diberikan sebuah function cariMedian(arr) yang menerima sebuah array angka. Function akan me-return 
// median dari deret angka tersebut. Median adalah nilai tengah dari sebuah deret bilangan. Contoh, median 
// atau dari [1, 2, 3, 4, 5] adalah 3 yang merupakan nilai yang ada di posisi tengah dari deret tersebut. 
// Median dari deret yang berjumlah genap adalah rata-rata dari dua nilai tengah. Contoh, median dari 
// [1, 2, 3, 4] adalah 2.5, karena (2 + 3 / 2).
// Code

function cariMedian(arr) {
  // you can only write your code here!
  for (var i = 0 ; i < Math.floor(arr.length/2) ; i ++){
    if (arr.length%2==1) x = arr[Math.floor(arr.length/2)]
    else x = (arr[(arr.length/2)-1] + arr[arr.length/2])/2
  }
  return x
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5