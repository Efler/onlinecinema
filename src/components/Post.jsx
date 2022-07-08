import React, {useState} from 'react';
import logo from './pic.jpg';

const Post = () => {

    const [likes, setLikes] = useState(0)

    function plus(){
        setLikes(likes+1)
    }

    return (
        <div className="post">
            <img className="img" src={logo} alt="лол, а почему картинка не загрузилась??" />
            <h1 className="likes">{likes} <button className="button" onClick={plus}> Like </button></h1>
            <p className="comment">лайк, если жалко и docker буллер</p>
        </div>
    );
};

export default Post;



