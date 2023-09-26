//Llamar validacion de Login usuario
const btnEnviar = document.querySelector("#enviar-login");
btnEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();
    loginUsuario();
})

const loginUsuario = () => {
  const correoIngresado = document.querySelector("[data-form-usuario]").value;
  const contraseñaIngresada = document.querySelector("[data-form-contraseña]").value;
  var user = "admin";
  var pass = "admin1234";

  if( correoIngresado === user && contraseñaIngresada === pass ){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Bienvenido Admin',
      showConfirmButton: false,
      timer: 1500
    })

    setTimeout(function(){
      window.location.href = "../screens/admin-productos.html";
    }, 2000);
    
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Datos incorrectos',
    })
  }
}