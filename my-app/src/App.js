import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "./store/actions/postActions";
import PostList from "./components/PostList/PostList";
import Stopwatch from "./components/Stopwatch/Stopwatch";

import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const post = useSelector(state => state.postState.posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      dispatch(setPosts(data));
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <div>
      {/* <div> */}
      <div className="HeadTag">
        <h1>Posts Listing : {post.length}</h1>
        <div className="InputTag">
          <input
          className='search-input'
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Stopwatch />
      </div>

      <PostList searchQuery={searchQuery} />
    </div>
  );
};

export default App;
