import './App.css';

import React, {Component} from "react";
import MainPageComponent from "./components/MainPage";
import axios from 'axios'

export function create_pic_url(id){
    return "http://0.0.0.0:8000/get_image/"+id
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        axios.get('http://0.0.0.0:8000')
            .then(response => {
                this.setState({
                    films: response.data.films
                })
                console.log(response.data.films)
            })

    }

    render() {
        const {films} = this.state
        return (
            <div>
                <h1>Cinema bro</h1>
                {films.map(film => <div>
                    <p>{film.id} {film.name} - {film.description}</p>
                    <img src={create_pic_url(film.id)} width="189" height="255" alt="poster"/>
                </div>)}
            </div>

        );
    }
}

export default App;
