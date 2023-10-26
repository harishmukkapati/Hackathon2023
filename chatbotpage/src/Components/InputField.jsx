import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InputField.css';

function InputField({ onSendMessage }) {
    const [message, setMessage] = useState('');

    const handleSendMessage = (event) => {
        event.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <div className="input-field container">
            <form onSubmit={handleSendMessage}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">Send</button>
                </div>
            </form>
        </div>
    );
}

export default InputField;
