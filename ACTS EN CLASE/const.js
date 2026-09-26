const contact = {
    "forename": "Ash",
    "surname": "Springs",
    fullName: function() {
        return " Ash Springs";
    }
}
let ashSpringsFullName = contact.fullName;
console.log(ashSpringsFullName());

agregar(ashSpringsFullName)

function agregar(funcionUno){
    console.log(funcionUno());
}
funcionamientoMath()
/*
* Funcionamieto de la clase Math
* Math es una herramienta de matemáticas
*/
function funcionamientoMath(){
    const numeroRandom = Math.random();
    console.info(numeroRandom);
    console.info(Math.PI);
}
funcionStrings();
function funcionStrings(){
    let nombre = "juan";
    console.info(nombre.toUpperCase());
    for(let i=0;i<=nombre.length;i++){
        console.log(nombre.charAt(i));
    }
    console.info(nombre.substring(0,nombre.length));

    let numero2=2345;
    console.info(typeof(numero2));
}
