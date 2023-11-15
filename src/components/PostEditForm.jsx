import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const URL = import.meta.env.VITE_APP_API_URL;

function PostEditForm() {
    const {id} = useParams();
    const [post, setPost] = useState({
      thread_id: 0,
      user_id: 0,
      user_name: "",
      time_stamp: Date.now(),
      thread_message: "",
      profile_pic: "",
      message_pic: "",
    });
    const navigate = useNavigate();
    
    const handleTextChange = (event) => {
        setPost({ ...post, [event.target.id]: event.target.value });
    };

    // const handleCheckboxChange = () => {
    //     setPost({ ...post, });
    //   };

    useEffect(() => {
        fetch(`${URL}/posts/${id}`)
          .then((response) => response.json())
          .then((fetchedpost) => {
            console.log(fetchedpost)
            setPost(fetchedpost);
          })
          .catch(() => navigate("/not-found"));
      }, [id, navigate]);

      const updatePost = () => {
        const httpOptions = {
          method: "PUT",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json",
          },
        };
    
        fetch(`${URL}/posts/${id}`, httpOptions)
          .then(() => {
            alert(`${post.user_name}'s post has been updated!`);
            navigate(`/posts/${id}`);
          })
          .catch((err) => console.error(err));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        updatePost();
      };

      return (
        <div className="Edit">
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Username</label>
            <input
              id="username"
              type="text"
              value={post.user_name}
              onChange={handleTextChange}
              placeholder="Username of person posting"
              required
            />
            <label htmlFor="message">Post Message</label>
            <input
              id="postMessage"
              type="text"
              value={post.thread_message}
              onChange={handleTextChange}
              placeholder="Message for the Post"
              required
            />
            <label htmlFor="postPicture">Post Picture</label>
            <input
              id="postPicture"
              type="text"
              value={post.message_pic}
              placeholder="Link to picture for Post"
              onChange={handleTextChange}
            />
            <label htmlFor="profilePic">Profile Picture</label>
            <input
              id="is_favorite"
              type="checkbox"
              checked={post.profile_pic}
              placeholder="Link to a profile picture of the user"
              onChange={handleTextChange}
            />
            <br />
            <input type="submit" className="submit-button" />
          </form>
          <Link to={`/posts/${id}`}>
            <button className="button">Go Back</button>
          </Link>
        </div>
      );
    }
    
export default PostEditForm;