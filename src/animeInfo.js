import {useState, useEffect} from "react";
import ReactPlayer from "react-player"

function AnimeInfo(id){

    let [aniMarkup, setAniMarkup] = useState([<p>Loading...</p>])
    function turnResponseIntoObject(res) {
        return res.json();
    }

    function handleInformation(data) {

        // data.data.aired.string
        // data.data.duration
        // data.data.episodes
        // data.data.images.jpg.large_image_url
        // data.data.genres - object
        // data.data.mal_id
        // data.data.rating
        // data.data.status
        // data.data.title
        // data.data.title_english
        // data.data.trailer.embed_url
        // data.data.trailer.youtube_id
        // data.data.type
        // data.data.year

        setAniMarkup (
            [<div>
                <img src={data.data.images.jpg.large_image_url} alt=""/>
                <p>Title: {data.data.title}</p>
                <p>English Title: {data.data.title_english}</p>
                <p>{data.data.synopsis}</p>
                <p>No. of Ep: {data.data.episodes}</p>
                <div className="video-responsive"><ReactPlayer url={data.data.trailer.embed_url} /></div>  
            </div>]
        )

    }
    useEffect(function(){
        let url = 'https://api.jikan.moe/v4/anime/'
        let apiEndpoint = url + id.id

        fetch(apiEndpoint).then(turnResponseIntoObject).then(handleInformation)
    }, [])
    
    return aniMarkup
}

export default AnimeInfo;