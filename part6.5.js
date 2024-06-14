// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("LOOPING PERTAMA");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log("LOOPING KEDUA");
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

console.log("\n");

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("LOOPING PERTAMA");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("LOOPING KEDUA");
for (let j = 10; j >= 1; j--) {
  console.log(j);
}

console.log("\n");

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for (let counter = 1; counter <= 100; counter++) {
  if (counter % 2 === 0) {
    console.log(counter + " adalah GENAP ya guys");
  } else {
    console.log(counter + " adalah GANJIL ya guys");
  }
}

console.log("\n");

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

console.log("Perulangan dengan pertambahan 2:");
for (let counter = 1; counter <= 100; counter += 2) {
  if (counter % 3 === 0) {
    console.log(counter + " adalah kelipatan 3");
  }
}

console.log("\nPerulangan dengan pertambahan 5:");
for (let counter = 1; counter <= 100; counter += 5) {
  if (counter % 6 === 0) {
    console.log(counter + " adalah kelipatan 6");
  }
}

console.log("\nPerulangan dengan pertambahan 9:");
for (let counter = 1; counter <= 100; counter += 9) {
  if (counter % 10 === 0) {
    console.log(counter + " adalah kelipatan 10");
  }
}

// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
let input = 5;
//hasilnya
//*
//**
//***
//****
//*****

for (let i = 1; i <= input; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}

// BONUS :V

for (let i = input; i >= 1; i--) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}

console.log("\n");

for (let i = 1; i <= input; i++) {
  let line = "";
  for (let j = 1; j <= input - i; j++) {
    line += " ";
  }
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}

//  dah capek :v
