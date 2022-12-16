import postsService from "../setup/services/post.service";
import { useEffect, useState } from "react";
import "../PostList.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Search from "../Component/Search";


const PostList = () => {
  const [posts, setPosts] = useState([]);
  const naviguate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await postsService.getPosts();

    setPosts(response);
  };

  const handleClick = (e, _id) => {
    console.log("click");
    console.log(_id);
    naviguate(`/card/${_id}`);
  };
  


  

  return (
    <>

    
    <Search posts={posts} setPosts={setPosts}/>
      <h1>Reservation Ski</h1>
    <div className="card-ski" >

        {posts.map((post) => (
           
          <ul key={post._id} className="card-space" onClick={(e) => handleClick(e, post._id)}>
            <h2>{post.title}</h2>
            <p>{post.size} cm</p>
            <p>{post.price} €</p>
            <img class="img-ski" src={post.image}/>
          </ul>

        ))}

    </div>
      

    </>
    
  );
};

export default PostList;
