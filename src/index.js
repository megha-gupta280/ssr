// const express = require("express");
// const React  = require('react');
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("./client/components/Home").default;
import 'babel-polyfill';
import express from "express";
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import proxy from 'express-http-proxy';
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";



const app = express();

app.use('/api' , proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts){
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}))

app.use(express.static("public"));


app.get("*", (req, res)=>{

   const store = createStore(req);

 const promises = matchRoutes(Routes, req.path).map(({route})=>{
    return route.loadData ? route.loadData(store) : null
 })

 console.log(promises, "show promisies")

 Promise.all(promises).then(()=>{
    res.send(renderer(req, store));
 })
   //some logic to initialize and load the data into the store

//    res.send(renderer(req, store));


 

})


app.listen(3000, ()=>{
    console.log("listening on port 3000")
})