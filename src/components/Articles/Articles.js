import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';
import Headlines from '../Headlines/Headlines';

import "./Articles.css";
const Articles = () => {
    const [articles, setArticles] = useState([]);
    useEffect(()=> {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=abcb011e382a40929b1ac5ca807938e5')
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    },[])
    return (
        <div className="all-news">
        <div className="articles">
            {
                articles.map(article => <Article article={article}/>)
            }
        </div>
        <div className="headlines">
            <h1>Top Headlines</h1>
            <Headlines articles={articles}/>
        </div>
        </div>
    );
};

export default Articles;