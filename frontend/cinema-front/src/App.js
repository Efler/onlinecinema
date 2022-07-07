import './App.css';

import React, {Component} from "react";
import MainPageComponent from "./pages/MainPage";
import Player from "./components/Player";


export function create_pic_url(id) {
    return "http://0.0.0.0:8000/get_image/" + id
}

class App extends Component {
    render() {
        return (
            <div>
                <MainPageComponent/>
                <Player/>
            </div>

        );
    }
}

export default App;
