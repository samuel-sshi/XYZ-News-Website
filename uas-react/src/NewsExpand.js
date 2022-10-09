import { useParams } from "react-router";
import FetchData from "./FetchData";


const NewsExpand = () => {
  const {id} = useParams();
  const {data: news_Data} = FetchData('http://localhost:8000/news/' + id);

  return (  
    <div className="news-expand">
      {news_Data && 
        (
          <article>
            <h1>{news_Data.title}</h1>
            <div className="news-expand-image">
              <img src={news_Data.image} alt="Source img not available"/> 
            </div>
            <h4 className="news-expand-source">Source: {news_Data.source}</h4>
            <h4>Author: {news_Data.author}</h4>
            <h4>Category: {news_Data.category}</h4>
            <div className="news-expand-body">{news_Data.description}</div>
            <h4>Original News: 
              <mark> {news_Data.url}</mark>
            </h4>
          </article>
        )
      }
    </div>
  );
}
export default NewsExpand;