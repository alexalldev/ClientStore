var socket = io.connect();

$(document).ready(function() {
    $("#btnSendId").click(function() {
        socket.emit('GetId');
    });
})

socket.on('RecieveId', function (id) {
    Swal.fire("Id is ", "" + id, 'success');
});