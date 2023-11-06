import React from "react";
import { Link } from "react-router-dom";
function Post({ post, index }) {
  return (
   
      <td>
        <Link className="td" to= {`/posts/${post.id}`}>See More...</Link>
      </td>
   
  );
}

export default Post;