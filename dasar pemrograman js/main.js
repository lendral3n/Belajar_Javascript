//  TUGAS KECIL

/*
1. prompt untuk mengetahu saldo akhir dari apa yang di inputkan user
2. menentukan  hari dari tanggal yang ada saat ini di pc kalian
**/
saldoAwal = 9000
let saldo =  prompt("saldo anda : ")
saldoTotal = saldoAwal + saldo
alert(`saldo akhir ${saldoTotal}`)

let hari = new Date().getDay()

switch (hari) {
  case 1:
    hari = "Senin";
  case 2:
    hari = "Selasa";
  case 3:
    hari = "Rabu";
  case 4:
    hari = "Kamis";
  case 5:
    hari = "Jumat";
  case 6:
    hari = "Sabtu";
  case 7:
    hari = "Minggu";
}

alert(`hari ini adalah hari : ${hari}`)