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
   * @param {customInputEventBundle} event
   */
  const handleTextChange = (event) => {
    setSinglePost({ ...singlePost, [event.target.id]: event.target.value });
  };

  
  /**
   * handleSubmit()
   * ================================
   * POST a new data to the back-end.
   * @param {React.ChangeEvent<HTMLFormElement>} event 
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
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="song name"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Artist name"
          required
        />
        <label htmlFor="album">Album Name:</label>
        <input
          id="album"
          type="text"
          required
          value={song.album}
          placeholder="Album name"
          onChange={handleTextChange}
        />
        <label htmlFor="time">Length:</label>
        <input
          id="time"
          type="text"
          required
          value={song.time}
          placeholder="length of time"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Is Favorite?:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default PostNewForm;