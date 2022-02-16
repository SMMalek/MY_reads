import React from "react";
import {useNavigate} from 'react-router-dom';
import '../App.css'

const StartSearchButton = () => {

    const navigate = useNavigate();

    const handleOnClick = () => navigate("/search")


    return (
        <div className="open-search">
            <button onClick={handleOnClick}>Add a book</button>
        </div>
    )
}
export default StartSearchButton
