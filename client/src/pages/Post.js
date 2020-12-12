import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  let { postId } = useParams(); //! Got the ID from the useHistory
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/getFromId/${postId}`)
      .then((response) => {
        const singlePost = response.data;
        setPost({
          title: response.data[0].title,
          postText: response.data[0].post_text,
          userName: response.data[0].user_name,
          date: response.data[0].date_posted,
        });
      });
  }, []);
  const { title, post_text, user_name, date_posted, id } = post;

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>
        {post.postText > 200
          ? post.postText.substring(0, 200) + "..."
          : post.postText}
      </p>
      <h4>{post.userName}</h4>
      <span>
        {post.date !== null ? post.date : "The Date is not Available"}
      </span>
    </div>
  );
};

export default Post;
