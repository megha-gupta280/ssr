import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";
// import Home from "./client/components/Home";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";


// Now that our Routes.js file is not containing a react component but an array of routes specified . Now we need to provide these routes to renderToString method in a slightly different manner.


export default (req, store) =>{
    // const content = renderToString(<Home/>);
    const content = renderToString(
        <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
            <div>
                {renderRoutes(Routes)}
            </div>

            {/* <Routes/> */}
            </StaticRouter>
         </Provider>
    );

    // we could make use of JSON.stringify(store.getState()) instead of using serialize function but in order to prevent data  from xss attacks
    return  `
    <html>
    <head></head>
    <body>
    <div id="root">${content}</div>
    <script>
    window.INITIAL_STATE = ${serialize(store.getState())}
    </script>
    <script src="bundle.js"></script>
   
    </body>
    </html>
    `;
}