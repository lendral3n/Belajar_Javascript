alert("lendra")

console.log("lendra")

prompt("nama:")

var Nama = "lendra";
const umur = 20;
let usia = 44;
usia = 88;
console.log("Nama Kamu " + Nama + " Umur " + umur + " usia " + usia);

let nama = prompt("Nama Mu : ")
alert("nama mu " + nama)

let nama = "lendra"; //string
let umur = 30; // integer number
let tinggiBadan = 175.3; // double float
let beratBadan;
let pacar = 1; // tidak ada nilai / kosong

// kondisi
beratBadan = 22;
if (pacar == null) {
  pacar = "gada";
} else {
  pacar = "punya pacar";
}

switch(pacar){
    case 1:
        pacar = "punya 1 aja"
    break
    case 2:
        pacar = "punya 2 pcar"
    break
    default:
        pacar = "belum ada pcar"
}

let saldoAwal = 500
let saldoTambahan = 800
// operator
const hutang = 100
const totalSaldo = saldoAwal + saldoTambahan
 - hutang

alert(
  `nama saya ${nama} usia saya ${umur} tinggi badan saya ${tinggiBadan}cm berat badan saya ${beratBadan}kg dan pacar saya ${pacar}`
);

alert(`saldo awal saya ${saldoAwal} dan saldo tambahan saya ${saldoTambahan} jadi total saldo saya miliki ${totalSaldo}`)

let namaGuru = ['le', 'l']
namaGuru.push('ee')
namaGuru.shift() // hapus awal
namaGuru.pop // hapus akhir
alert(namaGuru)

let namaGuru = []

namaGuru[0] = 'lendra'
namaGuru[1] = 'ffes'

alert(namaGuru)

3 statements
const namaGuru = ['lendra', 'hhw']

for(let i = 0; i < namaGuru.length; i++) {
    console.log(namaGuru[i])
}

let i = 0
while(i < 10){
    i++
    console.log('lendra')
}

do {
    i++
    console.log("lendra")
} while (i < 10)
