import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Post({ post, index }) {
  return (
    <Link to={`/posts/${post.id}`}>
        <div className="card">
            <h5 className="card-header">{/* title should b here */}</h5>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p class="card-text">{/** message should b here */}</p>
            </div>
        </div>
    </Link>
   
  );
}

export default Post;