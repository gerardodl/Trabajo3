//Utilizamos var para declarar una variable como en este caso lo seria nombre, apellido, edad, ingeniero, cocinero, cantante, dj, guitarrista y drone. 
//En este caso despues de var se encuentra el nombre de un objeto llamado sacha el cual guardara todas sus variables.
var sacha = {
    nombre: 'Sacha',
    apellido: "Smith",
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

//En este primer reto consiste en que aparesca en console las profesiones de sacha.
function imprimirReto1(persona) {
    console.log(`${persona.nombre} es: `);
    //Aqui asignamos si sacha es ingeniero con true.
       if(persona.ingeniero === true){
        console.log('Ingeniero')
       }
    //Aqui asignamos si sacha es cocinero con true.
       if(persona.cocinero === true){
        console.log('Cocinero')
       }
    //Aqui asignamos si sacha es cantante con true.
       if(persona.cantante === true){
        console.log('Cantante')
       }
    //Aqui asignamos si sacha es dj con true.
       if(persona.dj === true){
        console.log('Dj')
       }
    //Aqui asignamos si sacha es guitarrista con true.
       if(persona.guitarrista === true){
        console.log('Guitarrista')
       }
    //Aqui asignamos si sacha es drone con true.
       if(persona.drone === true){
        console.log('Drone')
       }
    }
    
    imprimirReto1(sacha);
    //Este segundo reto consiste en que aparesca en console las profesiones que no es sacha.
    function imprimirReto2(persona) {
        console.log(`${persona.nombre} no es: `);
        //Aqui asignamos si sacha no es ingeniero con false.
           if(persona.ingeniero === false){
            console.log('Ingeniero')
           }
        //Aqui asignamos si sacha no es cocinero con false.
           if(persona.cocinero === false){
            console.log('Cocinero')
           }
        //Aqui asignamos si sacha no es cantante con false.
           if(persona.cantante === false){
            console.log('Cantante')
           }
        //Aqui asignamos si sacha no es dj con false.
           if(persona.dj === false){
            console.log('Dj')
           }
        //Aqui asignamos si sacha no es guitarrista con false.
           if(persona.guitarrista === false){
            console.log('Guitarrista')
           }
        //Aqui asignamos si sacha no es drone con false.
           if(persona.drone === false){
            console.log('Drone')
           }
        }

    imprimirReto2(sacha);
    //Este tercer reto consiste en que aparezca en la pantalla si sacha es mayor o menor de edad.
    function imprimirReto3(persona){
    //
        console.log(`${persona.nombre} ${persona.apellido} tiene ${persona.edad} años, por lo tanto es: `);
    //Si sacha tiene mas de 18 años aparecera en console que es mayor de edad.
        if (persona.edad >=18) {
            console.log('Mayor de edad.')
    //Si no es mayor de edad lo indicara en cosole.
        } else {
            console.log('Menor de edad.')   
        }
    }
    imprimirReto3(sacha);
    