// npm install socket.io-client
// npm install -D @types/socket.io-client



import io from 'socket.io-client';
import type { Socket } from 'socket.io-client';

let socket: ReturnType<typeof io>;
export function connectSocket(token: string) {
  socket = io('https://sua-api.com', {
    auth: { token }
  });
  return socket;
}
export function getSocket() { return socket; }