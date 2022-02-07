import React from 'react';
import s from "./Ava.module.css";


const Ava = (props) => {
    return (
        <div>
            <div className={s.imgBox}>
                <img src={props.src} className={s.Ava}/>
            </div>
        </div>
    );
};

export default Ava;