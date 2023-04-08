import io from 'socket.io-client';

let socket : any = null;

export const connectWithSocketServer = (userDetails : any)=>{
    socket  = io('http://localhost:3000');


    socket.on('connect' , ()=>{
        console.log('succcessfully connected with socket.io server')
        console.log(socket.id)
    })
}