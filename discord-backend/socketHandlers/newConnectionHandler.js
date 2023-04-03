const {addNewConnectedUser} = require('../serverStore')
const newConnectionHandler = async (socket ,io)=>{
    const user = socket.user;

    serverStore.addNewConnectedUser({
        socketId: socket.id ,
        userId : userDetails.userId
    })
}

module.exports = newConnectionHandler;