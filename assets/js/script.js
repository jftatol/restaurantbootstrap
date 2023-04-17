
function comuniquemonos_m() {
    let p_divcontactos = document.getElementById('divcontactos');
    console.log(p_divcontactos)
    document.getElementById('divcontactos').class="container mt-5 col-xl-6 col-lg-8 col-md-10 col-sm-10 mx-auto text-center"
    document.getElementById('divreservas').class="container mt-5 col-xl-6 col-lg-8 d-none d-md-block text-center"
    //alert("comuniquemonos")
    /* let p_comuniquemonosForm = document.getElementById('form_comuniquemonos');
    let p_reservaForm = document.getElementById('form_reserva');
    p_reservaform.class = "container mt-5 col-xl-6 col-lg-8 text-center d-none d-md-block"
    p_comuniquemonosForm.class = "container mt-5 col-xl-6 col-lg-8 text-center col-md-10 col-sm-10 mx-auto" */
    
}

function ver_comun(){
    event.preventDefault()
    document.getElementById("divcontactos").classList.remove("d-none")
    document.getElementById("divreservas").classList.add("d-none")
    var divForm = document.getElementById("divcontactos");
    divForm.scrollIntoView({ behavior: 'smooth' });
}

function ver_reserv(){
    event.preventDefault()
    document.getElementById("divreservas").classList.remove("d-none")
    document.getElementById("divcontactos").classList.add("d-none")
    var divForm = document.getElementById("divreservas");
    divForm.scrollIntoView({ behavior: 'smooth' });
}

function envia_comuniquemonos() {
    var pnombre = document.getElementById("com_nombre").value
    var pemail = document.getElementById("com_email").value
    var ptelefono = document.getElementById("com_telefono").value
    var pmotivo = document.getElementById("com_motivo").value
    var ptxtmotivo = document.getElementById("com_txt_motivo").value
    var valida = true

    if(pnombre == "") {
        alert("El campo 'Nombre' es obligatorio")
        valida = false
        document.getElementById("com_nombre").focus        
    } else 
        if (pemail == "") {
            alert("El campo 'Correo' es obligatorio")
            valida = false
            document.getElementById("com_email").focus          
        } else 
            if (ptelefono == "") {
                alert("El campo 'Teléfono' es obligatorio")
                valida = false
                document.getElementById("com_telefono").focus          
            } else 
                if (pmotivo == "") {
                    alert("El campo 'Motivo' es obligatorio")
                    valida = false
                    document.getElementById("com_motivo").focus          
                } else 
                    if (ptxtmotivo == "") {
                        alert("La 'Descripcion de Motivo' es obligatoria")
                        valida = false
                        document.getElementById("com_txt_motivo").focus          
                    }

    if (valida == true) {
        alert(`Muchas gracias ${pnombre}. Hemos recibido tu sugerencia y enviaremos una pronta respuesta al correo ${pemail}`)
    }    

}

function envia_reservas() {
    $(document).ready(function() {
        alert(`Estimado(a): ${$("#res_nombre").val()}.\nAgradecemos por reservar con nosotros.\nHemos registrado ${$("#res_asistentes").val()} asistente(s).\nSe ha enviado el código de confirmación al correo ${$("#res_email").val()}.\nGracias por preferirnos`)
    })
    
}

$(document).ready(function() {
    $('.card-img-top').click(function() {
      var imgSrc = $(this).attr('src');
      var title = $(this).siblings('.card-body').find('.card-title').text();
      var text = $(this).siblings('.card-body').find('.card-text').text();
      $('#modal-img').attr('src', imgSrc);
      $('#modal-title').text(title);
      $('#modal-text').text(text);
      $('#myModal').modal('show');
      $('body').addClass('modal-open');
    });

    $('#myModal').on('hidden.bs.modal', function() {
        $('body').removeClass('modal-open');
    });
});
  
function closeModal() {
    $('body').addClass('modal-open');
    $('#myModal').modal("hide")
}