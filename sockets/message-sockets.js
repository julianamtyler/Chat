const user = {

}

module.exports = function (io) {
    io.on('connection', function (socket) {
        //SOCKET ROUTES 

        socket.on('new-name', function (data) {
            console.log(data);
            user[data.name] = socket;//see what [data.name] is value as
            io.emit('emit-users', Object.keys(user)); //takes all object properties and finds users property to share with all
        })
        socket.on('new-message', function (newData) {
            console.log(newData);
            console.log(Object.keys(user));
            
            const socket1 = user[newData.user1]
            const socket2 = user[newData.user2]
            console.log(newData);
            socket1.emit('emit-message', newData);
            socket2.emit('emit-message', newData);
        })
    });
}
