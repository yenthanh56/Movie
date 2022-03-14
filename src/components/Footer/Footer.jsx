import React from "react";
// import PropTypes from 'prop-types';
// Footer.propTypes = {
// };
import { Link } from "react-router-dom";
import "./Footer.scss";
import bgFooter from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";
function Footer(props) {
	return (
		<div className="footer" style={{ backgroundImage: `url(${bgFooter})` }}>
			<div className="footer__content container">
				<div className="footer__content__logo">
					<img src={logo} alt="logo main" />
					<Link to="/">Movie</Link>
				</div>
				<div className="footer__content__menus">
					<div className="footer__content__menu">
						<Link to="/">Home</Link>
						<Link to="/">Contact us</Link>
						<Link to="/">Term of services</Link>
						<Link to="/">About us</Link>
					</div>
					<div className="footer__content__menu">
						<Link to="/">Live</Link>
						<Link to="/">FAQ</Link>
						<Link to="/">Preminum</Link>
						<Link to="/">Pravacy policy</Link>
					</div>
					<div className="footer__content__menu">
						<Link to="/">You must watch</Link>
						<Link to="/">Recent release</Link>
						<Link to="/">Top IMDB</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
