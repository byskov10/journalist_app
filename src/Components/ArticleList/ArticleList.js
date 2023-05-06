import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import SteamGraphVizData from '../StreamgraphViz/StreamGraphData.json';
import './ArticleList.css'

const colors = ['red', 'blue', 'green', 'purple']

const articles = SteamGraphVizData.map((item) => ({
  articleid: item.articleid,
  name: item.name,
  link: item.articlelink,
  color: '',
}));



const ArticleList = ({ wordIds }) => {
  
  const filteredArticles = articles.filter((article) => wordIds.includes(Number(article.articleid)));
  
  return (
    <ListGroup variant='flush'>
      {filteredArticles.map((article) => (
        <ListGroupItem key={article.articleid} variant='light'>
          <span
            style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              marginRight: '5px',
              borderRadius: '50%',
              backgroundColor: 'red',
            }}
          />
          <a className='linktext' href={article.link} target='_blank' rel='noopener noreferrer'>{article.name}</a>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default ArticleList;