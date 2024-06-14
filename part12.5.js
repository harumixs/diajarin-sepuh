// soal 1
/**
 *
 *  regexnya nyomot google hehehe
 */
function hapusSimbol(str) {
  // you can only write your code here!
  const regex = new RegExp(/[^a-zA-Z0-9]/g);
  return str.replace(regex, "");
}

// TEST CASES
console.log(hapusSimbol("test%$4aa")); // test4aa
console.log(hapusSimbol("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbol("ma@#k!an~")); // makan
console.log(hapusSimbol("coding")); // coding
console.log(hapusSimbol("1+3-5*2=100")); // 1352100

console.log(
  ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
);

// soal 2
/*
Diberikan sebuah function cariPelaku(kalimat) yang menerima satu parameter berupa string. 
Function akan me-return jumlah berapa kali ditemukan kata "abc" secara berturut-turut di dalam kalimat tersebut. 
Gunakan regex untuk melatih kemampuan regex.
*/
/**
 *
 *  regexnya nyomot google hehehe
 * suer kagak paham regex wkwkwkwk
 */
function cariPelaku(str) {
  // you can only write your code here!
  const regex = new RegExp(/abc/g);
  return str.match(regex).length;
}

// TEST CASES
console.log(cariPelaku("mabcvabc")); // 2
console.log(cariPelaku("abcdabdc")); // 1
console.log(cariPelaku("bcabcac")); // 1
console.log(cariPelaku("abcabcabc")); // 3
console.log(cariPelaku("babcbacabc")); // 2
