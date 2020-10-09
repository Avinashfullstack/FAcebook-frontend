import React from 'react';
import './Widgets.css';
import Iframe from 'react-iframe';

function Widgets() {
	return (
		<div className="widgets">
			<Iframe
				url="http://www.youtube.com/embed/xDMP3i36naA"
				width="340"
				height="100%"
				style={{ border: 'none', overflow: 'hidden' }}
				scrolling="no"
				frameBorder="0"
				allowTransparency="true"
				allow="encrypted-media"
			/>
		</div>
	);
}

export default Widgets;
