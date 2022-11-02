import React, { useState } from "react";
import "./Home.scss";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Row from "./Row";
const apiKey = process.env.REACT_APP_API_KEY;
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const Home = () => {
  const [top_rated, set_top_rated] = useState([]);
  const [popular, set_popular] = useState([]);
  const [nowPlaying, set_nowPlaying] = useState([]);
  const [upcoming, set_Upcoming] = useState([]);
  const [genres, set_genres] = useState([]);
  useEffect(() => {
    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
      );
      const data1 = await axios.get(
        `${url}/movie/now_playing?api_key=${apiKey}`
      );
      const data2 = await axios.get(`${url}/movie/popular?api_key=${apiKey}`);
      const data3 = await axios.get(`${url}/movie/upcoming?api_key=${apiKey}`);
      const { data } = await axios.get(
        `${url}/movie/top_rated?api_key=${apiKey}&page=4`
      );
      set_top_rated(data.results);
      set_genres(genres);
      set_popular(data2.data.results);
      set_nowPlaying(data1.data.results);
      set_Upcoming(data3.data.results);
    };
    getAllGenre();
  }, []);

  return (
    <>
      <section className="home">
        <div
          className="banner"
          style={{
            backgroundImage: nowPlaying[0]
              ? `url(${`${imgUrl}/${nowPlaying[0].poster_path}`})`
              : "rgb(16, 16, 16)",
          }}
        >
          <h1>{nowPlaying[0] ? nowPlaying[0].original_title : null}</h1>
          <p>{nowPlaying[0] ? nowPlaying[0].overview : null}</p>
          <div>
            <button>
              <BiPlay />
              Play
            </button>
            <button>
              My List
              <AiOutlinePlus />
            </button>
          </div>
        </div>

        <Row title="Top Rated" arr={top_rated} />
        <Row title="Popular" arr={popular} />
        <Row title="Upcoming" arr={upcoming} />
        <Row title="Now Playing" arr={nowPlaying} />
        <div className="genres">
          {genres.map((item) => (
            <Link key={item.id} to={`/genre/id`}>
              {item.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home;
