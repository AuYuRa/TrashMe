import React from 'react';
import { useLocation } from 'react-router-dom';
import './Details.css';
import {TAGS} from '../Tags';


const Details = () => {
  const tags = useLocation().state
  // console.log(tags) // Print out the make sure that tags is an array
  return (
    <div className = 'tc'>
      {tags.map((tag, index) => {
          console.log(tag);
          console.log(TAGS[tag]);
          return(
            <div>
              <h2> {tag} </h2>
              <p className='text'> {TAGS[tag].trash_bin} </p>
              <img alt = 'items' src = {`${TAGS[tag].bin_image}`} style = {{width:200 , height:200}} />
              <p className='text'> {TAGS[tag].fact} </p>
            </div>);
      })}
    </div>
  );
};

export default Details;
