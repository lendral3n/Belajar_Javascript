function addName(fullname) {
    return fullname
}

alert(addName('lendra'))

let x = myFunction(4, 3);

function myFunction(a, b) {
    return a * b;
}

const body = document.body

const perkalian = document.createElement('h1')

perkalian.innerHTML = x
body.append("4 x 3 = ", perkalian)

function toCelciius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

let value = toCelciius(77);

const p = document.createElement('p')
p.innerHTML = value
body.append(p)