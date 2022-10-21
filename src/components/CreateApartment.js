import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

function CreateApartment() {
    const redirect = useNavigate();
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [pricePerDay, setPricePerDay] = useState(0);


    const createApart = (apartDetails) => {

        axios.post("https://ironbnb-m3.herokuapp.com/apartments", apartDetails)
            .then(() => {
                //console.log(response);
                redirect("/apartments");
            })
            .catch(e => console.log("error getting apartments from API", e));

    };



    const handleFormSubmit = (e) => {
        e.preventDefault();


        const newApart = {
            title: title,
            img: img,
            pricePerDay: pricePerDay
        }


        createApart(newApart);


        //clear form
        setTitle("");
        setImg("");
        setPricePerDay(0);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>

                <input
                    type="text"
                    name="title"
                    placeholder="enter the title"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />

                <input
                    type="text"
                    name="img"
                    placeholder="enter link to image"
                    value={img}
                    onChange={(e) => { setImg(e.target.value) }}
                />

                <input
                    type="number"
                    name="pricePerDay"
                    placeholder="$$$"
                    min={1}
                    max={2000}
                    value={pricePerDay}
                    onChange={(e) => { setPricePerDay(e.target.value) }}
                />

                <button>Create new apartment</button>
            </form>
        </div>
    )


}

export default CreateApartment;