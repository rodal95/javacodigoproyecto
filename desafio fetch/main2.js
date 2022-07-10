window.addEventListener('DOMContentLoaded', ()=> {
    console.log('DOM cargado')
    fetch('http://localhost:3000/transferencias')
    .then(response => response.json())
    .then(transferencias => {
        
        console.log(transferencias)
        const boton = document.getElementById("transfer")
        boton.addEventListener('click', ()=> {
        document.getElementById("lista").innerHTML =""
        consultarTrans(transferencias)
        })
        
        
    })
    .catch(err => console.log(err))
    .finally(()=> console.log("finally"))
})


function consultarTrans(parametro){
    
    parametro.forEach(elem => {
        console.log(elem.nombre)
        const transhtml = `
        <li>${elem.nombre}</li>`
        
        document.getElementById("lista").innerHTML += transhtml
        
    });
}


