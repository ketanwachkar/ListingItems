export const SET_POSTS = 'SET_POSTS';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts
});

export const editPost = (id, title, body) => ({
  type: EDIT_POST,
  payload: { id, title, body }
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id
});
