// stores all the user details those are connected

const connectedUsers  = new Map();

const addNewConnectedUser = ({socketId , username})=>{
    connectedUsers.set(socketId ,{username});
    console.log('new user connected');
    console.log(connectedUsers)

}
module.exports = {
    addNewConnectedUser
}