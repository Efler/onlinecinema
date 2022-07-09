import React, {useState} from 'react';
import '../styles/App.css';
import Card from "../components/Card";

function Home(props) {
    return (
    <div className="Home">
        <div className="head"><b>BRUH Cinema</b></div>
        {props.cards.map(card =>
            <Card card={card} key={card.id} page='home'/>
        )}
    </div>
  );
}

export default Home;