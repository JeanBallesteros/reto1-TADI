
/* Arrays contenedores */
const imgArray1 = [
    {value: parseInt(document.getElementById("1").value), img: 'img/1.png'},
    {value: parseInt(document.getElementById("2").value), img: 'img/2.png'},
    {value: parseInt(document.getElementById("3").value), img: 'img/3.png'},
    {value: parseInt(document.getElementById("4").value), img: 'img/4.png'},
    {value: parseInt(document.getElementById("5").value), img: 'img/5.png'},
    {value: parseInt(document.getElementById("6").value), img: 'img/6.png'}
];

const imgArray2 = [
    {value: parseInt(document.getElementById("1").value), img: 'img/11.jpg'},
    {value: parseInt(document.getElementById("2").value), img: 'img/22.jpg'},
    {value: parseInt(document.getElementById("3").value), img: 'img/33.jpg'},
    {value: parseInt(document.getElementById("4").value), img: 'img/44.jpg'},
    {value: parseInt(document.getElementById("5").value), img: 'img/55.jpg'},
    {value: parseInt(document.getElementById("6").value), img: 'img/66.jpg'}
    
];

const imgArray3 = [
    {value: parseInt(document.getElementById("1").value), img: 'img/111.jpeg'},
    {value: parseInt(document.getElementById("2").value), img: 'img/222.jpeg'},
    {value: parseInt(document.getElementById("3").value), img: 'img/333.jpg'},
    {value: parseInt(document.getElementById("4").value), img: 'img/444.jpg'},
    {value: parseInt(document.getElementById("5").value), img: 'img/555.jpg'},
    {value: parseInt(document.getElementById("6").value), img: 'img/666.jpg'}
    
]; 
if(imgArray3[0].value === 23){
    console.log("HOALJSSJJDBBDBDHIDHHI");
}


function imagenesSeleccionadas(){
    var arrayTemp = [];

    for (let i = 0; i < imgArray3.length; i++) {
        if(document.getElementById("1").checked == true){
            arrayTemp.push(parseInt(document.getElementById("1")).value);
    
        }else if(imgArray1[i].value === parseInt(document.getElementById("1").value)){
            arrayTemp.splice(i,1);
        }
    
        if(document.getElementById("2").checked == true){
            arrayTemp.push(parseInt(document.getElementById("2")).value);
    
        }else if(imgArray1[i].value === parseInt(document.getElementById("2").value)){
            arrayTemp.splice(i,1);
        }
    
        if(document.getElementById("3").checked == true){
            arrayTemp.push(parseInt(document.getElementById("3")).value);
    
        }else if(imgArray1[i].value === parseInt(document.getElementById("3").value)){
            arrayTemp.splice(i,1);
        }
    
        if(document.getElementById("4").checked == true){
            arrayTemp.push(parseInt(document.getElementById("4")).value);
    
        }else if(imgArray1[i].value === parseInt(document.getElementById("4").value)){
            arrayTemp.splice(i,1);
        }
    
        if(document.getElementById("5").checked == true){
            arrayTemp.push(parseInt(document.getElementById("5")).value);
    
        }else if(imgArray1[i].value === parseInt(document.getElementById("5").value)){
            arrayTemp.splice(i,1);
        }
    
        if(document.getElementById("6").checked == true){
            arrayTemp.push(parseInt(document.getElementById("6")).value);
    
        }else if(imgArray1[i].value === parseInt(document.getElementById("6").value)){
            arrayTemp.splice(i,1);
        }
    }

    console.log(arrayTemp);

    return arrayTemp;
}

/* Arrays contenedores */
/* const imgArray1 = [
    {value: getRandom(-500, 500), img: 'img/1.png'},
    {value: getRandom(-500, 500), img: 'img/2.png'},
    {value: getRandom(-500, 500), img: 'img/3.png'},
    {value: getRandom(-500, 500), img: 'img/4.png'},
    {value: getRandom(-500, 500), img: 'img/5.png'},
    {value: getRandom(-500, 500), img: 'img/6.png'}
];

const imgArray2 = [
    {value: getRandom(-500, 500), img: 'img/11.jpg'},
    {value: getRandom(-500, 500), img: 'img/22.jpg'},
    {value: getRandom(-500, 500), img: 'img/33.jpg'},
    {value: getRandom(-500, 500), img: 'img/44.jpg'},
    {value: getRandom(-500, 500), img: 'img/55.jpg'},
    {value: getRandom(-500, 500), img: 'img/66.jpg'}
    
];

const imgArray3 = [
    {value: getRandom(-500, 500), img: 'img/111.jpeg'},
    {value: getRandom(-500, 500), img: 'img/222.jpeg'},
    {value: getRandom(-500, 500), img: 'img/333.jpg'},
    {value: getRandom(-500, 500), img: 'img/444.jpg'},
    {value: getRandom(-500, 500), img: 'img/555.jpg'},
    {value: getRandom(-500, 500), img: 'img/666.jpg'}
    
]; */

function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
}

/* Mapeos con values e imagenes */
const imagesArrayValues1 = imgArray1.map((i) => i.value);
const imagesArrayValues2 = imgArray2.map((i) => i.value);
const imagesArrayValues3 = imgArray3.map((i) => i.value);

const imagesArray1 = imgArray1.map((i) => i.img);
const imagesArray2 = imgArray2.map((i) => i.img);
const imagesArray3 = imgArray3.map((i) => i.img);


