import React from 'react'
import { useDispatch } from 'react-redux'
import { MdDeleteForever } from "react-icons/md";

const MyListCard = ({img,id}) => {
    const dispatch=useDispatch()
        const removeFromMyList = () => {
          dispatch({
            type:"removeFromMyListSuccess"
          })
            dispatch({
              type: "removeFromMyList",
              payload: id,
            });
          };
    return <>
    <img className="Card" src={img} alt=""/>
    <div  onClick={removeFromMyList}><MdDeleteForever/></div>
    </>;
}

export default MyListCard