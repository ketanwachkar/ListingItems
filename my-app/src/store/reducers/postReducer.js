const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload,
      };
    case 'EDIT_POST':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id
            ? { ...post, title: action.payload.title, body: action.payload.body }
            : post
        ),
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};
