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
    createMessage(singlePost)
        .then(() => {
          console.log("create success!");
          nav("/songs");
        })
        .catch((err)=>console.error(err));
    }
  /*
    const handleCheckboxChange = () => {
        setSinglePost({ ...singlePost, is_favorite: !song.is_favorite });
      };
*/
  return (
    <div className="input-group new_entry">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={singlePost.user_name}
          type="text"
          onChange={handleTextChange}
          placeholder="user name"
          required
        />
        <label htmlFor="time">Length:</label>
        <textarea
          id="message"
          required
          value={singlePost.thread_message}
          placeholder="message"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default PostNewForm;