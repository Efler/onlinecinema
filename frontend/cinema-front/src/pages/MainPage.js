import {create_pic_url} from "../App";
import axios from "axios";
import React, {Component} from "react";


class MainPageComponent extends Component {
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
                    <p>{film.name} - {film.description}</p>
                    <img src={create_pic_url(film.id)} width="189" height="255" alt="poster"/>
                    <p><a href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Посмотреть</a></p>
                </div>)}
            </div>

        );
    }
}


export default MainPageComponent;
