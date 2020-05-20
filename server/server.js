const express = require('express');
const app = express();
const sockets = require('socket.io');

const server = app.listen(8004, () => {
    console.log('sockets on 8004')
})

const io = sockets(server);
io.on("connection", socket => {
    console.log(socket.id);
    // console.log(socket);

    socket.on("message-from-client", (data) => {
        console.log(data);
    })

    // sends to just one client
    socket.emit("message-from-server", {"key": "value"})

    // sends to all
    io.emit();

    // sends to all but the client that initiated contact
    socket.broadcast.emit();
});