/* Cambiar imágenes según el change del select*/
function cambiarImagenes(){
    if(document.getElementById("imgSelect").value == 1){
        document.getElementById("img1").src=imagesArray1[0];
        document.getElementById("img2").src=imagesArray1[1];
        document.getElementById("img3").src=imagesArray1[2];
        document.getElementById("img4").src=imagesArray1[3];
        document.getElementById("img5").src=imagesArray1[4];
        document.getElementById("img6").src=imagesArray1[5];
    }else if(document.getElementById("imgSelect").value == 2){
        document.getElementById("img1").src=imagesArray2[0];
        document.getElementById("img2").src=imagesArray2[1];
        document.getElementById("img3").src=imagesArray2[2];
        document.getElementById("img4").src=imagesArray2[3];
        document.getElementById("img5").src=imagesArray2[4];
        document.getElementById("img6").src=imagesArray2[5];
    }else if(document.getElementById("imgSelect").value == 3){
        document.getElementById("img1").src=imagesArray3[0];
        document.getElementById("img2").src=imagesArray3[1];
        document.getElementById("img3").src=imagesArray3[2];
        document.getElementById("img4").src=imagesArray3[3];
        document.getElementById("img5").src=imagesArray3[4];
        document.getElementById("img6").src=imagesArray3[5];
    }
}

/* Su estructura contiene bucles anidado
 Bucle exterior: Recorre cada uno de los elementos
 Bucle interno: Los compara enttre sí */
function algoritmoBurbujaAsc(imgArray1, imgArray2, imgArray3, imagesArrayValues1, imagesArrayValues2, imagesArrayValues3, imagesArray1, imagesArray2, imagesArray3) {

    /* BURBUJA ASC CON PRIMER GRUPO DE IMÁGENES */
    if(document.getElementById("imgSelect").value == 1){
        /* Bucle exterior */
        for(let i=0; i<imagesArrayValues1.length; i++){
            /* Bucle interior que realiza la comparación de valores de las posiciones */
            for(let j=0; j<imagesArrayValues1.length-1-i; j++){
                /* if(condicion){true;false} */
                /* (condicion)? true:false; -----> Operador condicional ternario*/
                /* (imagesArrayValues1[j] > imagesArrayValues1[j + 1]) ? [imagesArrayValues1[j], imagesArrayValues1[j + 1]] = [imagesArrayValues1[j+1], imagesArrayValues1[j]] : ''; */

                if (imagesArrayValues1[j] > imagesArrayValues1[j + 1]) {
                    [imagesArrayValues1[j], imagesArrayValues1[j + 1]] = [imagesArrayValues1[j+1], imagesArrayValues1[j]];


                    [imagesArray1[j], imagesArray1[j + 1]] = [imagesArray1[j+1], imagesArray1[j]];

                    [imgArray1[j], imgArray1[j + 1]] = [imgArray1[j+1], imgArray1[j]];
                }

               /*  let aux2 = imagesArray1[j];
                imagesArray1[j] = imagesArray1[j+1];
                imagesArray1[j+1] = aux2;

                let aux3 = imgArray1[j];
                imgArray1[j] = imgArray1[j+1];
                imgArray1[j+1] = aux3; */
            }
        }

        document.getElementById("img11").src=imagesArray1[0];
        document.getElementById("img22").src=imagesArray1[1];
        document.getElementById("img33").src=imagesArray1[2];
        document.getElementById("img44").src=imagesArray1[3];
        document.getElementById("img55").src=imagesArray1[4];
        document.getElementById("img66").src=imagesArray1[5];

        return imagesArrayValues1, imagesArray1, imgArray1;

    /* BURBUJA ASC CON SEGUNDO GRUPO DE IMÁGENES */
    }else if(document.getElementById("imgSelect").value == 2){
        /* Bucle exterior */
        for(let i=0; i<imagesArrayValues2.length; i++){
            /* Bucle interior que realiza la comparación de valores de las posiciones */
            for(let j=0; j<imagesArrayValues2.length-1-i; j++){
                /* if(condicion){true;false} */
                /* (condicion)? true:false; -----> 
                
                Operador condicional ternario*/
                /* (imagesArrayValues2[j] > imagesArrayValues2[j + 1]) ? [imagesArrayValues2[j], imagesArrayValues2[j + 1]] = [imagesArrayValues2[j+1], imagesArrayValues2[j]] : ''; */

                if (imagesArrayValues2[j] > imagesArrayValues2[j + 1]) {
                    [imagesArrayValues2[j], imagesArrayValues2[j + 1]] = [imagesArrayValues2[j+1], imagesArrayValues2[j]];


                    [imagesArray2[j], imagesArray2[j + 1]] = [imagesArray2[j+1], imagesArray2[j]];

                    [imgArray2[j], imgArray2[j + 1]] = [imgArray2[j+1], imgArray2[j]];
                }
            }
        }

        document.getElementById("img11").src=imagesArray2[0];
        document.getElementById("img22").src=imagesArray2[1];
        document.getElementById("img33").src=imagesArray2[2];
        document.getElementById("img44").src=imagesArray2[3];
        document.getElementById("img55").src=imagesArray2[4];
        document.getElementById("img66").src=imagesArray2[5];

        return imagesArrayValues2, imagesArray2, imgArray2;
    
    /* BURBUJA ASC CON TERCER GRUPO DE IMÁGENES */
    }else{
        /* Bucle exterior */
        for(let i=0; i<imagesArrayValues3.length; i++){
            /* Bucle interior que realiza la comparación de valores de las posiciones */
            for(let j=0; j<imagesArrayValues3.length-1-i; j++){
                /* if(condicion){true;false} */
                /* (condicion)? true:false; -----> 
                
                Operador condicional ternario*/
                /* (imagesArrayValues3[j] > imagesArrayValues3[j + 1]) ? [imagesArrayValues3[j], imagesArrayValues3[j + 1]] = [imagesArrayValues3[j+1], imagesArrayValues3[j]] : ''; */

                if (imagesArrayValues3[j] > imagesArrayValues3[j + 1]) {
                    [imagesArrayValues3[j], imagesArrayValues3[j + 1]] = [imagesArrayValues3[j+1], imagesArrayValues3[j]];


                    [imagesArray3[j], imagesArray3[j + 1]] = [imagesArray3[j+1], imagesArray3[j]];

                    [imgArray3[j], imgArray3[j + 1]] = [imgArray3[j+1], imgArray3[j]];
                }
            }
        }

        document.getElementById("img11").src=imagesArray3[0];
        document.getElementById("img22").src=imagesArray3[1];
        document.getElementById("img33").src=imagesArray3[2];
        document.getElementById("img44").src=imagesArray3[3];
        document.getElementById("img55").src=imagesArray3[4];
        document.getElementById("img66").src=imagesArray3[5];

        return imagesArrayValues3, imagesArray3, imgArray3;
    } 
}

