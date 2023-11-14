import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postsObjInitializer } from "../interfaces/fetchingObjInitializer";
import "./Post.css";

function Post({ post, index }) {
    return (
        <Link to={`/posts/${post.thread_id}`}>
            <div className="card">
                <div className="card-header">
                    <img className="profile_pic" src={post.profile_pic ? post.profile_pic : "src/assets/default_profile_pic.jpeg"}/>
                    <span className="user_name">{post.user_name}</span>
                </div>
                <div className="card-body">
                    <span className="time_stamp">{new Date(Number(post.time_stamp) * 1000).toLocaleString()}</span>
                    {post.message_pic ? (<img className="card-img-top" src={post.message_pic} />) : null}
                    <p class="card-text">{post.thread_message}</p>
                </div>
            </div>
        </Link>

    );
}

export default Post;