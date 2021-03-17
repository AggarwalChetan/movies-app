function MoviesByIdInfo(props){

    // let moviesById = {};
    // const SEARCH_MOVIES_API = `http://api.themoviedb.org/3/movie/${props.id}?api_key=61cec280feda32b806f9f3187c008707`;
    
    // fetch(SEARCH_MOVIES_API)
    // .then(res => res.json())
    // .then(data => {
    //     moviesById = data;
    //     console.log(moviesById.overview);
    // });

    // console.log(moviesById)
    return(<div className="temp">{props.id}</div>);
}

export default MoviesByIdInfo;