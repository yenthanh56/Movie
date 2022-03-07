import React from "react";
// import PropTypes from "prop-types";
// Home.propTypes = {};

import "./Home.scss";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import { OutlineButton } from "../../components/Button/Button";
import MovieList from "../../components/MovieList/MovieList";
import { category, movieType, tvType } from "../../api/tmdbApi";

// const MovieList = lazy(() => import("../../components/MovieList/MovieList"));
// const HeroSlider = lazy(() => import("../../components/HeroSlider/HeroSlider"));
function Home(props) {
	return (
		<>
			<HeroSlider />
			<div className="container">
				<div className="section mb-3">
					<div className="section__header mb-2">
						<h2 className="title">Top Movie Popular</h2>
						<OutlineButton className="small">
							{" "}
							View more
						</OutlineButton>
					</div>
					<MovieList
						category={category.movie}
						type={movieType.popular}
					/>
				</div>
				<div className="section mb-3">
					<div className="section__header mb-2">
						<h2 className="title">Top Movie Top Rated</h2>
						<OutlineButton className="small">
							{" "}
							View more
						</OutlineButton>
					</div>
					<MovieList
						category={category.movie}
						type={movieType.top_rated}
					/>
				</div>
				<div className="section mb-3">
					<div className="section__header mb-2">
						<h2 className="title">Top Movie Upcoming</h2>
						<OutlineButton className="small">
							{" "}
							View more
						</OutlineButton>
					</div>
					<MovieList
						category={category.movie}
						type={movieType.upcoming}
					/>
				</div>
				<div className="section mb-3">
					<div className="section__header mb-2">
						<h2 className="title">TV Trenning Popular</h2>
						<OutlineButton className="small">
							{" "}
							View more
						</OutlineButton>
					</div>
					<MovieList category={category.tv} type={tvType.popular} />
				</div>
			</div>
		</>
	);
}

export default Home;
