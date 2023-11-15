import { useNavigate, useParams } from "react-router-dom";
import { destroyReply } from "../api/fetch"

export default function SingleReply({reply}){
    const { id } = useParams()
    const navigate = useNavigate();
    const handleDelete = async () => {
        let pw = prompt("password?");
        console.log(pw);
        await destroyReply(reply.reply_id, {reply_pw: pw})
            .then(() => navigate(`/posts/${id}`))
            .catch(error => console.log(error))
    }
    return(
        <div>
            <span>{reply.reply_user}</span>
            <span className="time_stamp">{new Date(Number(reply.reply_timestamp) * 1000).toLocaleString()}</span>
            <p class="card-text">{reply.reply_message}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
    

}