   
   
   //ejercicio 1
    const inputEdad = document.querySelector(".edad");
    const buton = document.querySelector(".boton");

    buton.addEventListener("click", validar);


    function validar(e){
        e.preventDefault();
        elminarMensaje();
        let edad = inputEdad.value;
        edad >= 18 ? mensaje(edad, "mayor de edad", e.target.parentElement): mensaje(edad, "menor de edad",e.target.parentElement);
        

    }

    function mensaje(edad, mensaje, referencia){
        let mjs = document.createElement("P");
        mjs.textContent = `Tu edad es ${edad}, eres ${mensaje}`;
        mjs.classList.add("mensaje");
        referencia.appendChild(mjs);
     
    }

    function elminarMensaje(){
        let mensajito = document.querySelector(".mensaje");
        if(mensajito){
            mensajito.remove();
            return;
        }
    }

    //ejercicio 2

    const examen = document.querySelector("#examen");
    const tareas = document.querySelector("#tareas");
    const asistencia = document.querySelector("#asistencia"); 
    const investigacion = document.querySelector("#investigacion");
    const estudiante = document.querySelector("#estudiante");
    const carnet = document.querySelector("#carnet");
    const btn = document.querySelector(".btn");

    btn.addEventListener("click", leer);

    function leer(e){
        e.preventDefault();
        let estudiantee = estudiante.value;
        let carnett = carnet.value;
        let examenn = examen.value;
        let tareass = tareas.value;
        let asistenciaa = asistencia.value;
        let investigacionn = investigacion.value;
        let notaFinal = (examenn*0.20)+(tareass*0.40)+(asistenciaa*0.10)+(investigacionn*0.30)
        agregar(estudiantee, carnett, examenn, tareass, asistenciaa, investigacionn, notaFinal);
    

    }
    function agregar(estudiante, carnet, examen, tareas, asistencia, investigacion, final){
        let tabla = document.querySelector(".table");
        tabla.innerHTML = `
        <tr>
        <td>${estudiante}</td>
        <td>${carnet}</td>
        <td>${examen}</td>
        <td>${tareas}</td>
        <td>${asistencia}</td>
        <td>${investigacion}</td>
        <td>${final}</td>
        </tr>
        `
    }

    //ejercicio 3

    const nombre = document.querySelector(".name");
    const salarioo = document.querySelector(".salario");
    const categoria = document.querySelector(".categ");
    const btnSala = document.querySelector(".btnCalS");

    btnSala.addEventListener("click", salario);

    function salario (e){
        e.preventDefault();
        eliminarcard();
        let namesito = nombre.value;
        let salarioAntes = parseInt(salarioo.value);
        let opcion = categoria.value;

        switch(opcion){
            case "A 15%":
                let nuevoSalar = salarioAntes+salarioAntes*0.15;
                mostrarSalario(namesito, salarioAntes, nuevoSalar, e.target.parentElement);

                break;
            
            case "B 30%":
                let nuevoSalar2 = salarioAntes+salarioAntes*0.30;
                mostrarSalario(namesito, salarioAntes, nuevoSalar2, e.target.parentElement);
            
                break;
            
            case "C 10%":
                let nuevoSalar3 = salarioAntes+salarioAntes*0.10;
                mostrarSalario(namesito, salarioAntes, nuevoSalar3, e.target.parentElement);   

                break;
            case "D 20%":   
            let nuevoSalar4 = salarioAntes+salarioAntes*0.20;
            mostrarSalario(namesito, salarioAntes, nuevoSalar4, e.target.parentElement); 


        }


    }

    function mostrarSalario(name, salarioA, salarioN, referencia){
        let sectionsita = document.createElement("SECTION");
        sectionsita.classList.add("quitar");
        let mensajitoo = document.createElement("P");
        mensajitoo.textContent = `${name}, su anterior salario era $${salarioA}, su nuevo salario con aumento es $${salarioN} `
        sectionsita.appendChild(mensajitoo);
        referencia.appendChild(sectionsita);
        
    }


    //Ejercicio 4

    const num1 = document.querySelector(".numero1");
    const num2 = document.querySelector(".numero2");
    const btn2 = document.querySelector(".btn2");

    btn2.addEventListener("click", comprobar);

    function comprobar(e){
        e.preventDefault();
        elminarMensaje();
        let nume1 = num1.value;
        let nume2 = num2.value;
        if(nume1 > nume2){
            agregar2(nume1, nume2, "mayor", e.target.parentElement);
        } else if(nume1 < nume2){
            agregar2(nume1, nume2, "menor", e.target.parentElement);
        } else{
            agregar2(nume1, nume2, "igual que", e.target.parentElement);

        }


    }

    function agregar2(numero1, numero2,mensaje, referencia){
        let mensajito = document.createElement("P");
        mensajito.textContent = `${numero1} es ${mensaje} que ${numero2} `
        mensajito.classList.add("mensaje");
        referencia.appendChild(mensajito);
    }


 //ejercicio 5
 const select = document.querySelector(".select1");
 const btn3 = document.querySelector(".btn3");
 btn3.addEventListener("click", comprobar2);
 function comprobar2(e){
    e.preventDefault();
    eliminarcard();
    let opcion = select.value;
    switch(opcion){
        case "Ford Fiesta": 
        let precioo = 30000;
        let totalito = precioo - (precioo*0.05);
        agregar3(precioo, totalito, "assets/img/fordFiesta.jpeg", e.target.parentElement);

        break;

        case "Ford Focus": 
        let precioo2 = 40000;
        let totalito2 = precioo2 - (precioo2*0.10);
        agregar3(precioo2, totalito2, "assets/img/fordFocus.jpeg", e.target.parentElement);

        break;

        case "Ford Escape": 
        let precioo3 = 25000;
        let totalito3 = precioo3 - (precioo3*0.20);
        agregar3(precioo3, totalito3, "assets/img/fordEscape.jpeg", e.target.parentElement);
    }
 }

 function agregar3(price, totall, image, referencia){
    let precio = document.createElement("P");
    precio.textContent = `El precio es  $${price}`;
    let total = document.createElement("P");
    total.textContent = `El total con descuento es $${totall}`;
    let img = document.createElement("IMG");
    img.src = `${image}`;
    let card = document.createElement("SECTION");
    card.classList.add("quitar");
    card.appendChild(precio);
    card.appendChild(total);
    card.appendChild(img);
    referencia.appendChild(card);
 }

 function eliminarcard(){
    let cardsito = document.querySelector(".quitar");
    if(cardsito){
        cardsito.remove();
        return;
    }
}

