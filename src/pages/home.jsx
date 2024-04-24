// Home.js
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "./navbar";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://apitest.reachstar.io/blog/list")
      .then(function (response) {
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            {posts.map((post, index) => (
              <div key={index} className="card mb-3">
                <div className="card-header">
                  <h3 className="card-title">{post.title}</h3>
                </div>
                <div className="card-body">
                  <p className="card-text">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
