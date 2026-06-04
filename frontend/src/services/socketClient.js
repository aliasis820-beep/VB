import { io } from 'socket.io-client';
import { BACKEND_URL } from '../config';

const backendUrl = BACKEND_URL;
const token = localStorage.getItem('vb_token');

const socket = io(backendUrl, {
  autoConnect: false,
  transports: ['websocket'],
  auth: { token },
});

export default socket;
