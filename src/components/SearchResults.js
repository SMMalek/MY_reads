import React from "react";
import '../App.css'
import Book from "./Book";
import PropTypes from "prop-types";

const SearchResults = props => {

    const selectReturn = (choice, button_Book) => props.selectReturn(choice, button_Book)

    return (
        <div className="search-books-results">
            {props.notFound
                ?
                <p style={{textAlign: "center"}}>No Books matched your search</p>
                :
                <ol className="books-grid">
                    {props.list.map(book => <Book key={book.id} book={book} appList={props.appList}
                                                  selectReturn={selectReturn} trace={props.trace}/>)}
                </ol>
            }
        </div>
    )
}

SearchResults.propTypes = {
    list: PropTypes.array.isRequired,
    appList: PropTypes.array.isRequired,
    selectReturn: PropTypes.func.isRequired,
    notFound: PropTypes.bool.isRequired,
    trace: PropTypes.string.isRequired,

}

export default SearchResults
