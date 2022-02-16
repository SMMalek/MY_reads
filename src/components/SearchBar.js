import React, {useEffect, useState} from "react";
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import BackButton from "./BackButton";
import {DebounceInput} from "react-debounce-input";
import PropTypes from "prop-types";

const SearchBar = props => {

    const [query, updateQuery] = useState('');

    const handleChange = event => {
        updateQuery(event.target.value)
    }

    useEffect(() => {
            if (query === '') {
                props.searchResultNotFound(false)
                props.searchResultList(query)
            } else {
                searchResultBooks(query)
            }
        }, [query]
    )

    const searchResultBooks = value => {
        const userToken = BooksAPI.search(value)

        userToken.then(result => {
                if (result.error) {
                    props.searchResultNotFound(true)
                    props.searchResultList('')
                } else {
                    props.searchResultNotFound(false)
                    props.searchResultList(result)
                }
            }
        )
    }

    return (
        <div className="search-books-bar">
            <BackButton/>
            <div className="search-books-input-wrapper">
                <DebounceInput
                    type="text"
                    minLength={2}
                    debounceTimeout={300}
                    onChange={handleChange}
                    value={query}
                    placeholder="Search by title or author"
                />
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    searchResultList: PropTypes.func.isRequired,
    searchResultNotFound: PropTypes.func.isRequired,

}
export default SearchBar
