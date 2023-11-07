import React, { useEffect, useState } from "react";
import Post from "./Post"; 

const API = import.meta.env.VITE_BASE_URL;

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${API}/posts`)
        .then((response) => response.json())
        .then ((responseJSON) => {
            console.log(responseJSON)
            setPosts(responseJSON.data.payload);
        })
        .catch((error) => console.log(error));
    }, []);
    return (
        <div className="posts-container">
            <h2>All Posts</h2>
            <table className="posts-table">
                <tbody>
                    {posts.map((post) => {
                    return <Post key={post.id} post={post} />
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Posts