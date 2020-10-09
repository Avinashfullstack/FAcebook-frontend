import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
	return (
		<div className="feed">
			<StoryReel />
			<MessageSender />
			<Post
				profilePic="https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-9/36758142_2126737934249937_301110910057971712_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=q_VYOfrfm_MAX_i7Rpc&_nc_ht=scontent.fblr1-4.fna&oh=11ec45f7debf0949730682d469557cb6&oe=5FA49668"
				image="https://www.google.com/search?q=images&sxsrf=ALeKk01VmBZED7v2228UYEZIqgfUgWuAQw:1602224259917&tbm=isch&source=iu&ictx=1&fir=IYS2rR0lnVgWVM%252C5qfIDA01pWWH-M%252C_&vet=1&usg=AI4_-kR7tFucDAk3QL7S0cmG-lSOaK0yCQ&sa=X&ved=2ahUKEwiVlvO-7qbsAhWmxzgGHWb7BzYQ9QF6BAgCEFo#imgrc=IYS2rR0lnVgWVM"
				userName="Avinash"
				message="this works"
				timeStamp="this is a timestamp"
			/>
			<Post
				profilePic="https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-9/36758142_2126737934249937_301110910057971712_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=q_VYOfrfm_MAX_i7Rpc&_nc_ht=scontent.fblr1-4.fna&oh=11ec45f7debf0949730682d469557cb6&oe=5FA49668"
				userName="Avinash"
				message="this works"
				timeStamp="this is a timestamp"
				image="https://www.google.com/search?q=images.png&sxsrf=ALeKk03TfZLH5VDRKQrUuPuQSOetL4ARDA:1602224470294&tbm=isch&source=iu&ictx=1&fir=CTsdrk7EO2tgOM%252CFskQ4abOqP4JGM%252C_&vet=1&usg=AI4_-kSYIBAfJw_7I5xGt4fgNXqp_qRFMg&sa=X&ved=2ahUKEwjlxpuj76bsAhWxzjgGHUqWAsAQ9QF6BAgCEAQ#imgrc=CTsdrk7EO2tgOM"
			/>
		</div>
	);
}

export default Feed;
