import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./MovieDetails.scss";
const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const imageURL = `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`;
  const movieURL = `https://api.themoviedb.org/3/movie/${id}?api_key=33c7d3f0f8f87f93c2e44d860b794116&language=en-US`;
  const dispatch = useDispatch();
  const addToMyList = () => {
    dispatch({
      type:"addToMyListSuccess"
    })
    dispatch({
      type: "addToMyList",
      payload: movieDetails,
    });
  };

  useEffect(() => {
    const getMovieDetails = async () => {
      const { data } = await axios.get(movieURL);
      setMovieDetails(data);
    };
    getMovieDetails();
  }, [movieURL]);
  return (
    <>
      <div
        className="moviePoster"
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <h1>{movieDetails.original_title}</h1>
        <p>{movieDetails.overview}</p>
        <h3>Release Date : {movieDetails.release_date}</h3>
        <div>
          <a href={movieDetails.homepage}>Visit Official Site </a>
          <button onClick={addToMyList}>Add To Watch List</button>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
