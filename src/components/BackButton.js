import React from "react";
import {useNavigate} from 'react-router-dom';
import '../App.css'

const BackButton = () => {

    const navigate = useNavigate()
    const handleClick = () => navigate(-1)

    return <button className="close-search" onClick={handleClick}>Close</button>
}
export default BackButton
