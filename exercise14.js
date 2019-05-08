// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Phase 0, Week 4
// Exercise 14 : Logic Challenge - Naik Angkot
// ----------------------------------------

// Problem :

// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function 
// akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
// Code

function calculateFare (a,b) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F']
  for (var i = 0 ; i < rute.length; i++) {
    if (a === rute[i]) a = i
    else if (b === rute[i]) b = i
  }
  return (b-a)*2000
}
function naikAngkot(arrPenumpang) {
  //your code here
  var result = []
  if (arrPenumpang.length > 0) {
    for (var i = 0 ; i < arrPenumpang.length ; i++) {
      var obj = {
        penumpang : arrPenumpang[i][0],
        naikDari : arrPenumpang[i][1],
        tujuan : arrPenumpang[i][2]
      }
      obj.bayar = calculateFare(obj.naikDari,obj.tujuan)
      result.push(obj)
    }
  }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]