import React from "react";
import '../App.css'
import PropTypes from "prop-types";

const BookShelfTitle = props => {

    return (
        <div className='bookshelf-title'>
            <h2>{props.displayTitle}</h2>
        </div>)
}

BookShelfTitle.propTypes = {
    displayTitle: PropTypes.string.isRequired
}

export default BookShelfTitle
