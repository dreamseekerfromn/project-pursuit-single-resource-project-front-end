import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postsObjInitializer } from "../interfaces/fetchingObjInitializer";

function Post({ post, index }) {
    return (
        <Link to={`/posts/${post.thread_id}`}>
            <div className="card">
                <h5 className="card-header">{/* title should b here */}</h5>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    {post.message_pic ? (<img className="card-img-top" src={post.message_pic} />) : null}
                    <p class="card-text">{post.thread_message}</p>
                </div>
            </div>
        </Link>

    );
}

export default Post;