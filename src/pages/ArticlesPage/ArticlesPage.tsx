import React, { useCallback, useEffect, useState } from 'react';
import './ArticlesPage.scss';
import { Article } from '../../types/Article';
import { ArticleCard } from '../../components/ArticleCard/ArticleCard';
import { SearchQuery } from '../../components/SearchQuery';
import { ColorRing } from 'react-loader-spinner';
import useDebounce from '../../hooks/useDebounce';
import { getArticles } from '../../api/api';

export function ArticlesPage() {
  const [params, setParams] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);

  const getArticlesFromApi = useCallback(async () => {
    try {
      const articlesApi = await getArticles();
      setArticles(articlesApi.data);
      setLoading(false);
    } catch {
      setIsError(true);
      throw new Error();
    }
  }, []);

  useEffect(() => {
    getArticlesFromApi();
  }, []);

  const debouncedParams = useDebounce(params, 1000);

  const filteredArticles = articles.filter((value) => {
    if (debouncedParams === '') {
      return value;
    } else if (
      value.title.toLowerCase().includes(debouncedParams.toLowerCase()) ||
      value.summary.toLowerCase().includes(debouncedParams.toLowerCase())
    ) {
      return value;
    }
  });

  return (
    <div className="article-page">
      <SearchQuery params={params} setParams={setParams} />
      <h2 className="article-page__results">
        Results: {filteredArticles.length}
      </h2>
      <hr className="article-page__line" />
      {loading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
      {!loading && !isError && (
        <div className="article-page__articles">
          {filteredArticles.length !== 0 ? (
            filteredArticles?.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                params={debouncedParams}
              />
            ))
          ) : (
            <h3>Sorry, nothing was found for your query:(</h3>
          )}
        </div>
      )}
    </div>
  );
}
