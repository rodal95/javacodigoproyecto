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
    
    registros[indice].plata = deposito() + plataActual
    localStorage.setItem("registro", JSON.stringify(registros))
})



function deposito(){
    let monto = prompt("ingrese el monto a depositar")
    if(typeof(parseInt(monto))!=Number){
        return parseInt(monto)
    }else{
        alert("ingreso un monto invalido")
    }
}

botoncons.addEventListener("click", ()=> {
    alert(`su saldo es ${registros[indice].plata}`)
})


botontrans.addEventListener("click", ()=>{
    let historia = transferencias()

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

function transferencias(){
    
    let confirmacion=confirm("quiere hacer una transf")
    console.log(confirmacion)
    if( confirmacion == false){
        return alert()

    }
   const montotrans = prompt("ingrese el monto a transferir")
   const cbu = prompt("ingrese el cbu a  transferir")
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
    }
 

   