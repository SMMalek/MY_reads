import React, {useEffect, useState} from "react";
import '../App.css'
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";

const Search = props => {

    const [list, updateList] = useState([])
    const [choice, setChoice] = useState([])
    const [button_Book, setButton_Book] = useState([])
    const [notFound, setNotFound] = useState(false)
    const searchResultList = list => {
        if (list === '') {
            updateList([])
        } else {
            updateList(list)
        }
    }

    const searchResultNotFound = cond => setNotFound(cond)


    useEffect(() => {
        BooksAPI.update(button_Book, choice)
    }, [choice, button_Book])

    const selectReturn = (choice, button_Book) => {
        setChoice(choice)
        setButton_Book(button_Book)
    }


    return (
        <div className="search-books">
            <SearchBar searchResultList={searchResultList} searchResultNotFound={searchResultNotFound}/>
            {list !== [] &&
            <SearchResults list={list} appList={props.appList} selectReturn={selectReturn} notFound={notFound} trace={props.trace}/>}
        </div>
    )
}

Search.propTypes = {
    appList: PropTypes.array.isRequired,
    trace: PropTypes.string.isRequired,

}


export default Search
