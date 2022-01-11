const btnCalcular= document.getElementById('calcula');
const kilos=document.getElementById('kilos').value;
const altura=document.getElementById('altura').value;
const edad=document.getElementById('edad').value;
const IMC=document.getElementById('IMC')
const lectura=document.getElementById('lectura')
const mensaje=document.getElementById('mensaje')
let dato=JSON.parse(localStorage.getItem('datos'))||[]
const btnPromediar=document.getElementById('promedio')
const Estadisticas=document.getElementById('estadisticas')


btnCalcular.addEventListener("submit",(e) =>{
    e.preventDefault()
    const kilos=document.getElementById('kilos').value;
    const altura=document.getElementById('altura').value;
    const edad=document.getElementById('edad').value;
    let generos=document.getElementsByName("inlineRadioOptions")
    let sexo
      
    
    let alturaCm= altura/100
    if(kilos!=='' && altura!==""){
       let IMCX =Number((kilos/(alturaCm*alturaCm)).toFixed(2))
       lectura.innerHTML+=`<button>${IMCX}</button>`
        mostrar(IMCX)   
    }
    else{
        mensaje.innerHTML=`<span>ingresa aqui</span>`
    }

});

    async function mostrar(imc){
    const kilos=document.getElementById('kilos').value;
    const altura=document.getElementById('altura').value;
    const edad=document.getElementById('edad').value;
    let sexo;
    if(document.getElementById("inlineRadio1").checked)
    {
        sexo="hombre"
    } 
    else if (document.getElementById("inlineRadio2").checked)
    {
        sexo="mujer"
    }
    let IMCX= imc
    let agregar= await fetch('http://localhost:4000/datos/',{
        method:'POST',
        body: JSON.stringify({
            
            altura:altura,
            kilos:kilos,
            edad:edad,
            sexo:sexo,
            imc:IMCX
            
        }),
        headers:{
            "Content-Type":"application/json; charset=UTF-8"
        }

    })
    const archivo={
        altura,kilos,edad,sexo,IMCX

    }
    dato.push(archivo)
    localStorage.setItem('datos',JSON.stringify(dato))

}