//ejercicio 6
const select2 = document.querySelector(".select2");
const btn4 = document.querySelector(".btn4");
btn4.addEventListener("click", comprobar3);

function comprobar3(e){
    e.preventDefault();
    eliminarcard();
    let opcion = select2.value;
    switch(opcion){
        case "La costa del Sol": 
        let precioo = 30;
        let descuento = 0.05;
        let totalito = precioo - (precioo*descuento);
        adicionar(precioo, descuento, totalito);

        break;

        case "Panchimalco": 
        let precioo2 = 25;
        let descuento2 = 0.10;
        let totalito2 = precioo2 - (precioo2*descuento2);
        adicionar(precioo2, descuento2, totalito2);

        

        break;

        case "Puerto El triunfo": 
        let precioo3 = 20;
        let descuento3 = 0.15;
        let totalito3 = precioo3 - (precioo3*descuento3);
        adicionar(precioo3, descuento3, totalito3);

        
    }
 }


 function adicionar (precio, descuento, total){
    let data = document.querySelector(".data");
    data.innerHTML = `
    <section class = "quitar">
    <p>El precio es $${precio}, y su descuento es del ${descuento}%</p>
    <p>El total a pagar es $${total} que pase un buen viaje!</p> 
    </section>
    
    `;
    
 }

 //Ejercicio 7
 const numer = document.querySelector(".numer");
 const btnAdd = document.querySelector(".btnAdd");
 const btnConocer = document.querySelector(".btnConocer");
 const anding = document.querySelector(".tbody2");
 let numeros = [];
 btnAdd.addEventListener("click", añadir);
 btnConocer.addEventListener("click", conocer);

 function añadir(e){
    e.preventDefault();
    let numA = numer.value 
    numeros.push(numA);
    mostrarN(numA);
   
 }


 function mostrarN(num){
    let fila = document.createElement("TR");
    let celda = document.createElement("TD");
    celda.textContent = num;
    fila.appendChild(celda);
    anding.appendChild(fila);
 }

 function conocer(e){
    e.preventDefault();
   let negativos =  numeros.filter(negat => negat <1);
   let cantNeg = negativos.length;
   let positivos = numeros.filter(posi => posi >= 1);
   let cantPosi = positivos.length;
   let m15 = numeros.filter(mul15=> mul15%15 == 0);
   let cantM15 = m15.length;
   mostrarR(cantNeg, cantPosi, cantM15, e.target.parentElement);

    
 }

 function mostrarR(neg, posiv, quince, referencia){
    let cardt = document.createElement("SECTION");
    let parr1 = document.createElement("P");
    let parr2 = document.createElement("P");
    let parr3 = document.createElement("P");
    parr1.textContent = `La cantidad de numeros negativos ingresados fueron: ${neg} `;
    parr2.textContent = `La cantidad de numeros positivos ingresados fueron: ${posiv} `;
    parr3.textContent = `La cantidad de numeros multiplos de 15 ingresados fueron: ${quince} `;

    cardt.appendChild(parr1);
    cardt.appendChild(parr2);
    cardt.appendChild(parr3);
    referencia.appendChild(cardt);
    
 }

 
 






