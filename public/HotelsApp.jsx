import React, { Component } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/";
import initialState from "./HotelsState";

import HotelsList from "./containers/HotelsList.jsx";
import HotelPage from "./containers/HotelPage.jsx";

import Header from "./components/Header";


export default class HotelsApp extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		return(
			<Router>
				<div>
					<Header headerText = { "Welcome to Hotels!" } headerStyle = {{textAlign: "center"}}/>
					<Route exact path = "/" component = { HotelsList } />
					<Route exact path = "/hotels/" component = { HotelsList } />
					<Route exact path = "/hotel/:id" component = { HotelPage } />
				</div>
			</Router>
		)
	}
}

var reactRoot = document.getElementById("react-root");
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

ReactDOM.render(<Provider store = { store } >
					<HotelsApp />
				</Provider>,
				reactRoot);