function algoritmoBurbujaDesc() {
    /* BURBUJA DESC CON PRIMER GRUPO DE IMÁGENES */
    if(document.getElementById("imgSelect").value == 1){
        /* Bucle exterior */
        for(let i=0; i<imagesArrayValues1.length; i++){
            /* Bucle interior que realiza la comparación de valores de las posiciones */
            for(let j=0; j<imagesArrayValues1.length-1-i; j++){
                /* if(condicion){true;false} */
                /* (condicion)? true:false; -----> Operador condicional ternario*/
                /* (imagesArrayValues1[j] > imagesArrayValues1[j + 1]) ? [imagesArrayValues1[j], imagesArrayValues1[j + 1]] = [imagesArrayValues1[j+1], imagesArrayValues1[j]] : ''; */

                if (imagesArrayValues1[j] < imagesArrayValues1[j + 1]) {
                    [imagesArrayValues1[j], imagesArrayValues1[j + 1]] = [imagesArrayValues1[j+1], imagesArrayValues1[j]];


                    [imagesArray1[j], imagesArray1[j + 1]] = [imagesArray1[j+1], imagesArray1[j]];

                    [imgArray1[j], imgArray1[j + 1]] = [imgArray1[j+1], imgArray1[j]];
                }

               /*  let aux2 = imagesArray1[j];
                imagesArray1[j] = imagesArray1[j+1];
                imagesArray1[j+1] = aux2;

                let aux3 = imgArray1[j];
                imgArray1[j] = imgArray1[j+1];
                imgArray1[j+1] = aux3; */
            }
        }

        document.getElementById("img11").src=imagesArray1[0];
        document.getElementById("img22").src=imagesArray1[1];
        document.getElementById("img33").src=imagesArray1[2];
        document.getElementById("img44").src=imagesArray1[3];
        document.getElementById("img55").src=imagesArray1[4];
        document.getElementById("img66").src=imagesArray1[5];

        return imagesArrayValues1, imagesArray1, imgArray1;

    /* BURBUJA DESC CON SEGUNDO GRUPO DE IMÁGENES */
    }else if(document.getElementById("imgSelect").value == 2){
        /* Bucle exterior */
        for(let i=0; i<imagesArrayValues2.length; i++){
            /* Bucle interior que realiza la comparación de valores de las posiciones */
            for(let j=0; j<imagesArrayValues2.length-1-i; j++){
                /* if(condicion){true;false} */
                /* (condicion)? true:false; -----> 
                
                Operador condicional ternario*/
                /* (imagesArrayValues2[j] > imagesArrayValues2[j + 1]) ? [imagesArrayValues2[j], imagesArrayValues2[j + 1]] = [imagesArrayValues2[j+1], imagesArrayValues2[j]] : ''; */

                if (imagesArrayValues2[j] < imagesArrayValues2[j + 1]) {
                    [imagesArrayValues2[j], imagesArrayValues2[j + 1]] = [imagesArrayValues2[j+1], imagesArrayValues2[j]];


                    [imagesArray2[j], imagesArray2[j + 1]] = [imagesArray2[j+1], imagesArray2[j]];

                    [imgArray2[j], imgArray2[j + 1]] = [imgArray2[j+1], imgArray2[j]];
                }
            }
        }

        document.getElementById("img11").src=imagesArray2[0];
        document.getElementById("img22").src=imagesArray2[1];
        document.getElementById("img33").src=imagesArray2[2];
        document.getElementById("img44").src=imagesArray2[3];
        document.getElementById("img55").src=imagesArray2[4];
        document.getElementById("img66").src=imagesArray2[5];

        return imagesArrayValues2, imagesArray2, imgArray2;
    
    /* BURBUJA DESC CON TERCER GRUPO DE IMÁGENES */
    }else{
        /* Bucle exterior */
        for(let i=0; i<imagesArrayValues3.length; i++){
            /* Bucle interior que realiza la comparación de valores de las posiciones */
            for(let j=0; j<imagesArrayValues3.length-1-i; j++){
                /* if(condicion){true;false} */
                /* (condicion)? true:false; -----> 
                
                Operador condicional ternario*/
                /* (imagesArrayValues3[j] > imagesArrayValues3[j + 1]) ? [imagesArrayValues3[j], imagesArrayValues3[j + 1]] = [imagesArrayValues3[j+1], imagesArrayValues3[j]] : ''; */

                if (imagesArrayValues3[j] < imagesArrayValues3[j + 1]) {
                    [imagesArrayValues3[j], imagesArrayValues3[j + 1]] = [imagesArrayValues3[j+1], imagesArrayValues3[j]];


                    [imagesArray3[j], imagesArray3[j + 1]] = [imagesArray3[j+1], imagesArray3[j]];

                    [imgArray3[j], imgArray3[j + 1]] = [imgArray3[j+1], imgArray3[j]];
                }
            }
        }

        document.getElementById("img11").src=imagesArray3[0];
        document.getElementById("img22").src=imagesArray3[1];
        document.getElementById("img33").src=imagesArray3[2];
        document.getElementById("img44").src=imagesArray3[3];
        document.getElementById("img55").src=imagesArray3[4];
        document.getElementById("img66").src=imagesArray3[5];

        return imagesArrayValues3, imagesArray3, imgArray3;
    } 
}

