import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './BackToHomeButton.scss';

export function BackToHomeButton() {
  return (
    <Link to="/articles" className="back-to-home-button">
      <FaArrowLeft /> Back to homepage
    </Link>
  );
}
