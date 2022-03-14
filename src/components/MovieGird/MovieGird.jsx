import React, { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";
import "./MovieGird.scss";
import { OutlineButton } from "../Button/Button";
import Input from "../Input/Input";
function MovieGird(props) {
	const [items, setItems] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(0);
	const { keyword } = useParams();

	useEffect(() => {
		const getList = async () => {
			let response = null;
			if (keyword === undefined) {
				const params = {};
				switch (props.category) {
					case category.movie:
						response = await tmdbApi.getmoviesList(
							movieType.top_rated,
							{
								params,
							}
						);
						break;

					default:
						response = await tmdbApi.getTvList(tvType.on_the_air, {
							params,
						});
				}
			} else {
				const params = {
					query: keyword,
				};
				response = await tmdbApi.search(props.category, { params });
			}
			setItems(response.results);
			setTotalPage(response.total_pages);
		};
		getList();
	}, [props.category, keyword]);

	const LoadMore = async () => {
		let response = null;
		if (keyword === undefined) {
			const params = {
				page: page + 1,
			};
			switch (props.category) {
				case category.movie:
					response = await tmdbApi.getmoviesList(
						movieType.top_rated,
						{
							params,
						}
					);
					break;

				default:
					response = await tmdbApi.getTvList(tvType.on_the_air, {
						params,
					});
			}
		} else {
			const params = {
				query: keyword,
				page: page + 1,
			};
			response = await tmdbApi.search(props.category, { params });
		}
		setItems([...items, ...response.results]);
		setPage(page + 1);
	};

	return (
		<>
			<div className="section mb-3">
				<MovieSearch keyword={keyword} category={props.category} />
			</div>

			<div className="movie-gird">
				{items.map((item, index) => (
					<MovieCard
						category={props.category}
						key={index}
						item={item}
					/>
				))}
			</div>
			{page < totalPage ? (
				<div className="movie-gird__loadmore" onClick={LoadMore}>
					<OutlineButton className="small">Loadmore</OutlineButton>
				</div>
			) : null}
		</>
	);
}

const MovieSearch = (props) => {
	const history = useHistory();
	const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");
	const inputRef = useRef(null);
	const gotoSearch = useCallback(() => {
		if (keyword.trim().length > 0) {
			history.push(`/${category[props.category]}/search/${keyword}`);
			inputRef.current.focus();
		} else {
			history.push(`/${category[props.category]}`);
			inputRef.current.focus();
		}
		inputRef.current.focus();
	}, [props.category, history, keyword]);

	useEffect(() => {
		const enterEvent = (e) => {
			e.preventDefault();
			if (e.keyCode === 13) {
				gotoSearch();
			}
		};
		document.addEventListener("keyup", enterEvent);

		return () => {
			document.removeEventListener("keyup", enterEvent);
		};
	}, [gotoSearch]);

	return (
		<div className="movie-search" ref={inputRef}>
			<Input
				type="text"
				placeholder="Enter keyword"
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
			/>
			<OutlineButton className="small" onClick={() => gotoSearch()}>
				Tìm kiếm
			</OutlineButton>
		</div>
	);
};

export default MovieGird;
