import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "./navbar";
import { useParams } from "react-router-dom";


function Details() {
  const [posts, setPosts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios.get("https://apitest.reachstar.io/blog/get/" + id)
      .then(function (response) {
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, );

  return (
    <React.Fragment>
       <Navbar />
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">{posts.title}</h3>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{posts.description}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Details;
