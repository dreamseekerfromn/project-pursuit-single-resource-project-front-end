import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { postsObjInitializer, replysObjInitializer } from "../interfaces/fetchingObjInitializer";
import { getAllReplies, getSingleMessage } from "../api/fetch";
import PostSingleReply from "./PostSingleReply";
import SingleReply from "./SingleReply";
const URL = import.meta.env.VITE_APP_API_URL;

function PostDetails() {
  const [replies, setReplies] = useState([{ ...replysObjInitializer }]);
  const [post, setPost] = useState({});
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getSingleMessage(id)
      .then((responseJSON) => {
        console.log(responseJSON);
        setPost(responseJSON.data.payload);
        setReady(true);
      })
      .catch((error) => console.log(error));

    getAllReplies(id)
      .then((responseJSON) => {
        console.log(responseJSON);
        setReplies(responseJSON.data.payload);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = () => {
    const httpOptions = { method: "DELETE" };

    fetch(`${URL}/posts/${id}`, httpOptions)
      .then((res) => {
        console.log(res);
        alert("Post was deleted successfully!");
        navigate('/posts');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="card">
      {ready ? (
        <>
          <div className="card-header">
            {<img className="profile_pic" src={post.profile_pic ? post.profile_pic : "../src/assets/default_profile_pic.jpeg"} />}
            <span className="user_name">{post.user_name}</span>
          </div>
          <div className="card-body">
            <span className="time_stamp">{new Date(Number(post.time_stamp) * 1000).toLocaleString()}</span>
            {post.message_pic ? <img className="card-img-top" src={post.message_pic} alt="Post" /> : null}
            <p className="card-text">{post.thread_message}</p>
          </div>
          <div>
            {" "}
            <Link to={`/posts`}>
              <button className="button">Back</button>
            </Link>
          </div>
          <div>
            {" "}
            <button onClick={handleDelete} className="button" style={{ padding: "10px" }}>
              Delete
            </button>
          </div>
          <div className="card-body">
            {replies.sort((prev, next) => (prev.time_stamp >= next.time_stamp ? -1 : 1)).map((reply) => (
              <SingleReply reply={reply} key={reply.reply_id} />
            ))}
            <PostSingleReply />
          </div>
        </>
      ) : (
        <p>still loading stuff</p>
      )}
    </div>
  );
}

export default PostDetails;
