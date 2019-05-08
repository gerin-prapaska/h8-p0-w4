// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Phase 0, Week 4
// Exercise 05 : Logic Challenge - Mencari Modus
// ----------------------------------------

// Problem :

// Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau 
// deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari 
// [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai 
// modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 
// 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
// Code

function createObj(arr,obj) {
  if ( arr.length > 0 ) {
    var key = arr.splice(0,1)
    if (!obj[key]) obj[key] = 1
    else obj[key] += 1
    return createObj(arr,obj)
  } else return obj
 }


function cariModus(arr) {
  // you can only write your code here!
  var obj = {}
  obj = createObj(arr, obj)

  var max = 0, noModus = true, modus
  for (var key in obj){
    if (obj[key]>max) {
      max = obj[key]
      modus = key
    }
    if (!temp) var temp = obj[key]
    else if (obj[key]!==temp) noModus=false
  }
  if (noModus) return -1
  else return modus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

// 3*Loops
// function cariModus(arr) {
//   // you can only write your code here!
//   var unique = [], counter = []
//   for(var i = 0 ; i < arr.length ; i++) {
//     if (unique.length===0) {
//       unique.push(arr[i])
//       counter.push(1)
//     } else {
//       var isUnique = true, j = 0
//       while(isUnique&&j<unique.length) {
//         if (arr[i]===unique[j]) {
//           isUnique = false
//           counter[j] += 1
//         } else j++
//       }
//       if (isUnique) {
//         unique.push(arr[i])
//         counter.push(1)
//       }
//     }
//   }
//   console.log(unique)
//   console.log(counter)
  
//   var noModus = true, check = 0, max = 0, indexModus
//   for (var i = 0 ; i < counter.length ; i ++) {
//     check += counter[i]
//     if (check/counter[i]!==(i+1)) noModus = false
//     if (counter[i]>max) {
//       indexModus = i
//       max = counter[i]
//     }
//   }

//   if (noModus) return -1
//   else {
//     var modus = unique[indexModus]
//     return modus
//   }
// }

// 2*Loops
// function cariModus(arr) {
//   // you can only write your code here!
//   var unique = [], counter = []
//   for (var i = 0; i < arr.length; i ++) {
//     if (unique.length==0) {
//       unique.push(arr[i])
//       counter.push(1)
//     } else {
//       var isUnique = true, noModus = true, maxCount = 0, modusIndex
//       for (var j = 0; j < unique.length; j++) {
//         if (unique[j]===arr[i]) {
//           isUnique = false
//           counter[j] +=1
//         }
//         if (counter[j]>maxCount) {
//           maxCount = counter[j]
//           modusIndex = j
//         }
//         if (j < unique.length-1) {
//           if (counter[j]!==counter[j+1]) noModus = false
//         }
//       }
//       if (isUnique) {
//         unique.push(arr[i])
//         counter.push(1)
//       }
//     }
//   }
//   console.log(unique)
//   console.log(counter)
//   if (noModus) return -1
//   else return unique[modusIndex]
// }
