let usuarioActual =localStorage.getItem("usuarioActual")
console.log(usuarioActual)
let registros = JSON.parse(localStorage.getItem("registro"))
console.log(registros)
const indice = registros.findIndex(user => user.nombre === usuarioActual)


let transfRealizadas =[]





user.innerHTML = `Bienvenido Señor/a ${registros[indice].nombre}`




const botondepo = document.getElementById("dep")
const botoncons = document.getElementById("saldo")
const botontrans = document.getElementById("trans")

botondepo.addEventListener("click",()=> {
    let plataActual = parseInt(registros[indice].plata)
  let plataentra =  Swal
    .fire({
        title: "monto a depositar",
        input: "number",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            let nombre = resultado.value;
            registros[indice].plata = parseInt(nombre) + plataActual
            localStorage.setItem("registro", JSON.stringify(registros))
          
        }
        
    });
    
})



/* CONSULTAS */
botoncons.addEventListener("click", ()=> {
    let timerInterval
Swal.fire({
  title: `su saldo es ${registros[indice].plata}`,
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {

    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
   
})


/* Transcripcion de transferencias realizadas */ 
botontrans.addEventListener("click", async ()=>{
  await Swal
    .fire({
        title: "Ingrese el monto a transferir",
        input: "number",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value ) {
            let montos = resultado.value;
            console.log(montos)
            
        } else{return  alert("Ingrese algo...")} 
    });
       


      await  Swal
        .fire({
            title: "Ingrese el CBU a transferir",
            input: "number",
            showCancelButton: true,
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
        })
        .then(resultado => {
            if (resultado.value) {
                let cbuIng = resultado.value;
                console.log(cbuIng)
                
            }else{return  alert("Ingrese algo...")} 
        });
       

        
        /* console.log( typeof(parseInt(montotrans)))
        if(typeof(parseInt(montotrans)) !== "number"){
            alert("ingreso datos incorrectos reintente")
        }else{
        if(registros[indice].plata >= montotrans){
            const data = {
            monto: montotrans,
            codigo: cbu
                        }
            transfRealizadas.push(data)
            registros[indice].plata -= montotrans
            localStorage.setItem("transferencias",JSON.stringify(transfRealizadas))
            localStorage.setItem("registro", JSON.stringify(registros))
            }
            else{
                alert("ingreso un monto superior que no posee en cuenta para operar vuelva a intentar ingresando otro monto")
            } 
        } */

})
const lista = document.getElementById("historiales")

botonhisto= document.getElementById("histo")
botonhisto.addEventListener("click", ()=> {
    datosobtenidos =JSON.parse( localStorage.getItem("transferencias")  )
    console.log(datosobtenidos)

    lista.innerHTML = ""
    for(element of datosobtenidos){
        
        const tras = document.createElement("li")
        tras.innerHTML += `<li>el monto $${element.monto} se envio al cbu ${element.codigo}</li>`
        lista.append(tras)
    }

})


/* function transferencias(){
    
   
        const montotrans = prompt("ingrese el monto a transferir")
        if(montotrans == undefined || montotrans == ""){
            alert("Ingrese algo...")
            return
        }
        const cbu = prompt("ingrese el cbu a  transferir")
        if(cbu == undefined || cbu == ""){
            alert("Ingrese algo...")
            return
        }
        console.log( typeof(parseInt(montotrans)))
        if(typeof(parseInt(montotrans)) !== "number"){
            alert("ingreso datos incorrectos reintente")
        }else{
        if(registros[indice].plata >= montotrans){
            const data = {
            monto: montotrans,
            codigo: cbu
                        }
            transfRealizadas.push(data)
            registros[indice].plata -= montotrans
            localStorage.setItem("transferencias",JSON.stringify(transfRealizadas))
            localStorage.setItem("registro", JSON.stringify(registros))
            }
            else{
                alert("ingreso un monto superior que no posee en cuenta para operar vuelva a intentar ingresando otro monto")
            } 
        }
    
 
} */
   