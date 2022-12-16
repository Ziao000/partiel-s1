import { useState } from "react";
import commentService from "../setup/services/comment.service";
import "../CreateComment.css";


const CreateComment = ({id, fetchPost}) => {


    const [comment, setComment] = useState({
        username: "",
        description: "",
        stars: "",
        post: id
    });
    


    const handleCreate = async () => {
        console.log(comment);
        const response = await commentService.create(comment);
        console.log(response);
        fetchPost();
    }

    const handleChange = (e) => {
        setComment({...comment, [e.target.name]: e.target.value});
        console.log(comment);
    }
    



    return ( 
        <>
            <h1>Publier un Commentaire :</h1>
            <form class="form-comment">
                <label htmlFor="username">Nom :</label>
                <input type="text" name="username" id="username" onChange={handleChange}/>
                <label htmlFor="description">Commentaire :</label>
                <input type="text" name="description" id="description" onChange={handleChange}/>
                <label htmlFor="stars">Étoiles :</label>
                <input type="number" name="stars" id="stars" onChange={handleChange}/>
                <button type="button" onClick={handleCreate}>Publier</button>
            </form>
            
        </>
     );
}
 
export default CreateComment; 