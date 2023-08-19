
const clientes = [
    { id: 1, nombre: "carla", direccion: "Av casa" },
    { id: 2, nombre: "pedro", direccion: "Calle departamento" },
    { id: 3, nombre: "jose", direccion: "Calle hotel" },
    { id: 4, nombre: "maria", direccion: "Callejon condomino" },
    ];

let pcerv = 5;
let pteq =10;
let pron = 12;
let pgin = 15;
let pdeli = 6;


let edad = parseInt(prompt("Ingrese su edad"));
if (edad >= 18){

    let nombIngresado = (prompt("Ingrese su nombre"));
    let esta = clientes.includes(nombIngresado);

    while (clientes.indexOf(esta) != false){
        
        alert(`Favor ingrese su pedido utilizando la tabla de presior que se visualiza en la web`);
        let cerv = parseInt(prompt("Cuantas unidades de Cerveza desea agregar?, ingrese cero 0 en caso de no llevar."));
        let teq = parseInt(prompt("Cuantas unidades de Tequila desea agregar?, ingrese cero 0 en caso de no llevar."));
        let ron = parseInt(prompt("Cuantas unidades de Ron desea agregar?, ingrese cero 0 en caso de no llevar."));
        let gin = parseInt(prompt("Cuantas unidades de Gin desea agregar?, ingrese cero 0 en caso de no llevar."));
        let deli = parseInt(prompt("Desea agregar delivery, ingrese 1 para agregar, cero 0 retiro en tienda"));

        const cuenta = 
        cerv*pcerv + 
        teq*pteq +
        ron*pron +
        gin*pgin;

        if (deli == 1){
            alert(`El monto a pagar es: ${cuenta + pdeli - 3}`);
        }else {
            alert(`El monto a pagar es: ${cuenta + pdeli}`);
        }
}
}
