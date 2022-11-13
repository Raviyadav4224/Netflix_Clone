import axios from "axios";
import React, { useEffect, useState } from "react";
import Row from "./Row";
const apiKey = process.env.REACT_APP_API_KEY;
const TVShows = () => {
  const [popularTvShows, set_popularTvShows] = useState([]);
  const [recommedation, set_recommedation] = useState([]);

  useEffect(() => {
    document.title='Watch TV Shows Online'
    const getPopularTvShows = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
      );
      set_popularTvShows(results)
    const data1= await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
      );
      set_recommedation(data1.data.results)
    };

    getPopularTvShows()
  }, []);


  return (<>
    <Row title="Popular TV Shows" arr={popularTvShows} />
    <Row title="Recommended" arr={recommedation} />
  </>
  
  );
};

export default TVShows;
