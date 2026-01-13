'use client';

import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

let socket: Socket;

export default function ChatPage() {
  const [userId, setUserId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    socket = io('http://localhost:3000');

    socket.on('receive_message', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const registerUser = () => {
    socket.emit('register', userId);
  };

  const sendMessage = () => {
    const payload = {
      senderId: userId,
      receiverId,
      message,
    };

    socket.emit('private_message', payload);
    setMessages((prev) => [...prev, payload]);
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center">
      <div className="w-full max-w-md bg-slate-800 p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Real-Time Chat</h1>

        <input
          placeholder="Your User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-slate-700"
        />
        <button
          onClick={registerUser}
          className="w-full bg-emerald-500 p-2 rounded mb-3"
        >
          Register
        </button>

        <input
          placeholder="Receiver User ID"
          value={receiverId}
          onChange={(e) => setReceiverId(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-slate-700"
        />

        <div className="h-48 overflow-y-auto bg-slate-700 p-2 rounded mb-2">
          {messages.map((msg, i) => (
            <div key={i} className="mb-1">
              <b>{msg.senderId}:</b> {msg.message}
            </div>
          ))}
        </div>

        <input
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-slate-700"
        />

        <button
          onClick={sendMessage}
          className="w-full bg-blue-500 p-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
