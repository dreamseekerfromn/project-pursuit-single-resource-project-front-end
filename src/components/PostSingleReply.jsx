import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostSingleReply(){
    const [singleReply, setSingleReply] = useState({
        thread_id:0,
        reply_user: "",
        reply_message: "",
        reply_timestamp: Date.now(),
        reply_pw: "",
    });
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
    const handleSubmit = async (event) => {
        event.preventDefault();
        let timeStamp = Date.now();
        setSingleReply({...singleReply, ["time_stamp"]: timeStamp});
        await createReply(singlePost)
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