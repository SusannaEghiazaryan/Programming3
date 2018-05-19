function main() {
    var socket = io.connect('http://localhost:3000');
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    /*function delmassege(a)
    {
     socket.emit("uzum em lriv jnjem");
    }*/
    button.onclick = handleSubmit;
    //del.onclick =delmassege;
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    socket.on('display message', handleMessage);
}

    /*function deleteTags(){
        //https://www.w3schools.com/jquery/jquery_dom_remove.asp
    }


    socket.on("dhima el teqstery du jnji", deleteTags);
}*/

window.onload = main;
