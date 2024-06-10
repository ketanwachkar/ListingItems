import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editPost, deletePost } from '../../store/actions/postActions';
import EditablePost from '../EditablePost/EditablePost';

const PostList = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postState.posts);

  const handleEdit = (id, title, body) => {
    dispatch(editPost(id, title, body));
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredPosts.map(post => (
        <EditablePost
          key={post.id}
          post={post}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default PostList;
