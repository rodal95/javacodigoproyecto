
let usuarios = []
const usuario1 = document.getElementById('usuario1');
const pass1 = document.getElementById('pass1');



const botonLog = document.getElementById('btn1');

let userlogeado = {}


botonLog.addEventListener("click", ()=>{
    login(usuario1.value, pass1.value)
   
})



const login = (usuarioEntrante, contraEntrante)=>{
    userlogeado = usuarios.find(usuario => usuario.nombre === usuarioEntrante && usuario.contra === contraEntrante)
    if(userlogeado === undefined){
        alert("No existe o clave mal ingresada");
    }else{
        alert("Buenos dias")
        localStorage.setItem("usuarioActual",JSON.stringify(userlogeado))
        location.replace('http://127.0.0.1:5500/index.html')
    }
}

const verSiHayCosas = ()=>{
    if(localStorage.getItem("registro") !== null){
        const datosLocales = JSON.parse(localStorage.getItem("registro"))
        usuarios = datosLocales
    }
}
-
document.addEventListener("DOMContentLoaded", verSiHayCosas)
