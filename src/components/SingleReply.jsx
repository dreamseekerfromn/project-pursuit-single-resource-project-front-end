import { useNavigate, useParams } from "react-router-dom";
import { destroyReply } from "../api/fetch"
import EditReplyForm from "./EditReplyForm";
import { useState } from "react";

export default function SingleReply({reply}){
    const { id } = useParams();
    const [toggleEditForm, setToggleEditForm] = useState(false);
    const navigate = useNavigate();

    const handleDelete = async () => {
        let pw = prompt("password?");
        console.log(pw);
        await destroyReply(reply.reply_id, {reply_pw: pw})
            .then(() => navigate(0))
            .catch(error => console.log(error))
    }

    const handleEditForm = () => {
        setToggleEditForm(!toggleEditForm);
    }

    return(
        <div>
            <div className="single-reply-container" onClick={handleEditForm}>
                <span>{reply.reply_user}</span>
                <span className="time_stamp">{new Date(Number(reply.reply_timestamp) * 1000).toLocaleString()}</span>
                <p className="card-text">{reply.reply_message}</p>
                <button onClick={handleDelete}>Delete</button>
            </div>
            {toggleEditForm ? <EditReplyForm reply_id={reply.reply_id} /> : null}
        </div>
    )
    

}