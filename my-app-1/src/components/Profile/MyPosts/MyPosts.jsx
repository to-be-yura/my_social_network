import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = () => {
    return (
        <div className={s.MyPosts}>
            <div className="Title">My posts</div>
            <NewPost/>
            <div className={s.OldPost}>
                <Post value="17" text="Hello, world!✋"/>
                <Post value="6" text="Hi..."/>
                <Post value="10" text="How are you?😊"/>
            </div>
        </div>
    );
};

export default MyPosts;