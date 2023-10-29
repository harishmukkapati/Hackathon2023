"use client";
// YourComponent.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './search.module.css'; // Import your CSS styles

Modal.setAppElement('#root'); // Replace '#root' with the root element of your app

function YourComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Rest of your component code (including renderSuggestions)

  return (
    <div>
      {renderSuggestions()}
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Course In Development Modal"
      >
        <h2>Course In Development</h2>
        <p>This course is currently in development.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default YourComponent;
