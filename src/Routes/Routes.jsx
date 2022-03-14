import React from "react";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "../components/Loading/Loading";
// import Home from "../pages/Home/Home";
// import Catalog from "../pages/Catalog/Catalog";
// import Detail from "../pages/Detail/Detail";

const Home = lazy(() => import("../pages/Home/Home"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const Detail = lazy(() => import("../pages/Detail/Detail"));

function Routes() {
	return (
		<Suspense fallback={<Loading />}>
			<Switch>
				<Route path="/:category/search/:keyword" component={Catalog} />
				<Route path="/:category/:id" component={Detail} />
				<Route path="/:category" component={Catalog} />
				<Route path="/" exact component={Home} />
			</Switch>
		</Suspense>
	);
}

export default Routes;
