function login() {
    // Obtenemos los valores de usuario y contraseña del formulario
    var usuario = document.getElementById("email").value;
    var contrasena = document.getElementById("password").value;

    // Datos del usuario de ejemplo (reemplazar con los valores deseados)
    var usuarioValido = "lasalletata@hotmail.com";
    var contrasenaValida = "Hola123$%";

    if (usuario === usuarioValido && contrasena === contrasenaValida) {
        // Si las credenciales son válidas, redirigir a la página de tareas
        window.location.href = "tareas.html";
    } else {
        // Si las credenciales no son válidas, mostrar mensaje de error
        alert("Credenciales incorrectas. Por favor, intenta de nuevo.");
    }

    // Prevenir el envío del formulario
    return false;
}

// Evento de clic en el botón de registrarse
$("#register_button").click(function (e) {
    e.preventDefault();

    // Obtener los valores de usuario y contraseñas del formulario
    var usuario = $("#nombre_apellido").val();
    var contrasena = $("#password").val();
    var confirmarContrasena = $("#confirm_password").val();

    // Validar que las contraseñas coincidan y cumplan con los requisitos mínimos
    var contrasenaRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (
        contrasena !== confirmarContrasena ||
        !contrasenaRegex.test(contrasena)
    ) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Las contraseñas no coinciden o no cumplen con los requisitos mínimos",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
        });
        return; // Detener el proceso si las contraseñas no coinciden o no cumplen con los requisitos
    }

    // Aquí puedes agregar la lógica para enviar el formulario al servidor, si lo deseas.
    // Por simplicidad, omitiremos la lógica del servidor en este ejemplo.

    // Mostrar la alerta de registro exitoso
    Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Tu cuenta ha sido creada exitosamente",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
    }).then((result) => {
        // Si el usuario hace clic en "OK" en la alerta, redirige a la página de login
        if (result.isConfirmed) {
            window.location.href = "login.html";
        }
    });
});
