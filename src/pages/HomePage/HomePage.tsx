import React from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home">
      <Link to="/articles" className="home__button">
        Go to articles
      </Link>
    </div>
  );
}

export default HomePage;
