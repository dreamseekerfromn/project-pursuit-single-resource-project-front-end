import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createReply } from "../api/fetch";

export default function PostSingleReply() {
  const { id } = useParams();
  const [singleReply, setSingleReply] = useState({
    thread_id: id,
    reply_user: "",
    reply_message: "",
    reply_timestamp: Date.now() / 1000,
    reply_pw: "",
  });
  const nav = useNavigate();

  const handleTextChange = (event) => {
    setSingleReply({ ...singleReply, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let timeStamp = Date.now() / 1000;
    setSingleReply({ ...singleReply, ["reply_timestamp"]: timeStamp });
    await createReply(singleReply)
      .then(() => {
        console.log("create success!");
        nav(0);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="new_entry">
      <h2 className="reply-heading">Reply to Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="reply_user">Name:</label>
        <input
          id="reply_user"
          value={singleReply.reply_user}
          type="text"
          onChange={handleTextChange}
          placeholder="User Name"
          required
        />
        <label htmlFor="reply_pw">Password:</label>
        <input
          id="reply_pw"
          value={singleReply.reply_pw}
          type="text"
          onChange={handleTextChange}
          placeholder="Password (optional)"
        />
        <label htmlFor="reply_message">Message:</label>
        <textarea
          id="reply_message"
          value={singleReply.reply_message}
          placeholder="Your reply message"
          onChange={handleTextChange}
          required
        />
        <br />
        <input type="submit" value="Submit Reply" />
      </form>
    </div>
  );
}
