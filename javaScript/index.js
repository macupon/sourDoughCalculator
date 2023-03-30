

let recetaAlex = document.getElementById("ra");
let recetaJack = document.getElementById("rj");
let recetaInti = document.getElementById("ri");



class recetas {
    constructor (sourD, harina, agua, sal){
        this.sourD = parseFloat(sourD);
        this.harina = parseFloat(harina);
        this.agua = parseFloat(agua);
        this.sal = parseFloat(sal);
        this.agua_sd = this.sourD/2;
        this.harina_sd = this.sourD/2;
        this.hidratacion = (((this.agua_sd + this.agua) / (this.harina_sd + this.harina)) * 100);
        this.inoculacion = (this.sourD / (this.harina + this.agua + this.sal)) * 100;

        // INOCULACION: Actualizar valor porcentage y barra de porcentage
        let inoculacion_conpor = this.inoculacion.toFixed(0) + '%';
        style.getPropertyValue('--num');
        style.setProperty('--num', inoculacion_conpor); // texto en la barra (string)
        style.getPropertyValue('--sinpor');  // pq no funciona con float?
        style.setProperty('--sinpor', parseInt(this.inoculacion)); // relleno barra (integer) 
        
        // INOCULACION: Actualizar valor porcentage y barra de porcentage
        let hidratacion_conpor = this.hidratacion.toFixed(0) + '%';
        style.getPropertyValue('--numhidratacion');
        style.setProperty('--numhidratacion', hidratacion_conpor);
        style.getPropertyValue('--sinporhidratacion');
        style.setProperty('--sinporhidratacion', parseInt(this.hidratacion));

    }}

const style = document.documentElement.style

//RECETA ALEX
recetaAlex.addEventListener('click', () => {
    document.getElementById("sour").value = 250
    document.getElementById("farina").value=590
    document.getElementById("agua").value=440
    document.getElementById("sal").value=10
});

//RECETA JACK
recetaJack.addEventListener('click', () => {
    document.getElementById("sour").value = 100
    document.getElementById("farina").value=450
    document.getElementById("agua").value=310
    document.getElementById("sal").value=8
});

//RECETA ARG
recetaInti.addEventListener('click', () => {
    // 
    document.getElementById("sour").value = 80
    document.getElementById("farina").value=420
    document.getElementById("agua").value=290
    document.getElementById("sal").value=8   
});

window.addEventListener('change', ()=>{
    let sourD_ = document.getElementById("sour").value;
    let harina_ = document.getElementById("farina").value;
    let agua_ = document.getElementById("agua").value;
    let sal_ = document.getElementById("sal").value;

    random = new recetas(sourD_, harina_, agua_, sal_)  

})
