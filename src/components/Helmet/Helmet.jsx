import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

Helmet.propTypes = {
	title: PropTypes.string.isRequired,
};

function Helmet(props) {
	document.title = "Movie - " + props.title;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return <div>{props.children}</div>;
}

export default Helmet;
