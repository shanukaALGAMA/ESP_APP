import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [chat, setChat] =useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://dht-moist-lcd.vercel.app/api/messages', { message });
      setStatus(`Message sent: ${response.data.message}`);
      setMessage('');
    } catch (error) {
      setStatus('Error sending message');
      console.error(error);
    }
  };

  const handleFetch = async (e) => {
    e.preventDefault();
    try {
      const response1 = await axios.get('https://dht-moist-lcd.vercel.app/api/messages');
      setChat(response1.data.message);
      console.info(chat);
    }catch(error){
      setChat('Error sending message');
      console.error(error);
    }
    
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>ESP32 Message Sender</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message for ESP32"
          style={{ padding: '8px', width: '300px' }}
        />
        <button type="submit" style={{ padding: '8px 16px', marginLeft: '10px' }}>
          Send
        </button>
      </form>
      {status && <p>{status}</p>}
      <button onClick={handleFetch} type="fetch" style={{ padding: '8px 16px', marginLeft: '10px' }}> 
        fetch
      </button>
      {chat && <p>{chat}</p>}
    </div>
  );
}

export default App;
