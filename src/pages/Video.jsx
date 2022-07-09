import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import Card from "../components/Card";
import '../styles/App.css';



const Video = (props) => {
    const params = useParams();
    let present_video = [];
    {props.cards.map(card => {
        if(card.id.includes(params.id)){
            present_video = card;
        }
    }
    )}
    return (
        <div>
            <div className="head3"><b>{present_video.title}</b></div>
            <Card card={present_video} key={present_video.id} page='video'/>
        </div>
    );
};

export default Video;