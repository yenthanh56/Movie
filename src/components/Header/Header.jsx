import React, { useRef, useEffect } from "react";
// import PropTypes from 'prop-types';
// Header.propTypes = {
// };

import "./Header.scss";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/tmovie.png";
import Loading from "../Loading/Loading";

const headerNav = [
	{
		display: "Home",
		path: "/",
	},
	{
		display: "Movie",
		path: "/moive",
	},
	{
		display: "Tv",
		path: "/tv",
	},
];

function Header(props) {
	const { pathname } = useLocation();
	const active = headerNav.findIndex((e) => e.path === pathname);
	const headerRef = useRef(null);

	useEffect(() => {
		const scrollTopShrink = () => {
			if (
				document.body.scrollTop > 100 ||
				document.documentElement.scrollTop > 100
			) {
				headerRef.current.classList.add("shrink");
			} else {
				headerRef.current.classList.remove("shrink");
			}
		};
		window.addEventListener("scroll", scrollTopShrink);
		return () => {
			window.removeEventListener("scroll", scrollTopShrink);
		};
	}, []);

	return (
		<div className="header" ref={headerRef}>
			<div className="header__wrap container">
				<div className="header__logo">
					<img src={logo} alt="logo main" />
					<Link to="/">Movie</Link>
				</div>
				<ul className="header__nav">
					{headerNav.map((item, index) => (
						<li
							key={index}
							className={`${active === index ? "active" : ""}`}
						>
							<Link to={item.path}>{item.display}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Header;
