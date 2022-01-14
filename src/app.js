import {useState} from "react";
import SearchAnime from "./searchAnime";


function App() {
    let [markup, setMarkup] = useState([<SearchAnime />])

    function searchAnime() {
        setMarkup ([<SearchAnime />])
    }

    function trackAnime() {
        setMarkup ([<h1>Coming Soon</h1>])
    }

    return (
        <div>
            <button onClick={searchAnime}>Search Anime</button>
            <button onClick={trackAnime}>Track Anime</button>
            {markup}
        </div>
    );
}

export default App;