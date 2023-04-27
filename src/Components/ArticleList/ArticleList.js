import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const articles = [
  { name: 'USA’s topgeneral i Europa: Ukraine står stærkt til en forårsoffensiv', link: 'https://nyheder.tv2.dk/udland/2023-04-27-usas-topgeneral-i-europa-ukraine-staar-staerkt-til-en-foraarsoffensiv', color: 'red' },
  { name: 'Putin slår tilbage med nyt dekret – beslaglægger midler i europæiske energiselskaber', link: 'https://nyheder.tv2.dk/udland/2023-04-25-putin-slaar-tilbage-med-nyt-dekret-beslaglaegger-midler-i-europaeiske', color: 'blue' },
  { name: 'Kinas Xi i samtale med Zelenskyj: Forhandling kan slutte krigen', link: 'https://nyheder.tv2.dk/udland/2023-04-26-kinas-xi-i-samtale-med-zelenskyj-forhandling-kan-slutte-krigen', color: 'green' },
  { name: 'Kinas Xi i samtale med Zelenskyj: Forhandling kan slutte krigen', link: 'https://nyheder.tv2.dk/udland/2023-04-26-kinas-xi-i-samtale-med-zelenskyj-forhandling-kan-slutte-krigen', color: 'yellow' }
];

const ArticleList = () => (
  <ListGroup variant='flush'>
    {articles.map((article) => (
      <ListGroupItem variant='light'>
        <span
          style={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            marginRight: '5px',
            borderRadius: '50%',
            backgroundColor: article.color,
          }}
        />
        <a className='linktext' href={article.link}>{article.name}</a>
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default ArticleList;
