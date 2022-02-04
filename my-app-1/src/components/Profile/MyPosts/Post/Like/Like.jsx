import React from 'react';
import s from "./Like.module.css";

const Like = (props) => {
    return (
        <button className={s.like}>{props.value}❤</button>
    );
};

export default Like;