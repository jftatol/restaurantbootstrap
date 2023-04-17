$(document).ready(function() {
    $('.popup-img').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: true,
        fixedContentPos: true,
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        },
        callbacks: {
            open: function() {
                // Bloquear el scroll de la página
                $('body').addClass('locked-scroll');
            },
            close: function() {
                // Desbloquear el scroll de la página
                $('body').removeClass('locked-scroll');
            }
        }
    });
});