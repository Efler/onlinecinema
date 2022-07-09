import React from 'react';
import '../styles/App.css';
import {useNavigate} from "react-router-dom";


const Card = (props) => {
    //функция, чтоб нужную картинку вытащить (чисто скопил с мастера, ток переделал чтоб не для ссылки), картинки хранятся в public -> images
    function create_pic_url(id) {
        return "images/" + id
    }
    // function create_pic_url1(id) {
    //     return "images/" + id
    // }
    const navigate = useNavigate(); //функция для кнопки, чтобы переадресоваться на страницу с нужным видео
    const button_link = () => navigate(`/video/${props.card.id}`, {replace: true});

    if(props.page === "video"){
        return ( //просто элементы, которые отрисовываются из переданных данных, сам компонент очень гибкий, вроде все хавает
        <div className="card2">
            <img className="img" src={create_pic_url(props.card.img_id)} alt=""/>
            {/*<h1>{create_pic_url(props.card.img_id)}</h1>*/}
            <strong className="title">{props.card.title}</strong>
            <hr className="line"/>
            <strong className="body">
                {props.card.body}
            </strong>
        </div>
    );
    }
    return ( //просто элементы, которые отрисовываются из переданных данных, сам компонент очень гибкий, вроде все хавает
        <div className="card">
            <img className="img" src={create_pic_url(props.card.img_id)} alt=""/>
            {/*<h1>{create_pic_url(props.card.img_id)}</h1>*/}
            <strong className="title">{props.card.title}</strong>
            <hr className="line"/>
            <strong className="body">
                {props.card.body}
            </strong>
            <div className="buttons">
                <button className="star">В Избранное</button> <button className="link" onClick={button_link}>Смотреть</button>
            </div>
        </div>
    );
};

export default Card;