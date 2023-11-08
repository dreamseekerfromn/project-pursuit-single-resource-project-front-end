import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postsObjInitializer } from "../interfaces/fetchingObjInitializer";

function Post({ post, index }) {
    const [ singlePost, setSinglePost ] = useState(postsObjInitializer);
    
    return (
        <Link to={`/posts/${post.thread_id}`}>
            <div className="card">
                <h5 className="card-header">{/* title should b here */}</h5>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p class="card-text">{/** message should b here */}</p>
                </div>
            </div>
        </Link>

    );
}

export default Post;