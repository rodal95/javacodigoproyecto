const usuario = document.getElementById('usuario');
const pass = document.getElementById('pass');

const boton = document.getElementById('btn');
let usuarios = []

boton.addEventListener("click", ()=>{
    guardarRegistro()
  
})

const guardarRegistro = () => {
    const user = {
        nombre: usuario.value,
        contra: pass.value,
        plata: "0"
    }
    localStorage.getItem("registro") === null ? guardarEnLocal(user):(
        usuarios.find(elemento => elemento.nombre ===  user.nombre ) == undefined ? guardarEnLocal(user): alert("error, registro ya creado")
    )
    
}


const guardarEnLocal = (obj) => {
    let datosLocales
    localStorage.getItem("registro") === null? ( 
    usuarios.push(obj),
    localStorage.setItem("registro", JSON.stringify(usuarios)) ):
       (
        datosLocales = JSON.parse(localStorage.getItem("registro")),
        datosLocales.push(obj),
        usuarios = datosLocales,
        localStorage.setItem("registro", JSON.stringify(usuarios)))
        alert("registro exitoso")
        location.replace('http://127.0.0.1:5500/segunda%20pre%20entrega/login.html')
}

const verSiHayCosas = ()=>{
    if(localStorage.getItem("registro") !== null){
        const datosLocales = JSON.parse(localStorage.getItem("registro"))
        usuarios = datosLocales
    }
}
-
document.addEventListener("DOMContentLoaded", verSiHayCosas)