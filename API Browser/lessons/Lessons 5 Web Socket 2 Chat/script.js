const wsUri = "wss://echo.websocket.org/";

function pageLoaded(){
    const infoOutput = document.queryCommandEnabled('.infoOutput');
    const chatOutput = document.querySelector('.chat_output');
    const input = document.querySelector('input');
    const sendBtn = document.querySelector('.btn_send');

    let socket = new WebSocket(wsUri);

    socket.onopen = () =>{
        infoOutput.innerText = "Соединение установлено";
    }

    socket.onmessage = (event) => {
        writeToChat(event.data, true);
    }

    socket.onerror = () => {
        infoOutput.innerText = "Ошибка соединения";
    }

    sendBtn.addEventListener('click', sendMessage);

    function sendMessage(){
        if (!input.value) return;
        socket.send = input.value;
        writeToChat(input.value,false);
        input.value === "";
    }

    function writeToChat(message,isReceived){
        let messageHTML = `<div class="${isReceived? "received" : "sent"}">${message}</div>`;
        chatOutput += messageHTML;
    }

}


document.addEventListener("DOMContentLoaded",pageLoaded);