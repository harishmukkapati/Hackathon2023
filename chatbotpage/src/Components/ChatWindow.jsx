import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChatWindow.css';

function ChatWindow({ messages }) {
    return (
        <div className="chat-window container">
            <div className="header p-3">
                Chat with Office Hours
            </div>
            <div className="message-list p-3">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender === 'user' ? 'user-message text-end' : 'bot-message text-start'}`}>
                        <div className={`message-text ${message.sender === 'user' ? 'bg-user text-white' : 'bg-bot text-dark'} p-2 rounded`}>
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatWindow;
