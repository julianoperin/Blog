import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const MainPage = () => {
  const [postList, setPostList] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((response) => {
      const listOfPosts = response.data;
      console.log(listOfPosts);
      setPostList(listOfPosts);
    });
  }, []);

  const likePost = (id) => {
    axios.post(`http://localhost:3001/api/like${id}`).then((response) => {
      console.log("You liked the post!");
    });
  };

  return (
    <div className="main-page">
      <div className="post-container">
        {postList.map((post) => {
          return (
            <div
              key={post.id}
              className="post"
              onClick={() => {
                history.push(`/post/${post.id}`); //! Grabbing the ID and pushing/storing in the post component with useParams...
              }}
            >
              <h2>{post.title}</h2>
              <p>
                {post.post_text > 200
                  ? post.post_text.substring(0, 200) + "..."
                  : post.post_text}
              </p>
              <h4>{post.user_name}</h4>
              <span>
                {post.date_posted !== null
                  ? post.date_posted
                  : "The Date is not Available"}
              </span>
              <input className="input-update" type="text" />
              <div className="btns">
                <button>Update</button>
                <button>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
