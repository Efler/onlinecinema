import React from 'react';
import './styles/App.css';
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Video from "./pages/Video";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Navbar from "./components/Navbar";

function App(){
    return( //маршрутизация проходит тут, все страницы хранятся в папке pages, стартовая страница - Home
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/favourites' element={<Favourites/>}/>
                <Route path='/video/:id' element={<Video/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
