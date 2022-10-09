import {Link} from 'react-router-dom';

const NewsLists = ({news}) => {

  return (  
    <div className="news-list-list">
      {news.map((news_Data) => (
        <div className="news-list" key={news_Data.id}>
          <Link to={`/news/${news_Data.id}`}>
          <h2>{news_Data.title}</h2>
          <p>Category: {news_Data.category}</p>
          <p>Source: {news_Data.source}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default NewsLists;