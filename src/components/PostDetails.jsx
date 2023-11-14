import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { postsObjInitializer, replysObjInitializer } from "../interfaces/fetchingObjInitializer";
import "./Post.css";
import { getAllReplies, getSingleMessage } from "../api/fetch";
import PostSingleReply from "./PostSingleReply";
import SingleReply from "./SingleReply";

function PostDetails() {
    const [ replies, setReplies ] = useState([{...replysObjInitializer}]);
    const [ post, setPost ] = useState({thread_id: 0,
        user_id: 0,
        user_name: "",
        time_stamp: Date.now(),
        thread_message: "",
        profile_pic: "",
        message_pic: ""});
    const [ ready, setReady ] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        getSingleMessage(id)
        .then ((responseJSON) => {
            console.log(responseJSON)
            setPost(responseJSON.data.payload);
            setReady(true);
        })
        .catch((error) => console.log(error));

        getAllReplies(id)
        .then ((responseJSON) => {
            console.log(responseJSON)
            setReplies(responseJSON.data.payload);
        })
        .catch((error) => console.log(error));
    }, []);

    return (
            <div className="card">
                {ready ? (<>
                <div className="card-header">
                    {/*<img className="profile_pic" src={post["profile_pic"] ? post.profile_pic : "src/assets/default_profile_pic.jpeg"}/>*/}
                    <span className="user_name">{post.user_name}</span>
                </div>
                <div className="card-body">
                    <span className="time_stamp">{new Date(Number(post.time_stamp) * 1000).toLocaleString()}</span>
                    {post.message_pic ? (<img className="card-img-top" src={post.message_pic} />) : null}
                    <p class="card-text">{post.thread_message}</p>
                </div>
                <div className="card-body">
                    {replies.map((reply) => <SingleReply reply={reply} />)}
                    <PostSingleReply />
                </div></>) : (<p>still loading stuff</p>)}
            </div>

    );
}

export default PostDetails;