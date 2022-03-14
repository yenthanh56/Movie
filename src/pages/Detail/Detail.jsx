import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// Detail.propTypes = {
// };
import { useParams } from "react-router-dom";
import Helmet from "../../components/Helmet/Helmet";
import "./Detail.scss";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import CastList from "./CastList";
import VideoList from "./VideoList";
import { OutlineButton } from "../../components/Button/Button";
import MovieList from "../../components/MovieList/MovieList";
function Detail(props) {
	const [item, setItem] = useState(null);
	const { category, id } = useParams();

	useEffect(() => {
		const getDetail = async () => {
			const params = {};
			const response = await tmdbApi.detail(category, id, { params });
			setItem(response);
			window.scrollTo(0, 0);
		};

		getDetail();
	}, [category, id]);

	return (
		<Helmet title={[category, id].join("")}>
			{item && (
				<>
					<div
						className="banner"
						style={{
							backgroundImage: `url(${apiConfig.originalImage(
								item.backdrop_path || item.poster_path
							)})`,
						}}
					></div>
					<div className="movie-content container mb-3">
						<div className="movie-content__poster">
							<div
								className="movie-content__poster__img"
								style={{
									backgroundImage: `url(${apiConfig.w500Image(
										item.poster_path || item.backdrop_path
									)})`,
								}}
							></div>
						</div>
						<div className="movie-content__info">
							<h1 className="title">{item.title || item.name}</h1>
							<div className="genres">
								{item.genres &&
									item.genres
										.slice(0, 5)
										.map((genre, index) => (
											<span
												key={index}
												className="genres__item"
											>
												{genre.name}
											</span>
										))}
							</div>
							<p className="overview">{item.overview}</p>
							<div className="cast">
								<div className="section__header">
									<h2>Casts</h2>
								</div>
								<CastList id={item.id} />
							</div>
						</div>
					</div>
					<div className="container">
						<div className="section mb-3">
							<VideoList id={item.id} />
						</div>
						<div className="section mb-3">
							<div className="section__header mb-3">
								<h2 className="title">Similar</h2>
								<OutlineButton className="small">
									View more
								</OutlineButton>
							</div>
							<MovieList
								id={item.id}
								category={category}
								type="similar"
							/>
						</div>
					</div>
				</>
			)}
		</Helmet>
	);
}

export default Detail;
