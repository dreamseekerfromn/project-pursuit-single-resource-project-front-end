import React, { useEffect, useState } from "react";
import Post from "./Post";
import { postsObjInitializer } from "../interfaces/fetchingObjInitializer";
import { getAllMessages } from "../api/fetch";
// import './Posts.css'

function Posts() {
    const [posts, setPosts] = useState([postsObjInitializer]);
    const [totalPosts, setTotalPosts] = useState(0);
    useEffect(() => {
        getAllMessages()
            .then((responseJSON) => {
                console.log(responseJSON)
                setPosts(responseJSON.data.payload);
                setTotalPosts(responseJSON.data.payload.length)
            })
            .catch((error) => console.log(error));
    }, []);

    /** fetching to the back-end every 5sec for reloading new posts */
    useEffect(() => {
        const timeout = setInterval(() => {
            getAllMessages()
                .then((responseJSON) => {
                    console.log(responseJSON)
                    setPosts(responseJSON.data.payload);
                })
                .catch((error) => console.log(error));
        }, 5000);

        return () => clearInterval(timeout);
    }, [posts]);



    return (
        <div className="posts-container">
            <h2 className="indexTitle">Total Posts: {totalPosts}</h2>
            {posts.sort((prev, next) => prev.time_stamp >= next.time_stamp ? -1 : 1).map((post) => <Post key={post.thread_id} post={post} />)}
        </div>
    )
}
export default Posts
