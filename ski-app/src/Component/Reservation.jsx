import { useState } from "react";
import bookingService from "../setup/services/booking.service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Reservation = ({id, fetchPost}) => {

    const [booking, setbooking] = useState({
        telephoneNumber: "",
        post: id
    });


    const handleCreate = async () => {
        console.log(bookingService.createBooking);
        const response = await bookingService.create(booking);
        console.log(response);
        fetchPost();
    }

    const handleChange = (e) => {
        setbooking({...booking, [e.target.name]: e.target.value});
        console.log(booking);
    }
    

    return ( 
        <>
        <h1>Réservation des ski :</h1>

            <form>
                <label htmlFor="elephoneNumber">Numéro de téléphone :</label>
                <input type="text" name="telephoneNumber" id="telephoneNumber" onChange={handleChange}/>
                <button type="button" onClick={handleCreate}>Réserver</button>
            </form>
            
                
        </>
     );
}
 
export default Reservation;