import io from 'socket.io-client';

const socket = io('http://localhost:5453');

function subscribeToHealthcheck(callback) {
  socket.on('healthcheck', response => callback(null, response));
}

export { subscribeToHealthcheck };