function algoritmoSeleccionAsc(imgArray1, imgArray2, imgArray3, imagesArrayValues1, imagesArrayValues2, imagesArrayValues3, imagesArray1, imagesArray2, imagesArray3) {
    /* Recorre todo el array buscando el elemento de menor valor. Una vez encuentra el elemento de menor valor lo intercambia con el de la primero posición. Y así se continúa con el otro elemento buscando el menor. */

    if(document.getElementById("imgSelect").value == 1){

        /* Bucle exterior */
        for (let i = 0; i < imagesArrayValues1.length; i++) {
            let j = elementoMenorValor = i;
            /* No inicia en la posición 0 si no en la siguiente */
            for (j++; j< imagesArrayValues1.length; j++){
                /* i++ o ++i

                i++ POSTFIX
                    let num = 2;
                    numSig = num++

                console: 3
                ---------
                ++i PREFIX
                    let num=2;
                    numSig = ++num;
                    console: 3 */
                
                /* 344,122 */
                (imagesArrayValues1[j] < imagesArrayValues1[elementoMenorValor]) && (elementoMenorValor = j);
            }
            [imagesArrayValues1[i], imagesArrayValues1[elementoMenorValor]] = [imagesArrayValues1[elementoMenorValor], imagesArrayValues1[i]];

            [imagesArray1[i], imagesArray1[elementoMenorValor]] = [imagesArray1[elementoMenorValor], imagesArray1[i]];

            [imgArray1[i], imgArray1[elementoMenorValor]] = [imgArray1[elementoMenorValor], imgArray1[i]];
        }

        document.getElementById("img11").src=imagesArray1[0];
        document.getElementById("img22").src=imagesArray1[1];
        document.getElementById("img33").src=imagesArray1[2];
        document.getElementById("img44").src=imagesArray1[3];
        document.getElementById("img55").src=imagesArray1[4];
        document.getElementById("img66").src=imagesArray1[5];

        return imagesArrayValues1, imagesArray1, imgArray1;
        
    }else if(document.getElementById("imgSelect").value == 2){

        /* Bucle exterior */
        for (let i = 0; i < imagesArrayValues2.length; i++) {
            let j = elementoMenorValor = i;
            /* No inicia en la posición 0 si no en la siguiente */
            for (j++; j< imagesArrayValues2.length; j++){
                /* i++ o ++i

                i++ POSTFIX
                    let num = 2;
                    numSig = num++

                console: 3
                ---------
                ++i PREFIX
                    let num=2;
                    numSig = ++num;
                    console: 3 */
                
                /* 344,122 */
                (imagesArrayValues2[j] < imagesArrayValues2[elementoMenorValor]) && (elementoMenorValor = j);
            }
            [imagesArrayValues2[i], imagesArrayValues2[elementoMenorValor]] = [imagesArrayValues2[elementoMenorValor], imagesArrayValues2[i]];

            [imagesArray2[i], imagesArray2[elementoMenorValor]] = [imagesArray2[elementoMenorValor], imagesArray2[i]];

            [imgArray2[i], imgArray2[elementoMenorValor]] = [imgArray2[elementoMenorValor], imgArray2[i]];
        }

        document.getElementById("img11").src=imagesArray2[0];
        document.getElementById("img22").src=imagesArray2[1];
        document.getElementById("img33").src=imagesArray2[2];
        document.getElementById("img44").src=imagesArray2[3];
        document.getElementById("img55").src=imagesArray2[4];
        document.getElementById("img66").src=imagesArray2[5];

        return imagesArrayValues2, imagesArray2, imgArray2;
        
    }else{
        /* Bucle exterior */
        for (let i = 0; i < imagesArrayValues3.length; i++) {
            let j = elementoMenorValor = i;
            /* No inicia en la posición 0 si no en la siguiente */
            for (j++; j< imagesArrayValues3.length; j++){
                /* i++ o ++i

                i++ POSTFIX
                    let num = 2;
                    numSig = num++

                console: 3
                ---------
                ++i PREFIX
                    let num=2;
                    numSig = ++num;
                    console: 3 */
                
                /* 344,122 */
                (imagesArrayValues3[j] < imagesArrayValues3[elementoMenorValor]) && (elementoMenorValor = j);
            }
            [imagesArrayValues3[i], imagesArrayValues3[elementoMenorValor]] = [imagesArrayValues3[elementoMenorValor], imagesArrayValues3[i]];

            [imagesArray3[i], imagesArray3[elementoMenorValor]] = [imagesArray3[elementoMenorValor], imagesArray3[i]];

            [imgArray3[i], imgArray3[elementoMenorValor]] = [imgArray3[elementoMenorValor], imgArray3[i]];
        }

        document.getElementById("img11").src=imagesArray3[0];
        document.getElementById("img22").src=imagesArray3[1];
        document.getElementById("img33").src=imagesArray3[2];
        document.getElementById("img44").src=imagesArray3[3];
        document.getElementById("img55").src=imagesArray3[4];
        document.getElementById("img66").src=imagesArray3[5];

        return imagesArrayValues3, imagesArray3, imgArray3;
    }
}
//console.log("Ordenamiento selección ascendente: "+algoritmoSeleccionAsc());

