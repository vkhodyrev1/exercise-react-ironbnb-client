import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function ApartmentsList() {

    const [newAppList, setNewAppList] = useState([]);
    

    useEffect(() => {

        axios.get("https://ironbnb-m3.herokuapp.com/apartments")
            .then(response => {
                //console.log(response);
                setNewAppList(response.data);
            })
            .catch(e => console.log("error getting apartments from API", e));


    }, [])

    return (
        <div>
            <h2>Apartments List</h2>
            {newAppList.map((appart) => {

                return (<div>
                    <h3>{appart.title}</h3>
                    <img src={appart.img} />
                    <p>Price per day: {appart.pricePerDay}$</p>
                    <NavLink to={`/apartments/${appart._id}`}>More Details</NavLink>
                </div>

                )
            })}
        </div>

    )
}

export default ApartmentsList;