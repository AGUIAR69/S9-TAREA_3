class Ejercicio10{
    Sumardosnumeros(){
   let num1 = Math.floor (Math.random() * 10);
   let num2 = Math.floor (Math.random() * 10);
   let suma = 0;
   console.log (`La suma de ${num1} +  ${num2} `);
   if (num1 > num2){
       suma= num1 + num2;
       console.log( `La suma de los dos numeros dados es = ${suma}`);
   }else{
       console.log ("El primer número no es mayor");
   }
}
    
    Operaciones(){
     let num1 = Math.floor(Math.random() * 10);
     let num2 = Math.floor(Math.random() * 10);
     let suma =0, resta= 0, multiplicacion= 0, division= 0, residuo= 0;
     console.log(`primer numero: ${num1} `);
     console.log(`primer numero: ${num2} `);
     suma = num1 + num2;
     resta = num1 - num2;
     multiplicacion = num1 * num2;
     division = num1 / num2;
     residuo = num1 % num2;
     console.log( `${num1} + ${num2} = ${suma}`);
     console.log(`${num1} - ${num2} = ${resta} `);
     console.log(`${num1} * ${num2} = ${multiplicacion} `);
     console.log(`${num1} / ${num2} = ${division} `);
     console.log(`${num1} % ${num2} = ${residuo} `);
 }

    Numeromayor(){
     let n1 = Math.floor (Math.random() * 10);
     let n2 = Math.floor (Math.random() * 10);
     console.log (`${n1}`);
     console.log (`${n2}`);
     if (n1 > n2){
         console.log (n1, "es mayor a:" ,n2);
     }else{
         if (n1 === n2){
             console.log (n1, "es igual a", n2);
         }else{
           console.log (n2, "es mayor a:" ,n1);
         }
     }
    }
    
    Presentar_un_nombre(){

     let name="Angel"
     console.log("El nombre es: ")
     console.log(name)
 }

    Compra_IVA(){

        let precio = Math.floor (Math.random()*10);
        console.log (precio);
        let IVA= precio*0.12;
        let precio_IVA = IVA + precio;
        console.log ( `El precio total a pagar sin IVA es: ${precio} ` )
        console.log (` El precio total a pagar con IVA incluido es ${precio_IVA} ` );
    }
    Presentar_5veces_nombre(){
        let name = "Angel";
        let i=0;
        while (i < 5 ){
            console.log(name);
            i++
        }
    }

    Multiplos_3(){
        console.log ("Los multiplos numeros de 3 son: ")
        for (i=3; i <= 21; i++){
            if (i % 3 === 0){
                console.log(i)
            }
        }
    }

    Multiplosde3_t2(){
        console.log ("Los números multiplos de 3 del 21 al 3 son: ");
        for (i=21; i >= 3; i--){
            if (i % 3 === 0){
                console.log(i)
            }
        }
    }

    nombres_iguales(){
        let nom1= "Angel";
        let nom2= "Narcisa";
        console.log("Indicar si los dos nombres son iguales o diferentes");
        if (nom1.toLowerCase() == nom2.toLowerCase()){
            console.log ("Los dos nombres son iguales");
        }else{
            console.log (nom1, "no es igual a " ,nom2);
        }
    }

    Arreglo_menosde5caracteres(){

        let arreglo1=["35276","170","19","990235","301","98","37941","611","52","148"];
        console.log(arreglo);
        let nombre=arreglo.length;
        let p=0;
        console.log( "Los elementos que tienen menos de 5 caracteres son: " )
        for (p=0;p <= nombre-1;p++){
            if (arreglo[p].length<5){
                console.log("Posicion", p,")", arreglo[p])
            }
        }
      }
}

let ejer= new Ejercicio10()
//ejer.Sumardosnumeros()
//ejer.Operaciones()
//ejer.Numeromayor()
//ejer.Presentar_un_nombre()
//ejer.Compra_IVA()
//ejer.Presentar_5veces_nombre()
//ejer.Multiplos_3()
//ejer.Multiplosde3_t2()
//ejer.nombres_iguales()
//ejer.Arreglo_menosde5caracteres()