function algoritmoSeleccionDesc(imgArray1, imgArray2, imgArray3, imagesArrayValues1, imagesArrayValues2, imagesArrayValues3, imagesArray1, imagesArray2, imagesArray3) {
    /* Recorre todo el array buscando el elemento de menor valor. Una vez encuentra el elemento de menor valor lo intercambia con el de la primero posición. Y así se continúa con el otro elemento buscando el menor. */

    if(document.getElementById("imgSelect").value == 1){

        /* Bucle exterior */
        for (let i = 0; i < imagesArrayValues1.length; i++) {
            let j = elementoMenorValor = i;
            /* No inicia en la posición 0 si no en la siguiente */
            for (j++; j< imagesArrayValues1.length; j++){
                /* i++ o ++i

                i++ POSTFIX
                    let num = 2;
                    numSig = num++

                console: 3
                ---------
                ++i PREFIX
                    let num=2;
                    numSig = ++num;
                    console: 3 */
                
                /* 344,122 */
                (imagesArrayValues1[j] > imagesArrayValues1[elementoMenorValor]) && (elementoMenorValor = j);
            }
            [imagesArrayValues1[i], imagesArrayValues1[elementoMenorValor]] = [imagesArrayValues1[elementoMenorValor], imagesArrayValues1[i]];

            [imagesArray1[i], imagesArray1[elementoMenorValor]] = [imagesArray1[elementoMenorValor], imagesArray1[i]];

            [imgArray1[i], imgArray1[elementoMenorValor]] = [imgArray1[elementoMenorValor], imgArray1[i]];
        }

        document.getElementById("img11").src=imagesArray1[0];
        document.getElementById("img22").src=imagesArray1[1];
        document.getElementById("img33").src=imagesArray1[2];
        document.getElementById("img44").src=imagesArray1[3];
        document.getElementById("img55").src=imagesArray1[4];
        document.getElementById("img66").src=imagesArray1[5];

        return imagesArrayValues1, imagesArray1, imgArray1;
        
    }else if(document.getElementById("imgSelect").value == 2){

        /* Bucle exterior */
        for (let i = 0; i < imagesArrayValues2.length; i++) {
            let j = elementoMenorValor = i;
            /* No inicia en la posición 0 si no en la siguiente */
            for (j++; j< imagesArrayValues2.length; j++){
                /* i++ o ++i

                i++ POSTFIX
                    let num = 2;
                    numSig = num++

                console: 3
                ---------
                ++i PREFIX
                    let num=2;
                    numSig = ++num;
                    console: 3 */
                
                /* 344,122 */
                (imagesArrayValues2[j] > imagesArrayValues2[elementoMenorValor]) && (elementoMenorValor = j);
            }
            [imagesArrayValues2[i], imagesArrayValues2[elementoMenorValor]] = [imagesArrayValues2[elementoMenorValor], imagesArrayValues2[i]];

            [imagesArray2[i], imagesArray2[elementoMenorValor]] = [imagesArray2[elementoMenorValor], imagesArray2[i]];

            [imgArray2[i], imgArray2[elementoMenorValor]] = [imgArray2[elementoMenorValor], imgArray2[i]];
        }

        document.getElementById("img11").src=imagesArray2[0];
        document.getElementById("img22").src=imagesArray2[1];
        document.getElementById("img33").src=imagesArray2[2];
        document.getElementById("img44").src=imagesArray2[3];
        document.getElementById("img55").src=imagesArray2[4];
        document.getElementById("img66").src=imagesArray2[5];

        return imagesArrayValues2, imagesArray2, imgArray2;
        
    }else{
        /* Bucle exterior */
        for (let i = 0; i < imagesArrayValues3.length; i++) {
            let j = elementoMenorValor = i;
            /* No inicia en la posición 0 si no en la siguiente */
            for (j++; j< imagesArrayValues3.length; j++){
                /* i++ o ++i

                i++ POSTFIX
                    let num = 2;
                    numSig = num++

                console: 3
                ---------
                ++i PREFIX
                    let num=2;
                    numSig = ++num;
                    console: 3 */
                
                /* 344,122 */
                (imagesArrayValues3[j] > imagesArrayValues3[elementoMenorValor]) && (elementoMenorValor = j);
            }
            [imagesArrayValues3[i], imagesArrayValues3[elementoMenorValor]] = [imagesArrayValues3[elementoMenorValor], imagesArrayValues3[i]];

            [imagesArray3[i], imagesArray3[elementoMenorValor]] = [imagesArray3[elementoMenorValor], imagesArray3[i]];

            [imgArray3[i], imgArray3[elementoMenorValor]] = [imgArray3[elementoMenorValor], imgArray3[i]];
        }

        document.getElementById("img11").src=imagesArray3[0];
        document.getElementById("img22").src=imagesArray3[1];
        document.getElementById("img33").src=imagesArray3[2];
        document.getElementById("img44").src=imagesArray3[3];
        document.getElementById("img55").src=imagesArray3[4];
        document.getElementById("img66").src=imagesArray3[5];

        return imagesArrayValues3, imagesArray3, imgArray3;
    }
}

