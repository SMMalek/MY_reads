import React from "react";
import '../App.css'
import PropTypes from "prop-types";

const BookCover = props => {
    return (
        <div className="book-cover" style={{
            backgroundImage: `url("${props.bg}")`,
        }}>
        </div>
    )
}

BookCover.propTypes = {
    bg: PropTypes.string.isRequired,

}

export default BookCover

