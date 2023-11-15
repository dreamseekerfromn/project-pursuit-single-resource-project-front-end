import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateReply } from "../api/fetch";

export default function EditReplyForm({reply_id}){
    const {id} = useParams();
    const [singleReply, setSingleReply] = useState({
        thread_id:id,
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
        setSingleReply({...singleReply, ["reply_timestamp"]: timeStamp, ["reply_message"]: singleReply.reply_message + "[Editted Message]"});
        await updateReply(reply_id, singleReply)
            .then(() => {
            console.log("update success!");
            alert("The Reply is updated");
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
            <label htmlFor="password">password:</label>
            <input
                id="reply_pw"
                value={singleReply.reply_pw}
                type="text"
                onChange={handleTextChange}
                placeholder="password"
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