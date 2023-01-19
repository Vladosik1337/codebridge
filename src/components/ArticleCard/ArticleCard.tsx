import { Article } from '../../types/Article';
import React from 'react';
import './ArticleCard.scss';
import { FaRegCalendar } from 'react-icons/fa';
import Highlighter from 'react-highlight-words';
import { ReadMoreButton } from '../Buttons/ReadMoreButton';

interface Props {
  article: Article;
  params: string;
}

export function ArticleCard({ article, params }: Props) {
  const [month, day, year] = new Date(article.publishedAt)
    .toLocaleString('en-us', { day: 'numeric', month: 'long', year: 'numeric' })
    .split(' ');

  return (
    <div className="card">
      <img src={article.imageUrl} alt="" className="card__image" />
      <div className="card__information">
        <div className="card__date">
          <FaRegCalendar className="card__date-icon" />
          <p className="card__date-text">{`${month} ${day.replace(
            ',',
            'th,'
          )} ${year}`}</p>
        </div>
        <Highlighter
          className="card__title"
          highlightClassName="YourHighlightClass"
          searchWords={[params]}
          autoEscape={true}
          textToHighlight={`${article.title.slice(0, 70)}...`}
        />
        <Highlighter
          className="card__summary"
          highlightClassName="YourHighlightClass"
          searchWords={[params]}
          autoEscape={true}
          textToHighlight={`${article.summary.slice(0, 100)}...`}
        />
        <div className="card__button">
          <ReadMoreButton id={article.id} />
        </div>
      </div>
    </div>
  );
}
