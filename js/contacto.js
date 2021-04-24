function SoloNumeros(e){
    key = e.keyCode || e.which;
    var teclado = String.fromCharCode(key);
    var numero = "0123456789."
    var especiales = "8-37-38-46";
    var teclado_especial = false;

    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial = true;
        }
    }
    if(numero.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }
}

function ValidarEmail(){
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}
function ValidarCorreo(){
    var email_prueba = "fulanito@gmail.com";
    if(ValidarEmail( email_prueba ) )
    {
        alert("El email es correcto");
    }
    else
    {
        alert("El email NO es correcto");
    }
}