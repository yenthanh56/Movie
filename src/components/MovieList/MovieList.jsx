import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "./MovieList.scss";
import tmdbApi, { category } from "../../api/tmdbApi";
import MovieCard from "../MovieCard/MovieCard";

MovieList.propTypes = {
	category: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

function MovieList(props) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getApiMoviePopular = async () => {
			let response = null;
			const params = {};
			try {
				if (props.type !== "similar") {
					switch (props.category) {
						case category.movie:
							response = await tmdbApi.getmoviesList(props.type, {
								params,
							});
							break;

						default:
							response = await tmdbApi.getTvList(props.type, {
								params,
							});
					}
				} else {
					response = await tmdbApi.similar(props.category, props.id);
				}
			} catch (error) {
				console.log("invalid error", error);
			}
			setItems(response.results);
		};

		getApiMoviePopular();
	}, [props.category, props.id, props.type]);

	return (
		<div className="movie-list">
			<Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
				{items.map((item, index) => (
					<SwiperSlide key={index}>
						<MovieCard item={item} category={props.category} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default MovieList;
