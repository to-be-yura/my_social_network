import React from 'react';
import s from "./Dialogs.module.css";
import Talk from "./Talk/Talk";

const Dialogs = () => {
    return (
        <div className={s.Dialogs}>
            <div className={s.Search+' '+s.Box}>Search</div>
            <div className={s.Talks+' '+s.Box}>
                <Talk name='Lenet Lomie Harr' src="http://dummyimage.com/40/3BFFCC"/>
                <Talk name='Tristan Lead' src="http://dummyimage.com/40/82B1FF"/>
                <Talk name='Pin Noriko' src="http://dummyimage.com/40/FF6ABF"/>
                <Talk name='Hawn Mristar' src="http://dummyimage.com/40/FFBE6B"/>
                <Talk name='Atala Jassan' src="http://dummyimage.com/40/CC396B"/>
            </div>
            <div className={s.Unread+' '+s.Box}>Unread</div>

        </div>
    );
};

export default Dialogs;