const arraySaya = ["ww", "ss", "ll"]; // 0. 1. 2
console.log(arraySaya)

const arrayKamu = []
arrayKamu[0] = 's'
arrayKamu[1] = 1
console.log(arrayKamu)

const arrayKita = new Array('sd','wl')
console.log(arrayKita)

const namaRandom = arraySaya.includes("ss");
const posisiNama = arraySaya.indexOf("ss");

if (namaRandom == true) {
  const indexBefore = posisiNama - 1;
  const indexAfter = posisiNama + 1;
  const before = arraySaya[indexBefore];
  const after = arraySaya[indexAfter];
  const awal = arraySaya.shift();
  const akhir = arraySaya.pop();

  console.log(
    `posisi sekarang ${posisiNama} posisi sebelum ${before} posisi sesudah ${after} awalan ${awal} akhir ${akhir}`
  );
} else {
  console.log("tidak ada");
}
console.log(namaRandom);

