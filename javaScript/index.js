

let recetaAlex = document.getElementById("ra");
let recetaJack = document.getElementById("rj");
let recetaInti = document.getElementById("ri");

let sourD_ = document.getElementById("sour");
let farina_ = document.getElementById("farina");
let agua_ = document.getElementById("agua");
let sal_ = document.getElementById("sal");

function calculo_hidratacion(agua_sd, harina_sd, harina, agua) {
    let hidr = (((agua_sd+agua)/(harina_sd+harina))*100).toFixed(0);
    return hidr;
}
function calculo_inoculacion(sourD, harina, agua, sal) {
    let inocu = ((sourD/(harina+agua+sal))*100).toFixed(0);
    return inocu;
}

//RECETA ALEX

// aguamasamadre = (parseInt(sourD_.value)/2);
// harinamasamadre = (parseInt(farina_.value)/2);
// let sumaIngredientes = (parseInt(sourD_.value) + parseInt(farina_.value) + parseInt(agua_.value) + parseInt(sal_.value));
// let inoculacion = (parseInt(sourD_.value) / sumaIngredientes).toFixed(3);
// let hidratacion = ((parseInt(agua_.value) + aguamasamadre) / ((parseInt(farina_.value) + harinamasamadre))).toFixed(3);

const style = document.documentElement.style

recetaAlex.addEventListener('click', () => {
        //INGREDIENTES
        sourD_.value = "250";
        farina_.value = "590";
        agua_.value = "440";
        sal_.value = "10";
        //SOURDOUGH
        aguamasamadre = (parseInt(sourD_.value)/2);
        harinamasamadre = (parseInt(sourD_.value)/2);
   
        //SUMA TOTAL DE INGREDIENTES
        let sumaIngredientes = (parseInt(sourD_.value) + parseInt(farina_.value) + parseInt(agua_.value) + parseInt(sal_.value));
        
        //INOCULACION CON Y SIN %
        // let inoculacion = ((parseInt(sourD_.value) / sumaIngredientes)*100).toFixed(0) + '%';
        let inoculacion_sinporino = calculo_inoculacion(sourD_, parseInt(farina_.value), parseInt(agua_.value), parseInt(sal_.value))
        let inoculacion = inoculacion_sinporino + '%';
        
        style.getPropertyValue('--num');
        style.setProperty('--num', inoculacion);
        style.getPropertyValue('--sinpor');
        style.setProperty('--sinpor', inoculacion_sinporino);

       

        //HIDRATACION CON Y SIN %
        // let hidratacion = (((parseInt(agua_.value) + aguamasamadre) / ((parseInt(farina_.value) + harinamasamadre)))*100).toFixed(0) + '%';
        // let hidratacion_sinpor = (((parseInt(agua_.value) + aguamasamadre) / ((parseInt(farina_.value) + harinamasamadre)))*100).toFixed(0);
        
        let hidratacion_sinpor = calculo_hidratacion(aguamasamadre,
                                                    harinamasamadre,
                                                    parseInt(farina_.value),
                                                    parseInt(agua_.value))
        
        let hidratacion = hidratacion_sinpor + '%';
        

        style.getPropertyValue('--numhidr');
        style.setProperty('--numhidr', hidratacion);
        style.getPropertyValue('--sinporhidr');
        style.setProperty('--sinporhidr', hidratacion_sinpor);
        

        
        
});


//RECETA JACK

recetaJack.addEventListener('click', () => {
    sourD_.value = "100";
    farina_.value = "450";
    agua_.value = "310";
    sal_.value = "8";
    aguamasamadre = (parseInt(sourD_.value)/2);
    harinamasamadre = (parseInt(farina_.value)/2);
    
    //SUMA TOTAL DE INGREDIENTES
    let sumaIngredientes = (parseInt(sourD_.value) + parseInt(farina_.value) + parseInt(agua_.value) + parseInt(sal_.value));
    
    //INOCULACION E HIDRATACION CON %
    let inoculacion = ((parseInt(sourD_.value) / sumaIngredientes)*100).toFixed(0) + '%';
    let hidratacion = (((parseInt(agua_.value) + aguamasamadre) / ((parseInt(farina_.value) + harinamasamadre)))*100).toFixed(0) + '%';

    style.getPropertyValue('--num');
    style.setProperty('--num', inoculacion);

    //INOCULACION E HIDRATACION SIN %
    let inoculacion_sinpor = ((parseInt(sourD_.value) / sumaIngredientes)*100).toFixed(0);
    let hidratacion_sinpor = (((parseInt(agua_.value) + aguamasamadre) / ((parseInt(farina_.value) + harinamasamadre)))*100).toFixed(0);
    
    style.getPropertyValue('--sinpor');
    style.setProperty('--sinpor', inoculacion_sinpor);
});

//RECETA ARG

recetaInti.addEventListener('click', () => {
    sourD_.value = "80";
    farina_.value = "420";
    agua_.value = "290";
    sal_.value = "8";
    aguamasamadre = (parseInt(sourD_.value)/2);
    harinamasamadre = (parseInt(farina_.value)/2);

    //SUMA TOTAL DE INGREDIENTES
    let sumaIngredientes = (parseInt(sourD_.value) + parseInt(farina_.value) + parseInt(agua_.value) + parseInt(sal_.value));
    
    //INOCULACION E HIDRATACION CON %
    let inoculacion = ((parseInt(sourD_.value) / sumaIngredientes)*100).toFixed(0) + '%';
    let hidratacion = (((parseInt(agua_.value) + aguamasamadre) / ((parseInt(farina_.value) + harinamasamadre)))*100).toFixed(0) + '%';
    

    style.getPropertyValue('--num');
    style.setProperty('--num', inoculacion);

    //INOCULACION E HIDRATACION SIN %
    let inoculacion_sinpor = ((parseInt(sourD_.value) / sumaIngredientes)*100).toFixed(0);
    let hidratacion_sinpor = (((parseInt(agua_.value) + aguamasamadre) / ((parseInt(farina_.value) + harinamasamadre)))*100).toFixed(0);
    
    style.getPropertyValue('--sinpor');
    style.setProperty('--sinpor', inoculacion_sinpor);
});

// INOCULACION E HIDRATACION
// let style = document.documentElement.style

// let barra_ = () => {}

    // if (recetaAlex.addEventListener('click')) {
    //     style.getPropertyValue('--num', '20');
    //     alert("inocu");
    // }else {
    //     alert("hidr");
    // }


// function barracss () {
// barra = getComputedStyle(document.getElementsByClassName("progress-label")).getPropertyValue('--num');
// barra.style.setProperty('--num', inoculacion);
// }

