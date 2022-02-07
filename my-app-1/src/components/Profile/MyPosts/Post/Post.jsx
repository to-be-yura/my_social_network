import React from 'react';
import s from './Post.module.css'
import Like from "./Like/Like";
import Ava from "./Like/AvaPost/Ava";

const Post = (props) => {
    return (
        <div className={s.Post}>
            <Ava/>
            <div className={s.text}>{props.text}</div>
            <Like value={props.value}/>
        </div>
    );
};

export default Post;