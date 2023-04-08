const jwt = require('jsonwebtoken');

const config = process.env;


const VerifySocketToken = (socket , next)=>{
    const token =  socket.handshake.auth?.token;
    console.log(token)
    console.log("inside verify socker token")
    try{
        const decoded = jwt.verify(token , config.SECRET_KEY);
        console.log("DECODED DATA")
        console.log(decoded)
        socket.user  = decoded;
        
    }
    catch(err){
        const socketError = new Error("NOT AUTHORIZED");
        return next(socketError);
    }
}   

module.exports = VerifySocketToken
