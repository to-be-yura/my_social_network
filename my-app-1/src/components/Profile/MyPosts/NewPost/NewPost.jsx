import React from 'react';
import s from "./NewPost.module.css";

const NewPost = () => {
    return (
        <div className={s.NewPost}>
            <textarea>your news...</textarea>
            <button>Send</button>
        </div>
    );
};

export default NewPost;