import React from "react";
import '../App.css'
import BookTop from "./BookTop";
import BookBottom from "./BookBottom";
import PropTypes from "prop-types";

const Book = props => {

    const selectReturn = (choice, button_Book) => {
        props.selectReturn(choice, button_Book)
    }

    let book = props.book

    if (props.appList) {
        props.appList.map(b => {
                if (b.id === props.book.id) {
                    book = b
                }
            }
        )
    }


    return (
        <li>
            <div className="book">
                <BookTop book={book} appList={props.appList} selectReturn={selectReturn} trace={props.trace}/>
                <BookBottom book={book}/>
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    selectReturn: PropTypes.func.isRequired,
    trace: PropTypes.string.isRequired

}

export default Book
