import React from 'react';
import './home.css'
import '../containers/App';
import '../containers/App.css';
import {Link} from 'react-router-dom';
import Lottie, { LottiePlayer } from 'lottie-react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Home = () => {
  
  return (
    <div>
      <div className="Title">Where does your trash go?</div>
      <div className="sub">“TrashMe” tells you the category of your trash and where to throw it</div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div class="play-GIF-on-hover"></div>
      <Link to='/items' className="button"> Start </Link>
      
    </div>
  );
};

export default Home;
