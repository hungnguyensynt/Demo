import { useState, useEffect } from 'react';

const RSSFeed = () => {
  const [feedItems, setFeedItems] = useState();

  useEffect(() => {
    // You would replace 'PROXY_URL' with the URL to your proxy or third-party service
    fetch(`https://rss.nytimes.com/services/xml/rss/nyt/AsiaPacific.xml`).then(async (response) => {
      const data = await response.text();

      setFeedItems(data);
    }).catch((error) => {
      console.error("Error fetching RSS feed:", error);
    });
  }, []);

  return (
    feedItems
  );
}

export default RSSFeed;