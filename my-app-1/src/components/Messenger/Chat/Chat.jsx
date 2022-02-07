import React from 'react';
import s from './Chat.module.css'
import Message from "./Message/Message";

const Chat = () => {
    return (
        <div className={s.Chat}>
            <div className={s.Companion+' '+s.Box}>Companion</div>
            <div className={s.ChatHistory+' '+s.Box}>
                    <Message srcAva="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg" text={'Hello, my dear friend!'}/>
                    <Message srcAva="http://dummyimage.com/40/green" text={'👋!'}/>
                    <Message srcAva="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg" text={'How are you?!'}/>
            </div>
            <div className={s.NewMessage+' '+s.Box}>
                <textarea>new message...</textarea>
                <button className={s.send}>➡</button>
            </div>
        </div>
    );
};

export default Chat;