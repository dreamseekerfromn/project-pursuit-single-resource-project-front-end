import { useState } from "react";
import { createMessage } from "../api/fetch";
import { useNavigate } from "react-router";
import { postsObjInitializer } from "../interfaces/fetchingObjInitializer";

/**
 * PostNewForm()
 * ==============================
 * Page to POST a new data to income or spending.
 * 
 * @returns {React.ReactElement}
 */
function PostNewForm() {
  const [singlePost, setSinglePost] = useState(postsObjInitializer);
  const nav = useNavigate();

  /**
   * handleTextChange()
   * ========================================
   * change incomeItem state hook whenever input or textarea is changed.
   *  
   * @param {HTMLInputElement} event
   */
  const handleTextChange = (event) => {
    setSinglePost({ ...singlePost, [event.target.id]: event.target.value });
  };

  
  /**
   * handleSubmit()
   * ================================
   * POST a new data to the back-end.
   * @param {HTMLFormElement} event 
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    let timeStamp = Date.now();
    setSinglePost({...singlePost, ["time_stamp"]: timeStamp});
    console.log(singlePost)
    createMessage(singlePost)
        .then(() => {
          console.log("create success!");
          nav("/posts");
        })
        .catch((err)=>console.error(err));
    }
  /*
    const handleCheckboxChange = () => {
        setSinglePost({ ...singlePost, is_favorite: !song.is_favorite });
      };
*/
  return (
    <div className="new_entry">
      <form onSubmit={handleSubmit}>
        <label htmlFor="user_name">Name:</label>
        <input
          id="user_name"
          value={singlePost.user_name}
          type="text"
          onChange={handleTextChange}
          placeholder="user name"
          required
        />
        <label htmlFor="thread_message">Message:</label>
        <textarea
          id="thread_message"
          value={singlePost.thread_message}
          placeholder="message"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="profile_pic">profile:</label>
        <input
          id="profile_pic"
          value={singlePost.profile_pic}
          type="text"
          onChange={handleTextChange}
          placeholder="profile_picture link"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default PostNewForm;