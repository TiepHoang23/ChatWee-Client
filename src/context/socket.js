import { createContext } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();
function ConnectSocket() {
  const token = JSON.parse(localStorage.getItem('data')).token;
  if (token) {
    return io('http://localhost:8000/chat', {
      auth: {
        token,
      },
    });
  }

  return io('http://localhost:8000/chat');
}

export const socket = ConnectSocket();
