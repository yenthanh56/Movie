import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import apiConfig from "../../api/apiConfig";
import { category } from "../../api/tmdbApi";
import Button from "../Button/Button";
// import PropTypes from 'prop-types';
// MovieCard.propTypes = {
// };
import "./MovieCard.scss";

function MovieCard(props) {
	const item = props.item;
	const link = "/" + category[props.category] + "/" + item.id;
	const bg = apiConfig.w500Image(
		item.poster_path ? item.poster_path : item.backdrop_path
	);

	return (
		<Link to={link}>
			<div
				className="movie-card"
				style={{ backgroundImage: `url(${bg})` }}
			>
				<Button>
					<i className="bx bx-play"></i>
				</Button>
			</div>
			<h3>{item.title || item.name}</h3>
		</Link>
	);
}

export default MovieCard;
