import React from "react";
// import PropTypes from 'prop-types';
// Catalog.propTypes = {
// };
import Helmet from "../../components/Helmet/Helmet";
import "./Catalog.scss";
import { useParams } from "react-router-dom";

import PageHeader from "../../components/PageHeader/PageHeader";
import { category as cate } from "../../api/tmdbApi";
import MovieGird from "../../components/MovieGird/MovieGird";
function Catalog() {
	const { category } = useParams();
	console.log(category);

	return (
		<Helmet title={category}>
			<PageHeader>{category === cate.movie ? "Movies" : "TV"}</PageHeader>

			<div className="container">
				<div className="section mb-3">
					<MovieGird category={category} />
				</div>
			</div>
		</Helmet>
	);
}

export default Catalog;
