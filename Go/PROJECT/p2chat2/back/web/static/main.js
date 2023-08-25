var socket = new WebSocket("ws://localhost:8080/ws");

socket.onmessage = function(event) {
    // 处理收到的消息
    window.alert(event)
};

function sendMessage() {
    var message = document.getElementById("message").value;
    socket.send(message);
}
