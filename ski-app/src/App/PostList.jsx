import postsService from "../setup/services/post.service";
import { useEffect, useState } from "react";
import "../PostList.css";
import { Link, useParams } from "react-router-dom";


const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await postsService.getPosts();

    setPosts(response);
  };
  

  return (
    <>
      <h1>Reservation Ski</h1>
    <div className="card-ski">

        {posts.map((post) => (
            <Link to={`/card/`}> 
          <ul key={post.id} className="card-space">
            <h2>{post.title}</h2>
            <p>{post.size}</p>
            <p>{post.price}</p>
            <img src={post.image}/>
          </ul>
          </Link>
        ))}

    </div>
      

    </>
    
  );
};

export default PostList;
