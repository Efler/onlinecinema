import React from 'react';
import Card from "../components/Card";

const Favourites = (props) => {

    const changeStar = (iddd) => {
        props.change(iddd)
    }

    let present_fav = [];
    {props.cards.map(card => {
            if (card.star === 1){
                present_fav = [...present_fav, card]
            }
        }
    )}

    if(present_fav.length > 0){
        return (                //избранное
            <div className="Home">
                <div className="head2"><b>Избранное</b></div>
                {present_fav.map(present =>
                    <Card card={present} key={present.id} page='fav' change={changeStar}/>
            )}
                <div className="fill">
                    fff
                </div>
            </div>
        );
    }else{
        return (
            <div className="Home">
                <div className="head2"><b>Избранное</b></div>
                <div className="empty">
                    <h1 className="pysto">Пусто</h1>
                </div>
                <div className="fill">
                    fff
                </div>
            </div>
        );
    }

};

export default Favourites;