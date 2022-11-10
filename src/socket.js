import {io} from 'socket.io-client';


export const initSocket = async() => {
    const options = {
        transports: ['websocket'],
        'force new connection': true,
        reconnectionAttempts: Infinity,
        timeout: 10000,
    };

    return io(process.env.REACT_APP_BACKEND_URL, options)
}