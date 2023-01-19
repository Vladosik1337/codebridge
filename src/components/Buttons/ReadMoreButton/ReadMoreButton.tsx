import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ReadMoreButton.scss';

interface Props {
  id: number;
}

export function ReadMoreButton({ id }: Props) {
  return (
    <Link to={`/articles/${id}`} className="read-more-button">
      Read more
      <FaArrowRight />
    </Link>
  );
}
