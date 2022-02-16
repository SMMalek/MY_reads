import React, {useState} from 'react';
import './App.css';
import Home from "./pages/Home";
import Search from "./pages/Search";
import {Route, Routes} from "react-router-dom";

const App = () => {

    const [appList, setAppList] = useState([])
    const updateAppList = list => setAppList(list)

    return (
        <Routes>
            <Route exact path='/' element={
                <Home updateAppList={updateAppList} trace="home"/>
            }/>
            <Route exact path='/search' element={
                <Search appList={appList} trace="search"/>
            }/>
        </Routes>
    )
}

export default App;
