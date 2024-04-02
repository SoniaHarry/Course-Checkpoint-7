function test(arg1,arg2,arg3,arg4) {
    let num= (arg1+arg2) * (arg3+arg4);
    if (num>50) {
        console.log('¡El número es mayor que 50!');
    } 
    else if (num<50) {
        console.log('¡El número es menor que 50!');
    }
    else {
        console.log('');
    }
}
//Ejemplos
test (1,2,3,4); // devuelve ¡El número es menor que 50!
test (34,56.4,-56,67) // devuelve ¡El número es mayor que 50!
test () //devuelve cadena vacia ''