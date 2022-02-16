import React from "react";
import "../App.css";
import BookShelves from "../components/BookShelves";
import StartSearchButton from "../components/StartSearchButton";
import PropTypes from "prop-types";

const Home = props => {


    const updateAppList = new_list => props.updateAppList(new_list)

    return (
        <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <BookShelves updateAppList={updateAppList} trace={props.trace}/>
            </div>
            <StartSearchButton/>
        </div>
    )
}

Home.propTypes = {
    updateAppList: PropTypes.func.isRequired,
    trace: PropTypes.string.isRequired
}

export default Home
