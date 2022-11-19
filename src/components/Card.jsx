import React from 'react'
import {useNavigate} from 'react-router-dom'
const Card = ({img,id}) => {
    const navigate=useNavigate()
    const goToDetails=()=>{
        navigate(`movie/${id}`)
      }
    return <img className="Card" src={img} alt="" onClick={goToDetails}/>;
}

export default Card