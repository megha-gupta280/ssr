import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
// import Home from "./components/HomePage";
// import { Route } from "react-router-dom";
// import UsersList from "./components/UsersListPage";

// export default ()=>{
//     return (<div>
//         <Route exact path="/" component={Home} />
//         <Route path="/users" component={UsersList}/>
//     </div>)
// }



// In order to allow better routing at server side we need to make use of react-router/config to allow server to know which component we exactly need to render on screen in order to let server load all the redux actions before sending HTML as response to browser
export default [

    {
        ...App,
        routes: [
            {   ...HomePage, 
    path: "/",
    // component: Home, 
    exact: true,
},
{
    ...UsersListPage, 
    path: "/users",
    
},{
    ...NotFoundPage  // By not specifying the path, React router will decide to show this page if no matching route found
}
        ]
    }
   
];

