import React, { useState, useEffect } from "react";
import axios from "axios";

function Card2() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://apod.nasa.gov/apod/image/2402/a14pan9335-43emj_900.jpg")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="card">
        <img className="card-img" src="#" alt="cap" />
        <div className="card-body">
          <h4 className="card-title">Card2</h4>
          <p className="card-text">Description</p>
        </div>
        <div>
          <a href="#">
            Card link
          </a>
        </div>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Card2;
