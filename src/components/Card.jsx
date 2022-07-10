import React, {useState} from 'react';
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

    const ppp = create_pic_url(props.card.img_id);

    function clickStar(){
        props.change(props.card.id)
    }


    function changetext_start(){
        if(props.card.star === 1){
            if(props.page === "fav"){
                return "Удалить"
            }else if(props.page === "fav1"){
                return "Удалить"
            }
            else{
                return "Добавлено"
            }
        }
        if(props.card.star === 0){
            if(props.page === "fav"){
                return "Добавить"
            }else if(props.page === "fav1"){
                return "Добавить"
            }else{
                return "В Избранное"
            }
        }
    }

    const [star_text, set_star_text] = useState(changetext_start);

    function changetext(){
        if(props.card.star === 0){
            if(props.page === "fav"){
                set_star_text("Удалить")
            }else if(props.page === "fav1"){
                set_star_text("Удалить")
            }else{
                set_star_text("Добавлено")
            }
        }
        if(props.card.star === 1){
            if(props.page === "fav"){
                set_star_text("Добавить")
            }else if(props.page === "fav1"){
                set_star_text("Добавить")
            }else{
                set_star_text("В Избранное")
            }
        }
    }
    const button_link_star = () => navigate("/favourites1", {replace: true});
    const button_link_star1 = () => navigate("/favourites", {replace: true});

    function star3x(){
        changetext();
        clickStar();
        button_link_star();
    }
    function star3x1(){
        changetext();
        clickStar();
        button_link_star1();
    }
    function star2x(){
        changetext();
        clickStar();
    }

    if(props.page === "video"){
        return ( //просто элементы, которые отрисовываются из переданных данных, сам компонент очень гибкий, вроде все хавает
        <div className="card2">
            {/*<img className="img" src={ppp} alt=""/>*/}
            {/*<h1>{create_pic_url(props.card.img_id)}</h1>*/}
            {/*<strong className="title2">{props.card.title}</strong>*/}
            <hr className="line2"/>
            <strong className="body2">
                {props.card.body}
            </strong>
            <div className="buttons2">
                <button className="star2" onClick={star2x}>{star_text}</button>
            </div>
        </div>
    );
    }

    if(props.page === "fav"){
        return ( //просто элементы, которые отрисовываются из переданных данных, сам компонент очень гибкий, вроде все хавает
        <div className="card3">
            <img className="img" src={ppp} alt=""/>
            {/*<h1>{create_pic_url(props.card.img_id)}</h1>*/}
            <strong className="title">{props.card.title}</strong>
            <hr className="line"/>
            <strong className="body">
                {props.card.body}
            </strong>
            <div className="buttons">
                <button className="star3" onClick={star3x}>{star_text}</button> <button className="link3" onClick={button_link}>Смотреть</button>
            </div>
        </div>
    );
    }

    if(props.page === "fav1"){
        return ( //просто элементы, которые отрисовываются из переданных данных, сам компонент очень гибкий, вроде все хавает
        <div className="card3">
            <img className="img" src={ppp} alt=""/>
            {/*<h1>{create_pic_url(props.card.img_id)}</h1>*/}
            <strong className="title">{props.card.title}</strong>
            <hr className="line"/>
            <strong className="body">
                {props.card.body}
            </strong>
            <div className="buttons">
                <button className="star3" onClick={star3x1}>{star_text}</button> <button className="link3" onClick={button_link}>Смотреть</button>
            </div>
            <div className="fill">
                fff
            </div>
        </div>
    );
    }

    return ( //просто элементы, которые отрисовываются из переданных данных, сам компонент очень гибкий, вроде все хавает
        <div className="card">
            <img className="img" src={ppp} alt=""/>
            {/*<h1>{create_pic_url(props.card.img_id)}</h1>*/}
            <strong className="title">{props.card.title}</strong>
            <hr className="line"/>
            <strong className="body">
                {props.card.body}
            </strong>
            <div className="buttons">
                <button className="star" onClick={star2x}>{star_text}</button> <button className="link" onClick={button_link}>Смотреть</button>
            </div>
        </div>
    );
};

export default Card;