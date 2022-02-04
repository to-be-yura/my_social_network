import React from 'react';
import s from './Post.module.css'
import Like from "./Like/Like";

const Post = (props) => {
    return (
        <div className={s.Post}>
            <div className={s.imgAva}></div>
            <div className={s.text}>{props.text}</div>
            <Like value={props.value}/>
        </div>
    );
};

export default Post;