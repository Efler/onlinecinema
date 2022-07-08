import React from 'react';
import Post from "./components/Post";
import './styles/App.css';

function App() {

  return (
    <div className="App">
        <h1 className="head"><strong>Всем плотный салам</strong></h1>
        <div className="text">
            <h2 className="text1">
               Здесь должен быть превосходный сайт-видеохостинг, НО у меня не получается использовать docker :((
            </h2>
            <h2 className="text2">
               Поэтому я грущу и смотрю видео с котиками!! :'[
            </h2>
        </div>
        <div className="link">
            <a className="link2" href="https://youtu.be/-452p_9ESbM" target="_blank" rel="noreferrer"><b>видео с котятами <i>(очень миииилооо :D)</i></b></a>
        </div>
        <Post/>
    </div>
  );
}

export default App;









        // {/*<a*/}
        //   {/*  className="App-link"*/}
        //   {/*  href="https://reactjs.org"*/}
        //   {/*  target="_blank"*/}
        //   {/*  rel="noopener noreferrer"*/}
        //   {/*>*/}
        //   {/*  Learn React*/}
        // {/*</a>*/}