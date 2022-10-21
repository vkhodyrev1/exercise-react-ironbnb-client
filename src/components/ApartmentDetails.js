import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ApartmentDetails() {

    const { appNum } = useParams();
    //console.log(appNum);

    const [newOneApp, setNewOneApp] = useState([]);


    useEffect(() => {

        axios.get("https://ironbnb-m3.herokuapp.com/apartments/" + appNum)
            .then(response => {
                //console.log(response);
                setNewOneApp(response.data);
            })
            .catch(e => console.log("error getting apartments from API", e));


    }, [])

    return (
        <div>
            <h2>Apartment Details</h2>


            <div>
                <h3>{newOneApp.title}</h3>
                <img src={newOneApp.img} />
                <p>Price per day: {newOneApp.pricePerDay}$</p>
                <NavLink to="/apartments" >Back</NavLink>
            </div>



        </div>

    )



}

export default ApartmentDetails;