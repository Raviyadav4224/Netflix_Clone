import React, { useState } from "react";
import "./Home.scss";
import { useEffect } from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Row from "./Row";
const apiKey = process.env.REACT_APP_API_KEY;
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/w500";
const popularURL = `${url}/movie/popular?api_key=${apiKey}`;
const upcomingURL = `${url}/movie/upcoming?api_key=${apiKey}`;
const top_ratedURL = `${url}/movie/top_rated?api_key=${apiKey}&page=4`;
const now_playingURL = `${url}/movie/now_playing?api_key=${apiKey}`;
const Home = () => {
  const navigate=useNavigate()
  const goTo=()=>{
    navigate('/myList')
  }
  const [top_rated, set_top_rated] = useState([]);
  const [popular, set_popular] = useState([]);
  const [nowPlaying, set_nowPlaying] = useState([]);
  const [upcoming, set_Upcoming] = useState([]);
  const [genres, set_genres] = useState([]);
  useEffect(() => {
    document.title =
      "Netflix India - Watch TV Shows Online, Watch Movies Online";
    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
      );
      const data1 = await axios.get(now_playingURL);
      const data2 = await axios.get(popularURL);
      const data3 = await axios.get(upcomingURL);
      const { data } = await axios.get(top_ratedURL);
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
            backgroundImage: top_rated[0]
              ? `url(${`${imgUrl}/${top_rated[0].poster_path}`})`
              : "rgb(16, 16, 16)",
          }}
        >
          <h1>{top_rated[0] ? top_rated[0].original_title : null}</h1>
          <p>{top_rated[0] ? top_rated[0].overview : null}</p>
          <div>
            <button>
              <BiPlay />
              Play
            </button>
            <button onClick={goTo}>
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
            <Link key={item.id} to={`/genre/${item.id}`}>
              {item.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
