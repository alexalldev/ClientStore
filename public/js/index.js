var socket = io.connect();

$(document).ready(function() {
    $("#btnGetId").click(function() {
        socket.emit('GetId');
    });

    $("#formSendToId").submit(function() {
        socket.emit('SendToId', {
            id: $("#SendInput").val(),
            message: $("#SendText").val()
        });
    });
    
})

socket.on('RecieveId', function (id) {
    $('.Id').text(id);
    animateCSS('.Id', 'bounceOutRight', function() {
        animateCSS('.Id', 'bounceInLeft');
    }); 
});

socket.on('message', function (message) {
    Swal.fire("Message sent to you", message, "info");
});

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}