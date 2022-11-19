import React from "react";
import {  useSelector } from "react-redux";
import "./MyList.scss";
import MyListCard from "./MyListCard";
const MyList = () => {
  const { myListItems } = useSelector((state) => state.user);
  const imgUrl = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <div className="myList">
        {myListItems &&
          myListItems.map((i) => {
            return (
              <>
                <div>
                  <MyListCard key={i} id={i.id} img={`${imgUrl}/${i.poster_path} `} />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default MyList;
