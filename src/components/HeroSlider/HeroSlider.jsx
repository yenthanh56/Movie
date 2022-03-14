import React, { useState, useEffect, useRef } from "react";
// import PropTypes from 'prop-types';
// HeroSlider.propTypes = {
// };
import { useHistory } from "react-router-dom";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./HeroSlider.scss";
import Button, { OutlineButton } from "../Button/Button";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import Modal, { ModalContent } from "../Modal/Modal";

function HeroSlider(props) {
	const [movieItems, setMovieItems] = useState([]);

	useEffect(() => {
		const clearApi = setTimeout(() => {
			const fetchApi = async () => {
				try {
					const params = { page: 1 };
					const response = await tmdbApi.getmoviesList(
						movieType.popular,
						{ params }
					);
					setMovieItems(response.results.slice(0, 4));
				} catch (error) {
					console.log("invalid error", error);
				}
			};
			fetchApi();
		}, 200);
		return () => clearTimeout(clearApi);
	}, []);

	SwiperCore.use([Autoplay]);
	return (
		<div className="hero-slider">
			<Swiper
				modules={[Autoplay]}
				grabCursor={true}
				spaceBetween={0}
				slidesPerView={1}
			>
				{movieItems.map((item, index) => (
					<SwiperSlide key={index}>
						{({ isActive }) => (
							<HeroSliderItem
								item={item}
								className={`${isActive ? "active" : ""}`}
							/>
						)}
					</SwiperSlide>
				))}
			</Swiper>
			{movieItems.map((item, index) => (
				<TrailerMovie item={item} key={index} />
			))}
		</div>
	);
}

const HeroSliderItem = (props) => {
	const history = useHistory();
	const item = props.item;
	const bg = apiConfig.originalImage(
		item.backdrop_path ? item.backdrop_path : item.poster_path
	);

	const setModalActive = async () => {
		const modal = document.querySelector(`#modal_${item.id}`);
		const videos = await tmdbApi.getVideos(category.movie, item.id);
		if (videos.results.length > 0) {
			const videoSrc =
				"https://www.youtube.com/embed/" + videos.results[0].key;
			modal
				.querySelector(".modal__content> iframe")
				.setAttribute("src", videoSrc);
		} else {
			modal.querySelector(".modal__content").innerHTML = "No Trailer";
		}
		modal.classList.toggle("active");
	};

	return (
		<div
			className={`hero-slider__item ${props.className}`}
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className="hero-slider__item__content container">
				<div className="hero-slider__item__content__info">
					<h2 className="title">{item.title}</h2>
					<div className="overview">{item.overview}</div>
					<div className="btns">
						<Button
							onClick={() => history.push("/movie/" + item.id)}
							animation={true}
							icon="bx bx-play"
						>
							Watch now
						</Button>
						<OutlineButton onClick={setModalActive}>
							Watch Trailer
						</OutlineButton>
					</div>
				</div>
				<div className="hero-slider__item__content__poster">
					<img src={apiConfig.w500Image(item.poster_path)} alt="" />
				</div>
			</div>
		</div>
	);
};

const TrailerMovie = (props) => {
	const { item } = props;
	const contentModal = useRef(null);

	const onClose = () => {
		contentModal.current.setAttribute("src", "");
	};

	return (
		<Modal active={false} id={`modal_${item.id}`}>
			<ModalContent onClose={onClose}>
				<iframe
					ref={contentModal}
					width="100%"
					height="500px"
					title="trailer"
				></iframe>
			</ModalContent>
		</Modal>
	);
};

export default HeroSlider;
