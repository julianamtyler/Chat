const socket = io();

const allMessages = function(){
$.ajax({url: '/all-messages', method: 'GET'})
.then(function(allChat){
    allChat.forEach(e =>{$(`#allChat`).append(`<div>${e.name}:${e.message}</div>`)})
});
}
allMessages();

const sendMessage = function(event){
    event.preventDefault();
    const message = $('#message').val();
    $('#allChat').append($(`<div>${name}:${message}</div>`))
    $.post('/new-msg',{name: name, message: message})
  
    console.log(message)
    socket.emit('new-message', {message: message, user1 : name, user2:user2})
}

socket.on('emit-message',function(data){
    console.log(data);
})
$('#send-msg').on('click',sendMessage)


/* -------------------------------- */

let name;
let user2;

const sendName = function(event){
    event.preventDefault();
    name = $('#name').val();
    socket.emit('new-name', {name: name});
}

socket.on('emit-users',function(data){
    //only emit names if name is typed in for user
    if(name){
        const $select = $('<select>');
        $select.append('<option> Select User</option>')
        console.log(data);
        data.forEach(e => $select.append(`<option>${e}</option>`))
        $('#select-container').empty();
        $('#select-container').append($select);
    }
})

$('#send-name').on('click', sendName);


/* ---------------start chat------------- */

const startChat = function(event){
    event.preventDefault();
    //empty chat area
    user2 = $('select').find(':selected').text();
}
$('#select-container').on('change', 'select', startChat)