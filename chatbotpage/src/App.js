import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ChatWindow from './Components/ChatWindow';
import InputField from './Components/InputField';  // Import the InputField component

function App() {
  const [messages, setMessages] = useState([
    { sender: 'user', text: 'Send a Message' },
    { sender: 'bot', text: 'Wasguud' }
  ]);

  const handleSendMessage = (newMessageText) => {
    const newMessage = { sender: 'user', text: newMessageText };
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  return (
    <div className="App">
      <ChatWindow messages={messages} />
      <InputField onSendMessage={handleSendMessage} />  {/* Render the InputField component and pass the handleSendMessage function as a prop */}
    </div>
  );
}

export default App;
