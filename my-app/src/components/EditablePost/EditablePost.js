import React, { useState } from "react";
import "./EditablePost.css";

const EditablePost = ({ post, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedBody, setEditedBody] = useState(post.body);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(post.id, editedTitle, editedBody);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(post.title);
    setEditedBody(post.body);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="post-view">
        <div className="discription-area">
          <h3>Title : {post.title}</h3>
          <p>Body : {post.body}</p>
        </div>

        <div className="edit-delete-button">
          <button className="edit-button" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete-button" onClick={() => onDelete(post.id)}>
            Delete
          </button>
        </div>
      </div>

      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Post</h2>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              style={{ height: "7rem" }}
              value={editedBody}
              onChange={(e) => setEditedBody(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditablePost;
