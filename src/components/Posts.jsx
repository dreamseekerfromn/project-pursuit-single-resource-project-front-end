import React, { useEffect, useState } from "react";
import Post from "./Post"; 
import { postsObjInitializer } from "../interfaces/fetchingObjInitializer";
import { getAllMessages } from "../api/fetch";
import './Posts.css'

function Posts() {
    const [posts, setPosts] = useState([postsObjInitializer]);

    useEffect(() => {
        getAllMessages()
        .then ((responseJSON) => {
            console.log(responseJSON)
            setPosts(responseJSON.data.payload);
        })
        .catch((error) => console.log(error));
    }, []);
    return (
        <div className="posts-container">
            <h2>All Posts</h2>
                    {posts.map((post) => <Post key={post.thread_id} post={post} />)}
        </div>
    )
}
export default Posts