function algoritmoInsercionAsc(imgArray1, imgArray2, imgArray3, imagesArrayValues1, imagesArrayValues2, imagesArrayValues3, imagesArray1, imagesArray2, imagesArray3) {

    if(document.getElementById("imgSelect").value == 1){
        let j, temporal, temporal2, temporal3;
        for (let i = 1; i < imagesArrayValues1.length; i++) {
            j=i;
            temporal = imagesArrayValues1[i];

            temporal2 = imagesArray1[i];
            temporal3 = imgArray1[i];
            while((j > 0) && (imagesArrayValues1[j - 1] > temporal)){
                imagesArrayValues1[j] = imagesArrayValues1[j-1];

                imagesArray1[j] = imagesArray1[j-1];
                imgArray1[j] = imgArray1[j-1];

                j--;
            }
            imagesArrayValues1[j] = temporal;

            imagesArray1[j] = temporal2;
            imgArray1[j] = temporal3;
        }

        document.getElementById("img11").src=imagesArray1[0];
        document.getElementById("img22").src=imagesArray1[1];
        document.getElementById("img33").src=imagesArray1[2];
        document.getElementById("img44").src=imagesArray1[3];
        document.getElementById("img55").src=imagesArray1[4];
        document.getElementById("img66").src=imagesArray1[5]; 

        return imagesArrayValues1, imagesArray1, imgArray1;

    }else if(document.getElementById("imgSelect").value == 2){
        let j, temporal, temporal2, temporal3;
        for (let i = 1; i < imagesArrayValues2.length; i++) {
            j=i;
            temporal = imagesArrayValues2[i];

            temporal2 = imagesArray2[i];
            temporal3 = imgArray2[i];
            while((j > 0) && (imagesArrayValues2[j - 1] > temporal)){
                imagesArrayValues2[j] = imagesArrayValues2[j-1];

                imagesArray2[j] = imagesArray2[j-1];
                imgArray2[j] = imgArray2[j-1];

                j--;
            }
            imagesArrayValues2[j] = temporal;

            imagesArray2[j] = temporal2;
            imgArray2[j] = temporal3;
        }

        document.getElementById("img11").src=imagesArray2[0];
        document.getElementById("img22").src=imagesArray2[1];
        document.getElementById("img33").src=imagesArray2[2];
        document.getElementById("img44").src=imagesArray2[3];
        document.getElementById("img55").src=imagesArray2[4];
        document.getElementById("img66").src=imagesArray2[5]; 

        return imagesArrayValues2, imagesArray2, imgArray2;

    }else{
        let j, temporal, temporal2, temporal3;
        for (let i = 1; i < imagesArrayValues3.length; i++) {
            j=i;
            temporal = imagesArrayValues3[i];

            temporal2 = imagesArray3[i];
            temporal3 = imgArray3[i];
            while((j > 0) && (imagesArrayValues3[j - 1] > temporal)){
                imagesArrayValues3[j] = imagesArrayValues3[j-1];

                imagesArray3[j] = imagesArray3[j-1];
                imgArray3[j] = imgArray3[j-1];

                j--;
            }
            imagesArrayValues3[j] = temporal;

            imagesArray3[j] = temporal2;
            imgArray3[j] = temporal3;
        }

        document.getElementById("img11").src=imagesArray3[0];
        document.getElementById("img22").src=imagesArray3[1];
        document.getElementById("img33").src=imagesArray3[2];
        document.getElementById("img44").src=imagesArray3[3];
        document.getElementById("img55").src=imagesArray3[4];
        document.getElementById("img66").src=imagesArray3[5]; 

        return imagesArrayValues3, imagesArray3, imgArray3;
    }
}

function algoritmoInsercionDesc(imgArray1, imgArray2, imgArray3, imagesArrayValues1, imagesArrayValues2, imagesArrayValues3, imagesArray1, imagesArray2, imagesArray3) {

    if(document.getElementById("imgSelect").value == 1){
        let j, temporal, temporal2, temporal3;
        for (let i = 1; i < imagesArrayValues1.length; i++) {
            j=i;
            temporal = imagesArrayValues1[i];

            temporal2 = imagesArray1[i];
            temporal3 = imgArray1[i];
            while((j > 0) && (imagesArrayValues1[j - 1] < temporal)){
                imagesArrayValues1[j] = imagesArrayValues1[j-1];

                imagesArray1[j] = imagesArray1[j-1];
                imgArray1[j] = imgArray1[j-1];

                j--;
            }
            imagesArrayValues1[j] = temporal;

            imagesArray1[j] = temporal2;
            imgArray1[j] = temporal3;
        }

        document.getElementById("img11").src=imagesArray1[0];
        document.getElementById("img22").src=imagesArray1[1];
        document.getElementById("img33").src=imagesArray1[2];
        document.getElementById("img44").src=imagesArray1[3];
        document.getElementById("img55").src=imagesArray1[4];
        document.getElementById("img66").src=imagesArray1[5]; 

        return imagesArrayValues1, imagesArray1, imgArray1;

    }else if(document.getElementById("imgSelect").value == 2){
        let j, temporal, temporal2, temporal3;
        for (let i = 1; i < imagesArrayValues2.length; i++) {
            j=i;
            temporal = imagesArrayValues2[i];

            temporal2 = imagesArray2[i];
            temporal3 = imgArray2[i];
            while((j > 0) && (imagesArrayValues2[j - 1] < temporal)){
                imagesArrayValues2[j] = imagesArrayValues2[j-1];

                imagesArray2[j] = imagesArray2[j-1];
                imgArray2[j] = imgArray2[j-1];

                j--;
            }
            imagesArrayValues2[j] = temporal;

            imagesArray2[j] = temporal2;
            imgArray2[j] = temporal3;
        }

        document.getElementById("img11").src=imagesArray2[0];
        document.getElementById("img22").src=imagesArray2[1];
        document.getElementById("img33").src=imagesArray2[2];
        document.getElementById("img44").src=imagesArray2[3];
        document.getElementById("img55").src=imagesArray2[4];
        document.getElementById("img66").src=imagesArray2[5]; 

        return imagesArrayValues2, imagesArray2, imgArray2;

    }else{
        let j, temporal, temporal2, temporal3;
        for (let i = 1; i < imagesArrayValues3.length; i++) {
            j=i;
            temporal = imagesArrayValues3[i];

            temporal2 = imagesArray3[i];
            temporal3 = imgArray3[i];
            while((j > 0) && (imagesArrayValues3[j - 1] < temporal)){
                imagesArrayValues3[j] = imagesArrayValues3[j-1];

                imagesArray3[j] = imagesArray3[j-1];
                imgArray3[j] = imgArray3[j-1];

                j--;
            }
            imagesArrayValues3[j] = temporal;

            imagesArray3[j] = temporal2;
            imgArray3[j] = temporal3;
        }

        document.getElementById("img11").src=imagesArray3[0];
        document.getElementById("img22").src=imagesArray3[1];
        document.getElementById("img33").src=imagesArray3[2];
        document.getElementById("img44").src=imagesArray3[3];
        document.getElementById("img55").src=imagesArray3[4];
        document.getElementById("img66").src=imagesArray3[5]; 

        return imagesArrayValues3, imagesArray3, imgArray3;
    }
}

