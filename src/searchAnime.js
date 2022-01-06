import React, {useState} from "react";

function SearchAnime () {

    let [title, setTitle] = useState("");
    let page = 1 ;
    let [previousPageButton, setPreviousPageButton] = useState([])
    let [nextPageButton, setNextPageButton] = useState([])
    let [markup, setMarkup] = useState([])

    function handleTitleInput(event) {
        setTitle(event.target.value)
    }
    function handleLimitInput(event) {
        setLimit(event.target.value)
    }

    function nextPage() {
        page += 1;
        setMarkup([]);
        searchForAnime();
    }

    function previousPage() {
        page -= 1;
        setMarkup([]);
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

            //data.data[n].title
            //data.data[n].title_english
            //data.data[n].images.jpg.image_url
            //data.data[n].mal_id
            //data.data[n].episodes

            //data.pagination.has_next_page

            setMarkup (data.data.map(function (i) {
                return(
                    <div key={i.mal_id}>
                        <img src={i.images.jpg.image_url} width={280} alt="" />
                        <p>Title: {i.title}</p>
                        <p>English Title: {i.title_english}</p>
                        <p>No. of Ep: {i.episodes}</p>
                    </div>
                )
            }));
            console.log(markup);

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
            {previousPageButton}
            {nextPageButton}
            <div id="grid">
                {markup}
            </div>
            
        </div>
    );

}

export default SearchAnime;
