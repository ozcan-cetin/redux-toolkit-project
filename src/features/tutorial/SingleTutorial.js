import React from 'react'
import { useNavigate } from 'react-router-dom';

const SingleTutorial = ({item}) => {
  const navigate = useNavigate()
    const {id,title,content}=item;
  return (
    <>
        <div className="card ">
            <h4 className="card-title">{title}</h4>
            <p className="card-content">{content}</p>
            <button onClick={()=>navigate("/detail", {state:item})}>More</button>
        </div>
    </>
  )
}

export default SingleTutorial