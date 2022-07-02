let usuarioActual = JSON.parse((localStorage.getItem("usuarioActual")))

let sald = parseInt(usuarioActual.plata)
let transfRealizadas =[]





user.innerHTML = `Bienvenido Señor/a ${usuarioActual.nombre}`




const botondepo = document.getElementById("dep")
const botoncons = document.getElementById("saldo")
const botontrans = document.getElementById("trans")

botondepo.addEventListener("click",()=> {
    
    sald += parseInt(deposito())
    localStorage.removeItem("usuarioActual")
    usuarioActual.plata = sald
    localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual))

})



function deposito(){

    let monto = prompt("ingrese el monto a depositar")
    if(monto === null || monto === undefined || monto === NaN || monto === ""){
        alert("ingreso un monto invalido")
    }else{
        
        
        }
        return monto
}

botoncons.addEventListener("click", ()=> {
    alert(`su saldo es ${sald}`)
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
   const montotrans = prompt("ingrese el monto a transferir")
   const cbu = prompt("ingrese el cbu a  transferir")
   if(montotrans == "" || cbu == "" || montotrans == null || cbu == null ){
    alert("ingreso datos incorrectos reintente")
   }else{
    if(saldo>= montotrans){
        const data = {
            monto: montotrans,
            codigo: cbu
                        }
            transfRealizadas.push(data)
            saldo -= data.monto
            localStorage.setItem("transferencias",JSON.stringify(transfRealizadas))
            }
            else{
                alert("ingreso un monto superior que no posee en cuenta para operar vuelva a intentar ingresando otro monto")
            } 
        }
    }
 

   