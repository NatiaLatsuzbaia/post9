// Posts.js
import React, { useState } from "react";
import axios from 'axios';
import Navbar from "./navbar";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; // Import editor styles
import {Link} from "react-router-dom"

function Posts() {
  const [newPost, setNewPost] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const addPost = () => {
    axios.post("https://apitest.reachstar.io/blog/add", newPost)
      .then(function (response) {
        // No need to handle posts here, as it's managed in the Home component
        setNewPost({ title: "", description: "" }); // Clear the input fields
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Navbar/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="form-group">
              <input type="text" placeholder="Title" name="title" value={newPost.title} onChange={handleInputChange} className="form-control mb-3" />
              <textarea placeholder="Description" name="description" value={newPost.description} onChange={handleInputChange} className="form-control mb-3" />
              <Link to="/home" className="btn btn-primary" onClick={addPost}>Add</Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Posts;
