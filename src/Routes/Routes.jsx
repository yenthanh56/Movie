import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Detail from "../pages/Detail/Detail";

function Router() {
	return (
		<Switch>
			<Route path="/:category/search/:keyword" component={Catalog} />
			<Route path="/:category/:id" component={Detail} />
			<Route path="/:category" component={Catalog} />
			<Route path="/" exact component={Home} />
		</Switch>
	);
}

export default Router;
