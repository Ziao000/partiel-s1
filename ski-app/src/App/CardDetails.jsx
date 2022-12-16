import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateComment from "../Component/CreateComment";
import Reservation from "../Component/Reservation";
import postsService from "../setup/services/post.service";
import "../CardDetails.css";


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
        
        <button class="return-btn" onClick={() => window.history.back()}>Retour</button>
            <div class="card-ski">
            <h2>Produit :</h2>
              <p>{post.title}</p>
                <p>{post.size} cm</p>
                <p>{post.weight} KG</p>
                <p>{post.price} €</p>
               
                
                <img class="img-ski" src={post.image}/>

                
                </div>
                <div className="description">
                <p>{post.description}</p>
                </div>
            
                <h2>Commentaires :</h2>
                <div class="comment">
                   
                    {post.comments && post.comments.map((comment) => (
                        <div key={comment._id}>
                            <h3>De {comment.username} :</h3>
                            <p>{comment.description}</p>
                            <p>{comment.stars} Étoiles</p>
                            </div>
                    ))}
                </div>

                <CreateComment id={_id} fetchPost={fetchPost}/>
                <Reservation id={_id} fetchPost={fetchPost}/>
                
        </>

    );
}
 
export default Card;