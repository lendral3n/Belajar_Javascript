console.log(document.title)

document.title = "Lendra syaputra"

console.log(document.title)

const body = document.body 

body.append("Hello, world!")

const h1 = document.createElement('h1')
h1.textContent = 'ini h1'
body.append(h1)

const namaSaya = document.createElement('p')
namaSaya.innerHTML = 'LENDRA SYAPUTRA'
body.append(namaSaya)

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

btn1.style.border = 'none'
btn1.style.backgroundColor = 'red'

function gantiWarna() {
    btn1.style.backgroundColor = 'blue'
}

