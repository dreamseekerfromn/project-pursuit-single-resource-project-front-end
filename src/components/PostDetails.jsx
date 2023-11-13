import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postsObjInitializer, replysObjInitializer } from "../interfaces/fetchingObjInitializer";
import "./Post.css";
import { getAllReplies } from "../api/fetch";

function Post({ post, index }) {
    const [replies, setReplies] = useState([replysObjInitializer]);
    useEffect(() => {
        getAllReplies()
        .then ((responseJSON) => {
            console.log(responseJSON)
            setPosts(responseJSON.data.payload);
        })
        .catch((error) => console.log(error));
    }, []);

    return (
            <div className="card">
                <div className="card-header">
                    <img className="profile_pic" src={post.profile_pic ? post.profile_pic : "src/assets/default_profile_pic.jpeg"}/>
                    <span className="user_name">{post.user_name}</span>
                </div>
                <div className="card-body">
                    <span className="time_stamp">{Date(Number(post.time_stamp) * 1000).toLocaleString()}</span>
                    {post.message_pic ? (<img className="card-img-top" src={post.message_pic} />) : null}
                    <p class="card-text">{post.thread_message}</p>
                </div>
                <div className="card-body">
                    
                </div>
            </div>

    );
}

export default Post;