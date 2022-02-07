import React from 'react';
import s from "./Talk.module.css";
import Ava from "./AvaCompanions/Ava";


const Talk = (props) => {
    return (
        <div className={s.Talk}>
            <Ava src={props.src}/>
            <div className={s.name}>{props.name}</div>
        </div>
    );
};

export default Talk;