function algoritmoShellSortAsc(imagesArrayValues1, imagesArray1, imgArray1, imagesArrayValues2, imagesArray2, imgArray2, imagesArrayValues3, imagesArray3, imgArray3) {
    if(document.getElementById("imgSelect").value == 1){
        let n = imagesArrayValues1.length;
        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
            for (let i = gap; i < n; i += 1)  {
                let temp = imagesArrayValues1[i];
                let temp2 = imagesArray1[i];
                let temp3 = imgArray1[i];
                
                let j;
                for (j = i; j >= gap && imagesArrayValues1[j-gap] > temp; j-=gap)  {
                    imagesArrayValues1[j] = imagesArrayValues1[j-gap];

                    imagesArray1[j] = imagesArray1[j-gap];
                    imgArray1[j] = imgArray1[j-gap];

                }

                imagesArrayValues1[j] = temp;
                imagesArray1[j] = temp2;
                imgArray1[j] = temp3;
            }
        }

        document.getElementById("img11").src=imagesArray1[0];
        document.getElementById("img22").src=imagesArray1[1];
        document.getElementById("img33").src=imagesArray1[2];
        document.getElementById("img44").src=imagesArray1[3];
        document.getElementById("img55").src=imagesArray1[4];
        document.getElementById("img66").src=imagesArray1[5];

        return imagesArrayValues1, imagesArray1, imgArray1;

    }else if(document.getElementById("imgSelect").value == 2){

        let n = imagesArrayValues2.length;
        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
            for (let i = gap; i < n; i += 1)  {
                let temp = imagesArrayValues2[i];
                let temp2 = imagesArray2[i];
                let temp3 = imgArray2[i];
                
                let j;
                for (j = i; j >= gap && imagesArrayValues2[j-gap] > temp; j-=gap)  {
                    imagesArrayValues2[j] = imagesArrayValues2[j-gap];

                    imagesArray2[j] = imagesArray2[j-gap];
                    imgArray2[j] = imgArray2[j-gap];

                }

                imagesArrayValues2[j] = temp;
                imagesArray2[j] = temp2;
                imgArray2[j] = temp3;
            }
        }

        document.getElementById("img11").src=imagesArray2[0];
        document.getElementById("img22").src=imagesArray2[1];
        document.getElementById("img33").src=imagesArray2[2];
        document.getElementById("img44").src=imagesArray2[3];
        document.getElementById("img55").src=imagesArray2[4];
        document.getElementById("img66").src=imagesArray2[5];

        return imagesArrayValues2, imagesArray2, imgArray2;

    }else{
        let n = imagesArrayValues3.length;
        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
            for (let i = gap; i < n; i += 1)  {
                let temp = imagesArrayValues3[i];
                let temp2 = imagesArray3[i];
                let temp3 = imgArray3[i];
                
                let j;
                for (j = i; j >= gap && imagesArrayValues3[j-gap] > temp; j-=gap)  {
                    imagesArrayValues3[j] = imagesArrayValues3[j-gap];

                    imagesArray3[j] = imagesArray3[j-gap];
                    imgArray3[j] = imgArray3[j-gap];

                }

                imagesArrayValues3[j] = temp;
                imagesArray3[j] = temp2;
                imgArray3[j] = temp3;
            }
        }

        document.getElementById("img11").src=imagesArray3[0];
        document.getElementById("img22").src=imagesArray3[1];
        document.getElementById("img33").src=imagesArray3[2];
        document.getElementById("img44").src=imagesArray3[3];
        document.getElementById("img55").src=imagesArray3[4];
        document.getElementById("img66").src=imagesArray3[5];

        return imagesArrayValues3, imagesArray3, imgArray3;
    }
}

