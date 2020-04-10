
function generarLista(listaProductos){
    $('#tbody').html('');
    for(let i = 0; i < listaProductos.length; i++){
        let $tr = $('<tr></tr>');
        let $nombre = $('<td scope="row"></td>');
        let $cantidad = $("<td></td>");
        let $precio = $("<td></td>");
        let $botonEditar = $('<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#editarTiendaModal">Editar</button>')
        let $eliminar = $('<td></td>');
        let $botonEliminar = $('<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#eliminarTiendaModal">Eliminar</button>')
        $($nombre).append(listaProductos[i].description);
        $($cantidad).append(listaProductos[i].stock);
        $($precio).append(listaProductos[i].price);
        $($editar).append($botonEditar);
        $($eliminar).append($botonEliminar);
        $($tr).append($nombre, $cantidad, $precio, $editar, $eliminar);
        $('#tbody').append($tr);
    }
}

//<td><button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#editarProductoModal">Editar</button></td>
//<td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#eliminarProductoModal">Eiminar</button></td>

$(document).ready(function(){
    let idUrl = new URLSearchParams(window.location.search);
    const id = idUrl.get('id');
    var server = 'http://localhost:8080';
    $.ajax({
        url: server + "/tienda/" + id + "/productos",
        success: function(result){
            tiendas = result;
            generarLista(result);
        },
        error: function(error){
            alert("An error ocurred!")
        }
    });
})