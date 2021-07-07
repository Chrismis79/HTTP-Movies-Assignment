import React, { useState, useEffect } from "react";
import axios from 'axios'

// "http://localhost:5000/api/movies"



const UpdateMovie = props => {
    console.log('UpdateMovie props', props)
    const [movie, setMovie] = useState({});
    const id = props.match.params.id;    

    const changeHandler = e => {
        e.persist();
        let value = e.target.value;
        if(e.target.name === 'stars'){
            value = value.split(',');
        }
        setMovie({
            ...movie,
            [e.target.name]: value
        });
    };

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then(res => {
                console.log(res.data)
                setMovie(res.data);
            })
            .catch(err => console.log(err.response));
    }, [id])

    const handleSubmit = e => {
        e.preventDefault()
        axios
            .put(`http://localhost:5000/api/movies/${id}`, movie)
            .then(res => {
                console.log('axios put: ', res);
                props.history.push(`/movies/${id}`)
            })
            .catch(err => console.log(err.response))
    }

    if(movie.length === 0) {
        return <h2>Loading data...</h2>
    };
    return (
        <div>
            <h2>Update Movie</h2>
            <form onSubmit={handleSubmit}>
            <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="title"
          value={movie.title}
        />
            <div className="baseline" />

            <input
          type="string"
          name="director"
          onChange={changeHandler}
          placeholder="Director"
          value={movie.director}
        />
            <div className="baseline" />

            <input
          type="string"
             name="metascore"
          onChange={changeHandler}
          placeholder="Metascore"
          value={movie.metascore}
        />
            <div className="baseline" />

            <input
          type="text"
          name="stars"
          onChange={changeHandler}
          placeholder="Stars"
          value={movie.stars}
        />
            <div className="baseline" />

         <button>Update</button>
        </form>

        </div>
    )
}
export default UpdateMovie;

