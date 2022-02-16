import React from "react";
import '../App.css'
import BookCover from "./BookCover";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";

const BookTop = (props) => {
    const selectReturn = (choice, button_Book) => {
        props.selectReturn(choice, button_Book)
    }

    if (!props.book.imageLinks) {
        return (
            <div className="book-top">
                <BookCover bg="https://cdn1.iconfinder.com/data/icons/modifiers-add-on-1-1/48/Sed-24-512.png"/>
                <BookShelfChanger book={props.book} selectReturn={selectReturn} trace={props.trace}/>
            </div>
        )
    } else {
        return (
            <div className="book-top">
                <BookCover bg={props.book.imageLinks.thumbnail}/>
                <BookShelfChanger book={props.book} appList={props.appList} selectReturn={selectReturn} trace={props.trace}/>
            </div>
        )
    }
}

BookTop.propTypes = {
    book: PropTypes.object.isRequired,
    appList: PropTypes.array,
    selectReturn: PropTypes.func.isRequired,
    trace: PropTypes.string.isRequired
}

export default BookTop
