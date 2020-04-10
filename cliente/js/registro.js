$('#new').click(function(event){
    event.preventDefault();
    var server = 'http://localhost:8080';
    var name = $('#exampleInputName1').val();
    var email = $('#exampleInputEmail1').val();

    // si uso $.post y no hace falta especificar el metodo
    $.ajax({
        url: server + "/usuario/crear",
        method: 'post',
        data: {"nombre": name, "email": email},
        success: function(){
            alert('Usuario creado con exito');
            window.location.href = "index.html";
        },
        error: function(error){
            window.location.href = "error.html";
        }
    });
});

$('#save').click(function(event){
    event.preventDefault();
    var server = 'http://localhost:8080';
    var name = $('#exampleInputName1').val();
    console.log(name)
    var email = $('#exampleInputEmail1').val();
    // var id = localStorage.getItem(localStorage.key(i));
    var id = 4;

    $.ajax({
        url: server + "/usuario/"+id+"/actualizar",
        method: 'put',
        data: {"name": name, "email": email},
        success: function(){
            alert('Usuario actualizado con exito');
            window.location.href = "index.html";
        },
        error: function(error){
            window.location.href = "error.html";
        }
    });
});

// sgMail
//   .send(msg)
//   .then(() => {}, error => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   });
