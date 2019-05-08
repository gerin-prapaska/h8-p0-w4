// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Phase 0, Week 4
// Exercise 11 : Logic Challenge - Shopping Time!
// ----------------------------------------

// Problem :

// Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan 
// number. Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh 
// member tersebut.

// Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

//     Sepatu Stacattu 1500000
//     Baju Zoro 500000
//     Baju H&N 250000
//     Sweater Uniklooh 175000
//     Casing Handphone 50000

// Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, 
// money, listPurchased dan changeMoney.

//     Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
//     Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
//     Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli 
//     barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.

// Contoh jika inputan memberId: '324193hDew2' dan money: 700000

// maka output:

// { memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], 
// changeMoney: 25000 }
// Code

function shoppingTime(memberId, money) {
  // you can only write your code here!
  var itemList = [['Sepatu Stacattu', 1500000], ['Baju Zoro', 500000], ['Baju H&N', 250000], ['Sweater Uniklooh', 175000], ['Casing Handphone', 50000]]
  var flag = false
  for (var i = 0 ; i < itemList.length ; i++) {
    if ((money-itemList[i][1])>=0) flag=true
  }
  
  if (memberId === undefined) return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  else if (memberId.length === 0) return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  else if (!flag) return 'Mohon maaf, uang tidak cukup'
  else {
    var purchased = [], changeMoney = money

    var i = 0, sufficient = true
    while (sufficient && i<itemList.length){
      if (changeMoney == 0) sufficient = false
      else if ((changeMoney-itemList[i][1])>=0) {
        purchased.push(itemList[i][0])
        var count = true
        while(count){
          if ((changeMoney-itemList[i][1])>=0) changeMoney-=itemList[i][1]
          else count = false
        }
      }
      i++
    }

    var invoice = {
      memberId: memberId,
      money: money,
      listPurchased: purchased,
      changeMoney: changeMoney 
    }
    return invoice
  }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }

console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja