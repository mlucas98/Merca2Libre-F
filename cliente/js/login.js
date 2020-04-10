$('#login').click(function(event){
    event.preventDefault();
    var server = 'http://localhost:8080';
 
    var email = $('#exampleInputEmail1').val();
    var password = $('#exampleInputPassword1').val();
    
    $.post({
        url: server + "/login",
        data: {"email": email, 'password': password},
        success: function(){
            alert('Usuario logeado');
            window.location.href = "index.html";
        },
        error: function(error){
            window.location.href = "error.html";
        }
    });
});