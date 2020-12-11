import React, { useState, useEffect } from "react";
import axios from "axios";

const CreatePost = () => {
  const [userName, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const submitPost = () => {
    axios.post("http://localhost:3001/api/create", {
      userName,
      title,
      text,
      date,
    });

    // setUsername("");
    // setTitle("");
    // setText("");
    // setDate("");
  };

  return (
    <div className="create-post">
      <div className="upload-post">
        <h1>Create a Post:</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Name..."
        />
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title..."
        />
        <input onChange={(e) => setDate(e.target.value)} type="date" />
        <textarea
          onChange={(e) => setText(e.target.value)}
          placeholder="Comments..."
        />
        <button onClick={submitPost}>Submit</button>
      </div>
    </div>
  );
};

export default CreatePost;
