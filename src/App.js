import React, {useState, useEffect, Component} from 'react';
import './styles/App.css';
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Favourites1 from "./pages/Favourites1";
import Video from "./pages/Video";
import axios from "axios";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
    const [films, setFilms] = useState([])
    const fetching_data = () => {
        axios.get('http://0.0.0.0:8000')
            .then(response => {
                setFilms(response.data.films)
                console.log("data obtained")
            })
    }
    useEffect( () => {fetching_data()}, [])

    const changeStar = (iddd) => {
        films.map(card => {
                if (card.id === iddd) {
                    card.star === 0 ?
                        card.star = 1
                        :
                        card.star = 0
                }
            }
        )
        console.log("да" + iddd)
    }
    return (                                       //маршрутизация
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home films={films} change={changeStar}/>}/>
                <Route path='/favourites' element={<Favourites cards={films} change={changeStar}/>}/>
                <Route path='/favourites1' element={<Favourites1 cards={films} change={changeStar}/>}/>
                <Route path='/video/:id' element={<Video cards={films} change={changeStar}/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/" replace/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
