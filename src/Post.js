import { Avatar } from '@material-ui/core';
import React from 'react';
import './post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Post({ profilePic, image, userName, timeStamp, message }) {
	return (
		<div className="post">
			<div className="post__top">
				<Avatar src={profilePic} className="post__topInfo" />
				<h3>{userName}</h3>
				<p>timestamp.........</p>
			</div>
			<div className="post__bottom">
				<p>{message}</p>
			</div>
			<div className="post__image">
				<image src={image} alt=""></image>
			</div>
			<div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleOutlinedIcon/>
                    <ExpandMoreOutlinedIcon/>
                    
                </div>
            </div>
		</div>
	);
}

export default Post;
