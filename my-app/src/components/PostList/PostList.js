import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editPost, deletePost } from '../../store/actions/postActions';
import EditablePost from '../EditablePost/EditablePost';
import AddPostModal from '../AddPostModal/AddPostModal';

import "./PostList.css";

const PostList = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postState.posts);
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (id, title, body) => {
    dispatch(editPost(id, title, body));
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const handleAdd = (title, body) => {
    const newPost = {
      id: Math.max(...posts.map(post => post.id)) + 1,
      title,
      body
    };
    dispatch({ type: 'ADD_POST', payload: newPost });
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <button className='add-new-post-btn' onClick={() => setIsAdding(true)}>Add New Post</button>
      <AddPostModal
        isOpen={isAdding}
        onRequestClose={() => setIsAdding(false)}
        onAdd={handleAdd}
      />
      {filteredPosts.map((post, index) => (
        <EditablePost
        key={post.id}
        post={post}
        onEdit={handleEdit}
        onDelete={handleDelete}
        className={index % 2 === 0 ? 'even' : 'odd'}
        />
      ))}
    </div>
  );
};

export default PostList;
