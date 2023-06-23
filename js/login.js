

let user = prompt('Por favor ingrese su Usuario: ')
let pass = prompt('Ingrese su Password: ')

console.log(user);
console.log(pass);

if (user == 'Nanda' && pass == '4444') {
    alert('Bienvenido a tu navegacion');
    //función de JS para llevar al user a otra página
    window.location.href = '../pages/admin.html'
} else {
    alert('Usuario o password incorrecto')
    location.href = '../pages/error.html'
}
