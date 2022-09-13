import React from "react";
import { useSelector } from "react-redux";
import AddTutorialForm from "./AddTutorialForm";
import SingleTutorial from "./SingleTutorial";

const TutorialList = () => {
  const tutorial = useSelector((state) => state.tutorial);
  console.log(tutorial);
  return (
    <div>
      <AddTutorialForm />
      {tutorial?.map((item=>{
        return(
            <SingleTutorial id={item.id} item={item}/>
        )
      }))}
    </div>
  );
};

export default TutorialList;
