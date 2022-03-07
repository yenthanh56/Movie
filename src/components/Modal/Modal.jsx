import React, { useState, useEffect, useRef } from "react";

import "./Modal.scss";
import PropTypes from "prop-types";

Modal.propTypes = {
	id: PropTypes.string,
	active: PropTypes.bool,
	onClose: PropTypes.func,
};

function Modal(props) {
	const [active, setActive] = useState(false);
	const modalRef = useRef(null);
	const onClose = () => {
		modalRef.current.classList.remove("active");
		modalRef.current.setAttribute("src", "");
		if (props.onClose) props.onClose();
	};
	useEffect(() => {
		setActive(props.active);
	}, [props.active]);

	return (
		<div
			id={props.id}
			className={`modal ${active ? "active" : ""}`}
			ref={modalRef}
			onClick={onClose}
		>
			{props.children}
		</div>
	);
}

export const ModalContent = (props) => {
	const contentRef = useRef(null);

	const onCloseContent = () => {
		contentRef.current.parentNode.classList.remove("active");
		if (props.onClose) props.onClose();
	};

	return (
		<div ref={contentRef} className="modal__content">
			{props.children}
			<div className="modal__content__close" onClick={onCloseContent}>
				<i className="bx bx-x"></i>
			</div>
		</div>
	);
};

ModalContent.prototype = {
	onClose: PropTypes.func,
};

export default Modal;

// const escFunction = useCallback((event) => {
// 	if (event.keyCode === 27) {
// 		//Do whatever when esc is pressed
// 		contentModal.current.classList.remove("active");
// 	}
// }, []);

// useEffect(() => {
// 	document.addEventListener("keydown", escFunction, false);

// 	return () => {
// 		document.removeEventListener("keydown", escFunction, false);
// 	};
// }, [escFunction]);
