import React from "react";

const CreatePost = () => {
  return (
    <div className="create-post">
      <div className="upload-post">
        <h1>Create a Post:</h1>
        <input type="text" />
        <input type="text" />
        <input type="date" />
        <textarea />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default CreatePost;
