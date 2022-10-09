import { useEffect, useState } from "react";
import FetchData from "./FetchData";
import NewsLists from "./NewsLists";

const Homepage = () => {
  const [insert, setInsert] = useState("");
  const {data: news_Data}= FetchData('http://localhost:8000/news');

  function validate_insert(event) {
    event.preventDefault();
    if(insert.length < 3) {
      alert("Keyword must be at least 3 or more characters, Please try again!");
    }
  }

  function search_insert(e) {
    setInsert(e.target.value);
  }

  return (  
    <div className="homepage">
      <div className="search-bar">
          <input className="search-keyword" type="text" placeholder="Search keyword..." onChange={search_insert} value={insert}/>
          <button className="search-button" type="submit" onClick={validate_insert}>
            <span>S</span> 
          </button>
        </div>
      {news_Data && <NewsLists  news={news_Data}/>}
    </div>
  );
}
export default Homepage;