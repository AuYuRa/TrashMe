import React from 'react';
import '../containers/App';
import '../containers/App.css';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header>
        Trashme
        <Link to='/items'> Items </Link>
      </header>
    </div>
  );
};

export default Home;
