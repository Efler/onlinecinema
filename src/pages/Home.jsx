import React from 'react';
import '../styles/App.css';
import Card from "../components/Card";

function Home(props) {

    const changeStar = (iddd) => {
        props.change(iddd)
    }



    return (
    <div className="Home">
        <div className="head"><b>BRUH Cinema</b></div>
        {props.cards.map(card =>
            <Card card={card} key={card.id} page='home' change={changeStar}/>
        )}
    </div>
  );
}

export default Home;