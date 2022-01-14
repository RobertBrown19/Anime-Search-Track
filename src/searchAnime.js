import {useState, useEffect} from "react";
import AnimeInfo from "./animeInfo"

function SearchAnime () {

    let [title, setTitle] = useState("");
    let page = 1 ;
    let [previousPageButton, setPreviousPageButton] = useState([])
    let [nextPageButton, setNextPageButton] = useState([])
    let [searchMarkup, setSearchMarkup] = useState([])
    let [aniInfo, setAniInfo] = useState([])

    function handleTitleInput(event) {
        setTitle(event.target.value)
    }

    function handleAnimeClick(event) {
        setPreviousPageButton([])
        setNextPageButton([])
        setSearchMarkup(<AnimeInfo id={event.currentTarget.id}/>)

    }

    function nextPage() {
        page += 1;
        setSearchMarkup([]);
        searchForAnime();
    }

    function previousPage() {
        page -= 1;
        setSearchMarkup([]);
        searchForAnime();
    }

    function newSearch() {
        page = 1
        searchForAnime()
    }
    
    function searchForAnime() {
        
        function turnResponseIntoObject(res) {
            return res.json();
        }

        function handleInformation(data) {

            if (page > 1) {
                setPreviousPageButton([<button onClick={previousPage}>Previous Page</button>])
            } else {
                setPreviousPageButton([])
            }

            if (data.pagination.has_next_page) {
                setNextPageButton([<button onClick={nextPage}>Next Page</button>])
            } else {
                setNextPageButton([])
            }

            setSearchMarkup (data.data.map(function (i) {
                return(
                    <div onClick={handleAnimeClick} id={i.mal_id}>
                        <img src={i.images.jpg.image_url} width={280} alt=""/>
                        <p>Title: {i.title}</p>
                        <p>English Title: {i.title_english}</p>
                        <p>No. of Ep: {i.episodes}</p>
                    </div>
                )
            }));

        }

        let url = 'https://api.jikan.moe/v4/anime?'
        let queryString =`q=${title}&limit=20&page=${page}`
        let apiEndpoint = url + queryString

        fetch(apiEndpoint).then(turnResponseIntoObject).then(handleInformation)
    }

    
    return (
        <div>
            <h1>Search Anime</h1>
            <input onInput={handleTitleInput} title="Title" value={title} type="text" />
            <button onClick={newSearch}>Search</button>
            <p></p>
            {previousPageButton}
            {nextPageButton}
            <p></p>
            <div id="grid">
                {searchMarkup}
            </div>
            
        </div>
    );

}

export default SearchAnime;
