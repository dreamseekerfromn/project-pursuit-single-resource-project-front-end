import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createReply } from "../api/fetch";

export default function PostSingleReply(){
    const {id} = useParams();
    const [singleReply, setSingleReply] = useState({
        thread_id:id,
        reply_user: "",
        reply_message: "",
        reply_timestamp: Date.now()/1000,
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
        setSingleReply({ ...singleReply, [event.target.id]: event.target.value });
    };

    /**
     * handleSubmit()
     * ================================
     * POST a new data to the back-end.
     * @param {HTMLFormElement} event 
     */
    const handleSubmit = async (event) => {
        event.preventDefault();
        let timeStamp = Date.now()/1000;
        setSingleReply({...singleReply, ["reply_timestamp"]: timeStamp});
        await createReply(singleReply)
            .then(() => {
            console.log("create success!");
            nav(`/posts/${id}`);
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
                id="reply_user"
                value={singleReply.reply_user}
                type="text"
                onChange={handleTextChange}
                placeholder="user name"
                required
            />
            <label htmlFor="profile_pic">password:</label>
            <input
                id="reply_pw"
                value={singleReply.reply_pw}
                type="text"
                onChange={handleTextChange}
                placeholder="profile_picture link"
            />
            <label htmlFor="reply_message">Message:</label>
            <textarea
                id="reply_message"
                value={singleReply.reply_message}
                placeholder="message"
                onChange={handleTextChange}
                required
            />
            <br />
            <input type="submit" />
        </form>
        </div>
    );
}