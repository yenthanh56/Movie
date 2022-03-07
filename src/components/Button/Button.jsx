import React from "react";
import "./Buton.scss";
import PropTypes from "prop-types";
Button.propTypes = {
	onClick: PropTypes.func,
	icon: PropTypes.string,
	animation: PropTypes.bool,
};

function Button(props) {
	const Animation = props.animation ? "btn-animation" : "";
	return (
		<button
			className={`btn ${props.className} ${Animation} `}
			onClick={props.onClick ? () => props.onClick() : null}
		>
			<span className="btn__txt">{props.children}</span>
			{props.icon ? (
				<span className="btn__icon">
					<i className={`${props.icon} bx-tada`}></i>
				</span>
			) : null}
		</button>
	);
}

export const OutlineButton = (props) => {
	return (
		<Button
			className={`btn__outline ${props.className}`}
			onClick={props.onClick ? () => props.onClick() : null}
		>
			<span className="btn__txt">{props.children}</span>
			{props.icon ? (
				<span className="btn__icon">
					<i className={`${props.icon} bx-tada`}></i>
				</span>
			) : null}
		</Button>
	);
};

export default Button;
