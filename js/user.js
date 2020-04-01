$(document).ready(function(){
    const usuario = localStorage.getItem('user');
    if(usuario){
        return usuario;
    }
    else {
        window.location.replace(login);
    }
});