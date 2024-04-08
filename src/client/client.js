import 'babel-polyfill';
import React from "react";
import ReactDom from "react-dom"
import Routes from "./Routes";
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import axios from 'axios';
// import reducers from "./reducers";

const axiosInstance = axios.create({
    baseURL: "/api"
})

const store = createStore(reducers, window.INITIAL_STATE,  applyMiddleware(thunk.withExtraArgument(axiosInstance)))

ReactDom.hydrate(
    <Provider store={store}>


<BrowserRouter>
<div>
{renderRoutes(Routes)}
</div>
{/* <Routes/> */}
</BrowserRouter>
</Provider>
, document.querySelector("#root"));