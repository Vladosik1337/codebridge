import React from 'react';
import { BackToHomeButton } from '../../components/Buttons/BackToHomeButton';
import './WrongPage.scss';

function WrongPage() {
  return (
    <div className="container">
      <h1 className="container__text">Page not found</h1>
      <BackToHomeButton />
    </div>
  );
}

export default WrongPage;
