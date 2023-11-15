import React, { useState } from "react";
import { createMessage } from "../api/fetch";
import { useNavigate } from "react-router";
import { postsObjInitializer } from "../interfaces/fetchingObjInitializer";


function PostNewForm() {
  const [singlePost, setSinglePost] = useState(postsObjInitializer);
  const nav = useNavigate();

  const handleTextChange = (event) => {
    setSinglePost({ ...singlePost, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const timeStamp = Date.now()/1000;
    setSinglePost({ ...singlePost, time_stamp: timeStamp });
    console.log(singlePost);
    createMessage(singlePost)
      .then(() => {
        console.log("create success!");
        nav("/posts");
      })
      .catch((err) => console.error(err));
  };


  /*
    const handleCheckboxChange = () => {
        setSinglePost({ ...singlePost, is_favorite: !song.is_favorite });
      };
*/
  
  return (
    <div className="new-entry-container">
      <form className="new-entry-form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="user_name">
          Name:
        </label>
        <input
          className="form-input"
          id="user_name"
          value={singlePost.user_name}
          type="text"
          onChange={handleTextChange}
          placeholder="user name"
          required
        />
        <label className="form-label" htmlFor="thread_message">
          Message:
        </label>
        <textarea
          className="form-textarea"
          id="thread_message"
          value={singlePost.thread_message}
          placeholder="message"
          onChange={handleTextChange}
          required
        />
        <label className="form-label" htmlFor="profile_pic">
          Profile:
        </label>
        <input
          className="form-input"
          id="profile_pic"
          value={singlePost.profile_pic}
          type="text"
          onChange={handleTextChange}
          placeholder="profile_picture link"
        />
        <br />
        <input className="form-submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default PostNewForm;