import React from 'react';
import s from './Messenger.module.css'
import Chat from "./Chat/Chat";
import Talk from "./Dialogs/Talk/Talk";
import Dialogs from "./Dialogs/Dialogs";

const Messenger = () => {
    return (
        <div className={s.Messenger}>
            <Dialogs/>
            <Chat/>
        </div>
    );
};

export default Messenger;