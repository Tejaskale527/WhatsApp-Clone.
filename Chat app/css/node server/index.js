// node server which will handle socket io connection

const { Socket } = require('socket.io')

const io = require('socket.io')(8000)

const users = {}

io.on('connection', Socket=>{

    // If any new user join let other user connected to the server

Socket.on('new-user-joined', name=>{
   // console.log("New user", name);
    user[Socket.id]= name;
    Socket.broadcast.emit('user-joined',name);

});

// If someone send a message broadcast it to other people

socket.on('send', message=>{
    socket.broadcast.emit('recieve', { message, name: users[socket.id]})
});

// If someone leave that chat, other know

socket.on('disconnect', message=>{
    socket.broadcast.emit('left', users[socket.id]);
    delete users[socket.id];
});
 
})