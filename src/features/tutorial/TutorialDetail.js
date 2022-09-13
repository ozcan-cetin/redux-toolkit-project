import React from 'react'
import {BiEdit} from "react-icons/bi";
import {FaTrashAlt} from "react-icons/fa";
import {TiArrowBack} from "react-icons/ti";
import { useLocation, useNavigate } from 'react-router-dom';
import {formatDistanceToNow, parseISO} from "date-fns"
import { useDispatch } from 'react-redux';
import { removeTutorial } from './tutorialSlice';


const TutorialDetail = () => {
  const dispatch=useDispatch()
  const {state}=useLocation()
  const{id, title, content, date} = state
  const fromThenToNow=parseISO(date) 
  const navigate = useNavigate()

  const deleteItem = () => {
    dispatch(removeTutorial(id))
    navigate("/")
  }
  return (
    <div>
        <h4 className="card-title">{title}</h4>
            <p className="card-content">{content}</p>
            <p>{formatDistanceToNow(fromThenToNow)} ago</p>
            <button onClick={()=>navigate(-1)}><TiArrowBack/></button>
                <button><BiEdit/></button>
                <button onClick={deleteItem}><FaTrashAlt/></button>
    </div>
  )
}

export default TutorialDetail