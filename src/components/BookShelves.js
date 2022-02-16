import React, {useEffect, useState} from "react";
import '../App.css'
import BookShelf from "./BookShelf";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";

const BookShelves = props => {

    const [books, setBooks] = useState([])
    const [choice, setChoice] = useState([])
    const [button_Book, setButton_Book] = useState([])

    useEffect(() => {
        BooksAPI.getAll()
            .then((books) => {
                setBooks(books)
            })
    }, [])

    useEffect(() => {
        BooksAPI.update(button_Book, choice)
        changeShelf(button_Book, choice)
    }, [choice, button_Book])

    const changeShelf = (book, new_shelf) => {
        const new_list = books.map(b => {
            if (book === b) {
                b.shelf = new_shelf
                return b
            } else {
                return b
            }
        })
        setBooks(new_list)
        props.updateAppList(new_list)

    }

    const selectReturn = (choice, button_Book) => {
        setChoice(choice)
        setButton_Book(button_Book)
    }

    const getBookTitle = title => {
        if (title === "currentlyReading") {
            return "Currently Reading"
        }
        if (title === "wantToRead") {
            return "Want to Read"
        }
        if (title === "read") {
            return "Read Already"
        }
    }

    return (
        <div className="list-books-content">
            <BookShelf
                displayTitle={getBookTitle("currentlyReading")}
                books={books}
                title="currentlyReading"
                trace={props.trace}
                selectReturn={selectReturn}/>
            <BookShelf
                displayTitle={getBookTitle("wantToRead")}
                books={books}
                title="wantToRead"
                trace={props.trace}
                selectReturn={selectReturn}/>
            <BookShelf
                displayTitle={getBookTitle("read")}
                books={books}
                title="read"
                trace={props.trace}
                selectReturn={selectReturn}/>
        </div>
    )
}

BookShelves.propTypes = {
    updateAppList: PropTypes.func.isRequired,
    trace: PropTypes.string.isRequired
}
export default BookShelves
