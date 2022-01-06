import React from "react";
import ReactDOM from "react-dom";
import SearchAnime from "./searchAnime";

//This is a React component
// - It needs to be UpperCamelCased
// - It needs to return some JSX

function App() {
    return (
        <div>
            <SearchAnime />
        </div>
    );
}

ReactDOM.render( <App />, document.querySelector("#app"));