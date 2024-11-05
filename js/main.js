
//inicio del programa


alert("Bienvenido al simulador de créditos");
let run, nombre, telefono
let montoIngresado, monto
let cuotasIngresado, cuotas

//Datos de Contacto
while(!run){
    run = prompt("Ingrese su R.U.N:");
    if(!run){
        console.log("R.U.N. No valido, favor ingreselo")
    }
}

while(!nombre){
    nombre = prompt("Ingrese su Nombre y Apellido:");
    if(!nombre){ 
        console.log("Datos No valido, favor ingreselo")
    }
}


while(!telefono || telefono==isNaN){
    telefono = parseInt(prompt("Ingrese su Número de Contacto"));
    if(!telefono || telefono==isNaN){       
        console.log("Número No valido, favor ingreselo")
}
}

//Opciones para el usuario
let opcion=0, opciones
while(opcion==0){


//Solicitamos monto y validamos que se ingresen valores
    while(!montoIngresado|| isNaN(monto)){
        montoIngresado = prompt("Estimado " + nombre + " ¿Cuánto quiere pedir?");
        monto=parseInt(montoIngresado);
        if(!montoIngresado || monto==isNaN){       
            console.log("Debe Ingresa un valor númerico");
        }
    }


    while(!cuotasIngresado|| isNaN(cuotas)){
        cuotasIngresado = prompt("¿En cuántas cuotas?");
        cuotas=parseInt(cuotasIngresado);
        if(!cuotasIngresado || cuotas==isNaN){       
            console.log("Debe Ingresa un valor númerico");
        }
    }


//Menu de acción
    while(!opciones|| isNaN(opcion)){
        opciones = prompt("¿Quieres simular tu crédito con estos datos? 0-Volver  1-Simular mi crédito  2-salir");
        opcion= parseInt(opciones);
        if(!opciones|| isNaN(opcion))
        {
            opciones = prompt("Debes selecionar una de las opciones: 0-Volver  1-Simular mi crédito  2-salir");
            opcion= parseInt(opciones);
        }
        

    }

    /*acciones si es 0, volvemos a pedir monto y cuotas
    1, calculamos cuota con interes compuesto
    2, salir del programa
    */
   switch(opcion){
        case 0:
        montoIngresado=null;
        cuotasIngresado=null;
        opciones=null;
        break;

        case 1:

            // aplicamos formula financiera
            /*
            A=       r(1+r)^n
            P* ______________
                    (1+r)^n-1
            
            A= valor de cuota
            P= monto del Prestamo
            r= tasa de interes mensual
            n= cuotas
            */

            const P=monto
            const r=1.2
            const n=cuotas

            const A= Math.round(P * (((r/100)*Math.pow(1+(r/100),n))/(Math.pow(1+(r/100),n)-1)))
            const CTC=A*n
            alert("La cuota mensual es de $ "+A);
            console.log("Monto a solicitar " + P);
            console.log("Cuota mensual " +A);
            console.log("Número de cuotas " + n);
            console.log("Tasa de interés " +r+"% mensual");
            console.log("Costo Total del Crédito (CTC) " + CTC);

            opciones = prompt("Que decea hacer: 0-Volver a simular  1-Me interesa el prestamo  2-Salir");
            opcion= parseInt(opciones);
            
            //Si le interesa prestamo, avisar al ejecutivo para contactar, si no, salir del programa
            switch(opcion)
            {
                case 1:
                alert("Estimad@ "+nombre+", un ejecutivo se contactará con usted");
                alert("Gracias por Simular su Prestamo");
                break;
                case 2:
                alert("Gracias por simular su Prestamo");
                break;

            }
        break;

        case 2:
             alert("Gracias por Shimular su Prestamo");
             //return;       
        break
    }  
  

}







