// soal 1
/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter.
 Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, 
 dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
  // you can only write your code here!
  const reverseKata = kata.split("").reverse().join("");
  return kata === reverseKata;
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false

console.log("\n");

// soal 2
/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. 
Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome.
Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom.
Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome.
Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

function angkaPalindrome(num) {
  // you can only write your code here!
  function isPalindrome(number) {
    let strNumber = number.toString();
    return strNumber === strNumber.split("").reverse().join("");
  }

  let nextPalindrome = num + 1;

  while (!isPalindrome(nextPalindrome)) {
    nextPalindrome++;
  }

  return nextPalindrome;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

console.log("\n");

// soal 3
function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  return kalimat.split(" ").length;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5

console.log("\n");

// soal 4
function pasanganTerbesar(num) {
  // you can only write your code here!
  let strNum = num.toString();

  let maxPair = 0;
  let maxDigit1 = "";
  let maxDigit2 = "";

  for (let i = 0; i < strNum.length - 1; i++) {
    let currentPair = +(strNum[i] + strNum[i + 1]);

    if (currentPair > maxPair) {
      maxPair = currentPair;
      maxDigit1 = strNum[i];
      maxDigit2 = strNum[i + 1];
    }
  }

  return maxPair;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
