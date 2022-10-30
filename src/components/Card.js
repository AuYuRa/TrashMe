import React from 'react';
import {Link} from 'react-router-dom';


const Card = (props) => {
  // const {name,email,id} = props;
  //console.log(props)
  return(
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

      <div>
        <h2>{props.name}</h2>
        <Link to='/details' state= {props.tag}> Where it goes? </Link>
      </div>
    </div>
  );
}

export default Card;
