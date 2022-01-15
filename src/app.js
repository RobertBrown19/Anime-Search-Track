import {useState} from "react";
import SearchAnime from "./searchAnime";


function App() {
    let [appMarkup, setAppMarkup] = useState([<SearchAnime />])

    function searchAnime() {
        setAppMarkup ([<SearchAnime />])
    }

    function trackAnime() {
        setAppMarkup ([<h1>Coming Soon</h1>])
    }

    return (
        <div>
            <button onClick={searchAnime}>Search Anime</button>
            <button onClick={trackAnime}>Track Anime</button>
            {appMarkup}
        </div>
    );
}

export default App;