import {Link} from "react-router-dom"
function Post({post}){

    return (
      <div
        style={{
          border: "0.5rem solid purple",
          width: "80%",
          margin: "2rem",
          borderRadius: "1rem",
        }}
      >
        <Link to={`/post/${post.id}`}>
          <h2>
            <span style={{fontWeight:"bold"}}>Name: </span>
            {post.name}
          </h2>
          <h3><span style={{fontWeight:"bold"}}>Origin: </span>{post.country}</h3>
        </Link>
      </div>
    );
}
export default Post