
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
        Swal.fire(
            'No se reconoce el usuario ingresado o clave incorrecta',
            
          )
    }else{
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Logueo Correcto',
            showConfirmButton: false,
            timer: 1500
          })

        localStorage.setItem("usuarioActual",userlogeado.nombre)
        setTimeout(() => location.replace(
            'http://127.0.0.1:5500/segunda%20pre%20entrega/index.html'), 2000)
        
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
