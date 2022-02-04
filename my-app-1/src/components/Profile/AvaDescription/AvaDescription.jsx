import React from 'react';
import s from "./AvaDescription.module.css";
import Inf from "./information/inf";

const AvaDescription = () => {
    return (
        <div className={s.box}>
            <div className={s.imgCover}></div>
            <div className={s.AvaDescription}>
                <div className={s.imgAva}></div>

                <div className={s.Description}>
                    <div className={s.Name + " Title"}>Monblan K.</div>

                    <div className={s.Information}>
                        <Inf name="Birthday" value="6 march"/>
                        <Inf name="City" value="Saint-Petersburg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvaDescription;