import {useEffect, useState} from "react";


const FetchData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(news_Data => {
        setData(news_Data);
      })
  }, [url]);
  return {data}
}
export default FetchData;