function algoritmoShellSortDesc(imagesArrayValues1, imagesArray1, imgArray1, imagesArrayValues2, imagesArray2, imgArray2, imagesArrayValues3, imagesArray3, imgArray3) {
    if(document.getElementById("imgSelect").value == 1){
        let n = imagesArrayValues1.length;
        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
            for (let i = gap; i < n; i += 1)  {
                let temp = imagesArrayValues1[i];
                let temp2 = imagesArray1[i];
                let temp3 = imgArray1[i];
                
                let j;
                for (j = i; j >= gap && imagesArrayValues1[j-gap] < temp; j-=gap)  {
                    imagesArrayValues1[j] = imagesArrayValues1[j-gap];

                    imagesArray1[j] = imagesArray1[j-gap];
                    imgArray1[j] = imgArray1[j-gap];

                }

                imagesArrayValues1[j] = temp;
                imagesArray1[j] = temp2;
                imgArray1[j] = temp3;
            }
        }

        document.getElementById("img11").src=imagesArray1[0];
        document.getElementById("img22").src=imagesArray1[1];
        document.getElementById("img33").src=imagesArray1[2];
        document.getElementById("img44").src=imagesArray1[3];
        document.getElementById("img55").src=imagesArray1[4];
        document.getElementById("img66").src=imagesArray1[5];

        return imagesArrayValues1, imagesArray1, imgArray1;

    }else if(document.getElementById("imgSelect").value == 2){

        let n = imagesArrayValues2.length;
        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
            for (let i = gap; i < n; i += 1)  {
                let temp = imagesArrayValues2[i];
                let temp2 = imagesArray2[i];
                let temp3 = imgArray2[i];
                
                let j;
                for (j = i; j >= gap && imagesArrayValues2[j-gap] < temp; j-=gap)  {
                    imagesArrayValues2[j] = imagesArrayValues2[j-gap];

                    imagesArray2[j] = imagesArray2[j-gap];
                    imgArray2[j] = imgArray2[j-gap];

                }

                imagesArrayValues2[j] = temp;
                imagesArray2[j] = temp2;
                imgArray2[j] = temp3;
            }
        }

        document.getElementById("img11").src=imagesArray2[0];
        document.getElementById("img22").src=imagesArray2[1];
        document.getElementById("img33").src=imagesArray2[2];
        document.getElementById("img44").src=imagesArray2[3];
        document.getElementById("img55").src=imagesArray2[4];
        document.getElementById("img66").src=imagesArray2[5];

        return imagesArrayValues2, imagesArray2, imgArray2;

    }else{
        let n = imagesArrayValues3.length;
        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
            for (let i = gap; i < n; i += 1)  {
                let temp = imagesArrayValues3[i];
                let temp2 = imagesArray3[i];
                let temp3 = imgArray3[i];
                
                let j;
                for (j = i; j >= gap && imagesArrayValues3[j-gap] < temp; j-=gap)  {
                    imagesArrayValues3[j] = imagesArrayValues3[j-gap];

                    imagesArray3[j] = imagesArray3[j-gap];
                    imgArray3[j] = imgArray3[j-gap];

                }

                imagesArrayValues3[j] = temp;
                imagesArray3[j] = temp2;
                imgArray3[j] = temp3;
            }
        }

        document.getElementById("img11").src=imagesArray3[0];
        document.getElementById("img22").src=imagesArray3[1];
        document.getElementById("img33").src=imagesArray3[2];
        document.getElementById("img44").src=imagesArray3[3];
        document.getElementById("img55").src=imagesArray3[4];
        document.getElementById("img66").src=imagesArray3[5];

        return imagesArrayValues3, imagesArray3, imgArray3;
    }
}


function showSelected() {
    let seleccion = document.getElementById("algoritmoSeleccionado").value;
    let nono = "¡Seleccione el sentido de ordenamiento!";
    document.getElementById("algSelected").innerHTML = seleccion;
    /* Para obtener el texto que ve el usuario */
    let selected_name = document.getElementById("algoritmoSeleccionado");
    let opcion = selected_name.options[selected_name.selectedIndex].text;
    alert(opcion);
    
    if ((seleccion === "1") && (document.getElementById("tipoOrdAlg").checked)){
        algoritmoBurbujaAsc(imgArray1, imgArray2, imgArray3, imagesArrayValues1, imagesArrayValues2, imagesArrayValues3, imagesArray1, imagesArray2, imagesArray3);
    }else if((seleccion === "1") && (document.getElementById("tipoOrdAlg2").checked)){
        algoritmoBurbujaDesc(imgArray1, imgArray2, imgArray3, imagesArrayValues1, imagesArrayValues2, imagesArrayValues3, imagesArray1, imagesArray2, imagesArray3);
    }else if((seleccion === "2") && (document.getElementById("tipoOrdAlg").checked)){
        algoritmoInsercionAsc(imgArray1, imgArray2, imgArray3, imagesArrayValues1, imagesArrayValues2, imagesArrayValues3, imagesArray1, imagesArray2, imagesArray3);
    }else if((seleccion === "2") && (document.getElementById("tipoOrdAlg2").checked)){
        algoritmoInsercionDesc(imgArray1, imgArray2, imgArray3, imagesArrayValues1, imagesArrayValues2, imagesArrayValues3, imagesArray1, imagesArray2, imagesArray3);
    }else if((seleccion === "3") && (document.getElementById("tipoOrdAlg").checked)){
        algoritmoSeleccionAsc(imgArray1, imgArray2, imgArray3, imagesArrayValues1, imagesArrayValues2, imagesArrayValues3, imagesArray1, imagesArray2, imagesArray3);
    }else if((seleccion === "3") && (document.getElementById("tipoOrdAlg2").checked)){
        algoritmoSeleccionDesc(imgArray1, imgArray2, imgArray3, imagesArrayValues1, imagesArrayValues2, imagesArrayValues3, imagesArray1, imagesArray2, imagesArray3);
    }else if((seleccion === "4") && (document.getElementById("tipoOrdAlg").checked)){
        algoritmoShellSortAsc(imagesArrayValues1, imagesArray1, imgArray1, imagesArrayValues2, imagesArray2, imgArray2, imagesArrayValues3, imagesArray3, imgArray3);
    }else if((seleccion === "4") && (document.getElementById("tipoOrdAlg2").checked)){
        algoritmoShellSortDesc(imagesArrayValues1, imagesArray1, imgArray1, imagesArrayValues2, imagesArray2, imgArray2, imagesArrayValues3, imagesArray3, imgArray3); 
    }else{
        document.getElementById("nonas").innerHTML = nono;
    }
}