import React from 'react';
import { useLocation } from 'react-router-dom';


const Details = () => {
  const tag = useLocation().state
  return (
    <div>
      <header>
        {tag}
      </header>
    </div>
  );
};

export default Details;
