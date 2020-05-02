
const inputs = document.getElementsByClassName('input');
const btnEnviar = document.getElementById('enviar');
const correo = document.getElementById('name')
const asunto = document.getElementById('asunto')
const mensaje = document.getElementById('mensaje')
const formularioEnviar = document.getElementById('enviar-mail');
const btnBorrar = document.getElementById('borrar');

for (let i = 0; i < inputs.length; i++) {
     inputs[i].addEventListener('keyup', function () {
          if (this.value.length >= 1) {
               this.nextElementSibling.classList.add('fijar');
          } else {
               this.nextElementSibling.classList.remove('fijar');
          }

     });
}


//Event Listeners
eventListeners();
function eventListeners() {

     //Deshabilita el boton enviar
     document.addEventListener('DOMContentLoaded', inicioApp);

     //Valida los campos del form
     correo.addEventListener('blur', validarCampo);
     asunto.addEventListener('blur', validarCampo);
     mensaje.addEventListener('blur', validarCampo);

     // Boton de enviar en el submit
     btnEnviar.addEventListener('click', enviarEmail);

     //Reset boton
     btnBorrar.addEventListener('click', borrarTodo);

}



//Funciones
function inicioApp() {
     btnEnviar.disabled = true; 
}



function validarCampo() {

     //Se valida la longitud del texto
     validarLongitud(this);

     //validar el email
     if (this.type === 'email') {
          validarEmail(this);
     }

     
     let errores = document.querySelectorAll('.error')
     if (correo.value !== '' && asunto.value !== '' && mensaje.value !== '') {
          
          if (errores.length === 0) {
               btnEnviar.disabled = false;
               btnEnviar.classList.add('btn-js');
          }  
      } else{
          btnEnviar.disabled = true;
          btnEnviar.classList.remove('btn-js');
      }
}


function enviarEmail(e){
     //Spinner al presionar enviar
     const spinnerGif = document.querySelector('#spinner');
     spinnerGif.style.display = 'block';

     //Gif de email
     const enviado = document.createElement('img')
     enviado.src = 'img/mail.gif';
     enviado.style.display = 'block';

     //Ocultar espiner y mostrar enviado
     setTimeout(function(){
          spinnerGif.style.display = 'none';

          document.querySelector('#loaders').appendChild(enviado);

          setTimeout(function(){
               enviado.remove();
               formularioEnviar.reset();
               btnEnviar.disabled = true;
               btnEnviar.classList.remove('btn-js');
          }, 5000)
     }, 3000)

     e.preventDefault();
}


//Verifica la longitud 
function validarLongitud(campo) {
     if (campo.value.length > 0) {
          campo.style.borderBottom = '.2rem solid green'
          campo.classList.remove('error')
     } else {
          
     }
     
}

function validarEmail(campo){
     const mensaje = campo.value
     if (mensaje.indexOf('@') !== -1) {
          campo.style.borderBottom = '.2rem solid green'
          campo.classList.remove('error')
     } else {
          campo.style.borderBottom = '.2rem solid red'
          campo.classList.add('error')
          btnEnviar.disabled = true;
          btnEnviar.classList.remove('btn-js');
     }
}

function borrarTodo(e){
     formularioEnviar.reset();
     btnEnviar.disabled = true;
     btnEnviar.classList.remove('btn-js');
     e.preventDefault();
}