//  //ejercicio 8
  const numerT = document.querySelector(".numerT");
  const btnT = document.querySelector(".btnTabla");
  const encabezadoT = document.querySelector(".encabezadoT");
  const tbody3 = document.querySelector(".tbody3");
  btnT.addEventListener("click", tablaM);
  function tablaM(e){
     e.preventDefault();
     elimin();
     let num = numerT.value;
     tablaDel(num)
     for(let i=1; i<11; i++){
         let result = num*i;
         verTabla(num, i, result);
     }

  }
function verTabla(num, numP,result){
    let fila = document.createElement("TR");
    fila.classList.add("elimin");
    let celda = document.createElement("TD");
    celda.textContent = `${num} x ${numP} = ${result}`;
    fila.appendChild(celda);
    tbody3.appendChild(fila);


}

function tablaDel (num){
    let encabezado = document.createElement("H4");
    encabezado.classList.add("elimin");
    encabezado.textContent = `Tabla del ${num}`;
    encabezadoT.appendChild(encabezado);
}

function elimin(){
    tbody3.innerHTML = "";
    encabezadoT.innerHTML = "";
    
}


 //ejercicio 9
 const grados = document.querySelector(".grados");
 const btnC = document.querySelector(".btnC");

 btnC.addEventListener("click", calcular);

 function calcular(e){
    e.preventDefault();
    elminarMensaje();
    let gradoC = grados.value;
    let gradosF = (gradoC*(9/5))+32;
    if(gradosF >= 14 && gradosF <=32){
        temperatura(gradoC, gradosF, "Temperatura baja", e.target.parentElement);
    } else if(gradosF >32 && gradosF <= 68){
        temperatura(gradoC, gradosF, "Temperatura adecuada", e.target.parentElement);
    } else if(gradosF > 68 && gradosF<= 96){
        temperatura(gradoC, gradosF, "Temperatura alta", e.target.parentElement);
    } else{
        temperatura(gradoC, gradosF, "Temperatura desconocida", e.target.parentElement);
    }
 }

 function temperatura(gradosC, gradosf, temp, referencia){
    let mensj = document.createElement("P");
    mensj.textContent = `${gradosC}°C es igual a ${gradosf}°F, ${temp} `;
    mensj.classList.add("mensaje");
    referencia.appendChild(mensj);
 }

 //Ejercicio 10
const inp1 = document.querySelector("#In1");
const tb1 = document.querySelector(".tb1");
const btnM = document.querySelector(".btnMa");

const inp2 = document.querySelector("#In2");
const tb2 = document.querySelector(".tb2");
const btnTar = document.querySelector(".btnTar");

const inp3 = document.querySelector("#In3");
const tb3 = document.querySelector(".tb3");
const btnNo = document.querySelector(".btnNo");

const btnCalcular = document.querySelector(".btnCalcular");
const result = document.querySelector(".result");


let numeros1 = [];
let numeros2 = [];
let numeros3 = [];

let suma1 = 0;
let suma2 = 0;
let suma3 = 0;



btnM.addEventListener("click", añadirT1);
btnTar.addEventListener("click", añadirT2);
btnNo.addEventListener("click", añadirT3);
btnCalcular.addEventListener("click", promediar);




 function añadirT1(e){
    e.preventDefault();
    let num1 = parseInt(inp1.value); 
    numeros1.push(num1);
    mostrarEd(num1, tb1);
    suma1 += num1;
    
 }



 function añadirT2(e){
    e.preventDefault();
    let num2 = parseInt(inp2.value); 
    numeros2.push(num2);
    mostrarEd(num2, tb2);
    suma2 += num2;
    

 }
 function añadirT3(e){
    e.preventDefault();
    let num3 = parseInt(inp3.value); 
    numeros3.push(num3);
    mostrarEd(num3, tb3);
    suma3 += num3;

 }


 function mostrarEd(num, tbody){
    let fila = document.createElement("TR");
    let celda = document.createElement("TD");
    celda.textContent = num;
    fila.appendChild(celda);
    tbody.appendChild(fila);
 }

 function promediar(e){
    e.preventDefault();
    let Prom1 = suma1/numeros1.length;
    let Prom2 = suma2/numeros2.length;
    let Prom3 = suma3/numeros3.length;

    let prom = document.createElement("P");
    prom.classList.add("mensaje");
    prom.textContent = `Promedios: Mañana: ${Prom1}, Tarde:${Prom2}, Noche: ${Prom3}`;
    
    let mensajee = document.createElement("P");
    mensajee.classList.add("mensaje");
    if (Prom1> Prom2 && Prom1> Prom3){
        mensajee.textContent = `${Prom1} es el promedio mayor`;
    } else if(Prom2 > Prom1 && Prom2> Prom3){
        mensajee.textContent = `${Prom2} es el promedio mayor`
    } else if(Prom3 > Prom1 && Prom3 >Prom2){
        mensajee.textContent = `${Prom3} es el promedio mayor`

    } else{
        mensajee.textContent = `Los Promedios son iguales o no lleno las 3 tablas`
    }
    result.parentElement.appendChild(prom);
    result.parentElement.appendChild(mensajee);
 }

