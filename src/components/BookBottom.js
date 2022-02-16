import React from "react";
import '../App.css'
import PropTypes from "prop-types";

const BookBottom = props => {
    const authorsDisplay = value => {
        if (!value) return
        if (value.length === 1) {
            return value
        } else {
            return value.join(' & ')
        }
    }
    return (
        <div className="book-bottom">
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{authorsDisplay(props.book.authors)}</div>
        </div>
    )
}

BookBottom.propTypes = {
    book: PropTypes.object.isRequired
}

export default BookBottom
