import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Article } from '../../types/Article';

import './ArticlePage.scss';
import WrongPage from '../WrongPage/WrongPage';
import { BackToHomeButton } from '../../components/Buttons/BackToHomeButton';
import { getArticleById } from '../../api/api';

export function ArticlePage() {
  const [article, setArticle] = useState<Article>();

  const params = useParams();
  const { id } = params;

  const getArticleByIdFromApi = useCallback(async () => {
    if (id) {
      try {
        const articleFromApi = await getArticleById(+id);
        setArticle(articleFromApi.data);
      } catch (error) {
        throw new Error();
      }
    }
  }, []);

  useEffect(() => {
    getArticleByIdFromApi();
  }, []);

  return (
    <div className="article">
      {article ? (
        <>
          <img src={article?.imageUrl} alt="" className="article__img" />
          <div className="article__window">
            <div className="article__window-title">{article?.title}</div>
            <div className="article__window-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, corrupti aut sunt reiciendis expedita cumque ad odio
              reprehenderit sed quam debitis quos asperiores numquam? Eos, iusto
              fugiat. Assumenda sequi sed reprehenderit veniam recusandae in
              officia vitae praesentium accusamus minima quisquam quaerat
              voluptate facilis, deleniti fugit maiores sint magni iste dolores!
            </div>
            <div className="article__window-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              impedit aliquid eveniet, qui laudantium asperiores accusantium
              tempore, totam dolores distinctio facilis iusto officia magnam
              voluptatum eaque sed reiciendis voluptatibus quaerat ullam.
              Necessitatibus nihil nam voluptates officia? Eos voluptatem aut
              labore, officia adipisci veniam voluptates. Sed ducimus fugit
              dignissimos soluta aperiam deleniti, facere adipisci non, corrupti
              sequi optio necessitatibus facilis assumenda? Itaque laboriosam
              libero, obcaecati inventore voluptates distinctio perspiciatis
              minus illum quis debitis, mollitia maxime quisquam earum dolore.
              Corporis ipsam labore non quod, voluptatum distinctio asperiores
              soluta voluptates adipisci ipsum esse rem placeat ad sed quo
              tempora dolores at iure sint?
            </div>
            <div className="article__window-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              architecto perspiciatis non quidem error obcaecati maiores nostrum
              voluptas libero, ab quam harum laudantium eos consectetur mollitia
              expedita incidunt illum, voluptatum sequi velit esse quia
              doloribus provident. Aperiam aliquid dolore porro magnam dolor
              excepturi accusamus, quia alias eum id nulla architecto sit
              consequatur perspiciatis maiores repudiandae asperiores, modi,
              aliquam tempora ea ipsa fugiat iusto. Neque sit, explicabo
              dignissimos dolore voluptates animi voluptas repellat, dolorum,
              adipisci voluptatibus aspernatur aliquid nam cumque quod minus
              error iste aperiam quis rem exercitationem labore qui. Officiis,
              nesciunt cumque. Mollitia distinctio voluptatibus sint quis nulla
              rem consequuntur nam, unde, impedit quaerat quo! Earum ex, beatae
              autem porro eum ab alias eaque vitae architecto facilis iste quos.
              Excepturi esse qui commodi amet vitae consectetur fugiat repellat?
              Earum hic, nisi obcaecati sequi fugit asperiores. Maiores
              asperiores veniam, suscipit numquam facere consequatur vitae odit
              vero modi, fugit voluptatem ratione tempora?
            </div>
          </div>
          <div className="article__button">
            <BackToHomeButton />
          </div>
        </>
      ) : (
        <WrongPage />
      )}
    </div>
  );
}
