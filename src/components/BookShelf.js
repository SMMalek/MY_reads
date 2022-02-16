import React from "react";
import '../App.css'
import BookShelfBooks from "./BookShelfBooks";
import BookShelfTitle from "./BookShelfTitle";
import PropTypes from "prop-types";


const BookShelf = props => {


    const selectReturn = (choice, button_Book) => {
        props.selectReturn(choice, button_Book)
    }

    return (
        <div className="bookshelf">
            <BookShelfTitle displayTitle={props.displayTitle}/>
            <BookShelfBooks
                title={props.title}
                books={props.books}
                trace={props.trace}
                selectReturn={selectReturn}/>
        </div>
    )
}

BookShelf.propTypes = {
    displayTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    selectReturn: PropTypes.func.isRequired,
    trace: PropTypes.string.isRequired

}

export default BookShelf
