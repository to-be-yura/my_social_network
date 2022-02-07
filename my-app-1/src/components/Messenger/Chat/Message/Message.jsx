import React from 'react';
import s from "./Message.module.css";
import Ava from "./AvaMessage/Ava";

const Message = (props) => {
    return (
        <div className={s.Message}>
            <Ava src={props.srcAva}/>
            <div className={s.Text}>{props.text}</div>
        </div>
    );
};

export default Message;