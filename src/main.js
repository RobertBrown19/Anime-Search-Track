import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

//This is a React component
// - It needs to be UpperCamelCased
// - It needs to return some JSX

function App() {
    return (
        <div>
            <App />
        </div>
    );
}

ReactDOM.render( <App />, document.querySelector("#app"));