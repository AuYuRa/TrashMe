import React from 'react';
import { useLocation } from 'react-router-dom';


const Details = () => {
  const tags = useLocation().state
  // console.log(tags) // Print out the make sure that tags is an array
  return (
    <div>
      <header>
        {tags.map((tag, index) => {
          return <p> {tag} </p>
        })}
      </header>
    </div>
  );
};

export default Details;
