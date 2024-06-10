import React, { useState } from 'react';
import './AddPostModal.css';

const AddPostModal = ({ isOpen, onRequestClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleAdd = () => {
    if (title && body) {
      onAdd(title, body);
      setTitle('');
      setBody('');
      onRequestClose();
    }
  };

  const handleCancel = () => {
    setTitle('');
    setBody('');
    onRequestClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
        style={{ height: "7rem" }}
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default AddPostModal;
