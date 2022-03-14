import React from "react";
import "./Input.scss";

function Input(props) {
	return (
		<input
			className="input-search"
			type={props.type}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange ? (e) => props.onChange(e) : null}
		></input>
	);
}

export default Input;
