let server = 'http://127.0.0.1:8080'
$(document).ready(function(){
    $.ajax({
        url:server + '/usuario/1/tiendas',
        success: function(result){
            const tiendas = result.tiendas;
            generarTablaTiendas(tiendas);
        }
    })
})

function generarTablaTiendas(tiendas){
    $('#tbody').html('');
    for(let i=0; i<tiendas.length; i++){
        let $tr = $('<tr></tr>');
        let $nombre = $('<td scope="row"></td>');
        let $ver = $('<td scope="row"></td>')
        let $botonVer = $('<button type="button" class="btn btn-info" data-toggle="modal" data-target="#editarTiendaModal" onclick="redireccionar('+tiendas[i].id+')">Ver</button>')
        let $editar = $('<td></td>');
        let $botonEditar = $('<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#editarTiendaModal">Editar</button>')
        let $eliminar = $('<td></td>');
        let $botonEliminar = $('<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#eliminarTiendaModal">Eliminar</button>')
        $($nombre).append(tiendas[i].name);
        $($ver).append($botonVer);
        $($editar).append($botonEditar);
        $($eliminar).append($botonEliminar);
        $($tr).append($nombre, $ver, $editar, $eliminar);
        $('#tbody').append($tr);
    }
}

function redireccionar(id){
    window.location.replace('/ABMProducto.html?id='+id);
}


