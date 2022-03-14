import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
// import PropTypes from 'prop-types';
//VideoList.propTypes = {
// };

function VideoList(props) {
	const { category } = useParams();
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		const getVideos = async () => {
			try {
				const response = await tmdbApi.getVideos(category, props.id);
				setVideos(response.results.slice(0, 5));
			} catch (error) {
				console.log("error invalid", error);
			}
		};

		getVideos();
	}, [category, props.id]);

	return (
		<>
			{videos.map((item, index) => (
				<Video item={item} key={index} />
			))}
		</>
	);
}
const Video = (props) => {
	const item = props.item;
	const iframeRef = useRef(null);
	useEffect(() => {
		const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
		iframeRef.current.setAttribute("height", height);
	}, []);

	return (
		<div className="video">
			<div className="video__title">
				<h2>{item.name}</h2>
			</div>
			<iframe
				src={`http://www.youtube.com/embed/${item.key}`}
				ref={iframeRef}
				width="60%"
				title="title"
			></iframe>
		</div>
	);
};

export default VideoList;
