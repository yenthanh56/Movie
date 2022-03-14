import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";
// import PropTypes from 'prop-types';

//CastList.propTypes = {
// };

function CastList(props) {
	const { category } = useParams();
	const [casts, setCasts] = useState([]);

	useEffect(() => {
		const getCredits = async () => {
			try {
				const response = await tmdbApi.credits(category, props.id);
				setCasts(response.cast.slice(0, 5));
			} catch (error) {
				console.log("invalid", error);
			}
		};
		getCredits();
	}, [category, props.id]);

	return (
		<div className="casts">
			{casts.map((item, index) => (
				<div className="casts__item" key={index}>
					<div
						className="casts__item__img"
						style={{
							backgroundImage: `url(${apiConfig.w500Image(
								item.profile_path
							)})`,
						}}
					></div>
					<p className="casts__item__name">{item.name}</p>
				</div>
			))}
		</div>
	);
}

export default CastList;
