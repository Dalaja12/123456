
// Abre el modal de chat
document.getElementById('chat-btn').onclick = function() {
    document.getElementById('chat-modal').classList.add('show');
};

// Cierra el modal de chat
function closeChatModal() {
    document.getElementById('chat-modal').classList.remove('show');
}

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBd8VEqwpRCytHpmPTOGAn7vfJVpZknpbg",
    authDomain: "inscripciones-bbaf3.firebaseapp.com",
    projectId: "inscripciones-bbaf3",
    storageBucket: "inscripciones-bbaf3.appspot.com",
    messagingSenderId: "679964288319",
    appId: "1:679964288319:web:e33df3d48d5cce0ee1df8a",
    measurementId: "G-24SRJMJYKZ"
  };

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Referencia al chat en la base de datos
var chatRef = firebase.database().ref('chat');

// Enviar un mensaje
function sendMessage() {
    var message = document.getElementById('chat-input').value;
    chatRef.push().set({
        "message": message
    });
    document.getElementById('chat-input').value = '';
}

// Mostrar mensajes en tiempo real
chatRef.on('child_added', function(snapshot) {
    var message = snapshot.val().message;
    var messageElement = document.createElement('div');
    messageElement.textContent = message;
    document.getElementById('chat-messages').appendChild(messageElement);
});

