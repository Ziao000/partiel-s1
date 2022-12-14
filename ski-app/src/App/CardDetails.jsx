import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateComment from "../Component/CreateComment";
import Reservation from "../Component/Reservation";
import postsService from "../setup/services/post.service";

const Card = () => {

  
    const { _id } = useParams();
    const [post, setPost] = useState({});
    const fetchPost = async () => {
        const response = await postsService.getOne(_id);
        setPost(response);
    };

    useEffect(() => {
        fetchPost();
        console.log(post);
    }, []);

   

    console.log(post);


 
    return (  
        <>
        
        <button onClick={() => window.history.back()}>Retour</button>
            <h2>Produit :</h2>
              <p>{post.title}</p>
                <p>{post.size}</p>
                <p>{post.price}</p>
                <img src={post.image}/>

                <div>
                    <h2>Commentaires :</h2>
                    {post.comments && post.comments.map((comment) => (
                        <div key={comment._id}>
                            <h3>{comment.username} :</h3>
                            <p>{comment.description}</p>
                            </div>
                    ))}
                </div>

                <CreateComment id={_id} fetchPost={fetchPost}/>
                <Reservation id={_id} fetchPost={fetchPost}/>
                
        </>

    );
}
 
export default Card;