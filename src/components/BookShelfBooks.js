import React from "react";
import '../App.css'
import Book from "./Book";
import PropTypes from "prop-types";

const BookShelfBooks = props => {

    const selectReturn = (choice, button_Book) => {
        props.selectReturn(choice, button_Book)
    }

    return (
        <ol className="books-grid">
            {props.books.filter(book => book.shelf === props.title)
                .map(book => <Book key={book.id} book={book} selectReturn={selectReturn} trace={props.trace}/>)}
        </ol>
    )
}

BookShelfBooks.propTypes = {
    selectReturn: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    trace: PropTypes.string.isRequired
}

export default BookShelfBooks
