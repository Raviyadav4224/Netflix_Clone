import React from 'react'
import Card from './Card';
const imgUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, arr = [] }) => {
    return (
        <div className="Row">
          <h2>{title}</h2>
          <div>
            {arr.map((item, index) => (
              <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
            ))}
          </div>
        </div>
      );
}

export default Row