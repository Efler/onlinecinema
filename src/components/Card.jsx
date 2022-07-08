import React from 'react';
import '../styles/App.css';

const Card = (props) => {
    //функция, чтоб нужную картинку вытащить (чисто скопил с мастера, ток переделал чтоб не для ссылки), картинки хранятся в public -> images
    function create_pic_url(id) {
        return "images/" + id
    }

    return ( //просто элементы, которые отрисовываются из переданных данных, сам компонент очень гибкий, вроде все хавает
        <div className="card">
            <img className="img" src={create_pic_url(props.card.img_id)} alt=""/>
            <strong className="title">{props.card.title}</strong>
            <hr className="line"/>
            <strong className="body">
                {props.card.body}
            </strong>
            <div className="buttons">
                <button className="star">В Избранное</button> <button className="link">Смотреть</button>
            </div>
        </div>
    );
};

export default Card;