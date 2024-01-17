import React, { useState, useEffect } from "react";
import Parser from "rss-parser"; // Import the RSS parser library

const NewsSlideshow = () => {
  const [nasaFeed, setNasaFeed] = useState([]);
  const [esaFeed, setEsaFeed] = useState([]);
  const [currentSlideNasa, setCurrentSlideNasa] = useState(0);
  const [currentSlideEsa, setCurrentSlideEsa] = useState(0);

  useEffect(() => {
    const parser = new Parser();

    // Define the RSS feed URLs for NASA and ESA
    const nasaFeedUrl = "https://www.nasa.gov/rss/dyn/breaking_news.rss";
    const esaFeedUrl = "https://www.esa.int/rssfeed/Our_Activities/Space_News";

    // Fetch and parse the NASA RSS feed
    parser.parseURL(nasaFeedUrl, (err, nasaFeed) => {
      if (!err) {
        setNasaFeed(nasaFeed.items);
      }
    });

    // Fetch and parse the ESA RSS feed
    parser.parseURL(esaFeedUrl, (err, esaFeed) => {
      if (!err) {
        setEsaFeed(esaFeed.items);
      }
    });
  }, []);

  const navigateNasa = (direction) => {
    if (direction === "prev") {
      setCurrentSlideNasa((prev) =>
        prev === 0 ? nasaFeed.length - 1 : prev - 1
      );
    } else {
      setCurrentSlideNasa((prev) =>
        prev === nasaFeed.length - 1 ? 0 : prev + 1
      );
    }
  };

  const navigateEsa = (direction) => {
    if (direction === "prev") {
      setCurrentSlideEsa((prev) =>
        prev === 0 ? esaFeed.length - 1 : prev - 1
      );
    } else {
      setCurrentSlideEsa((prev) =>
        prev === esaFeed.length - 1 ? 0 : prev + 1
      );
    }
  };

  const renderSlide = (item, index) => (
    <div
      key={index}
      className={`mySlides  mb-6 ${index === 0 ? "block" : "hidden"}`}
    >
      <p className="text-gray-500 mt-2 text-xs">
        {new Date(item.pubDate).toLocaleDateString()}
      </p>
      <h3 className="text-lg font-medium mt-1">{item.title}</h3>
      <div className="flex flex-row">
        <div className="flex-grow w-1/3 pr-4">
          <p className="mt-2 overflow-hidden line-clamp-6 text-sm">
            {item.contentSnippet}
          </p>
        </div>
        {item.enclosure && item.enclosure.url && (
          <img
            src={item.enclosure.url}
            alt={item.title}
            className="mt-2 w-1/4 object-cover"
          />
        )}
      </div>
      <a
        href={item.link}
        className="text-blue-500 mt-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        read more...
      </a>
    </div>
  );

  return (
    <div className="flex flex-col justify-between">
      <div className="h-1/2">
        <h2 className="text-2xl text-gray-500 font-bold">nasa</h2>
        <div className="mt-1 flex flex-row">
          {/* <button className='flex-grow w-1/5' onClick={() => navigateEsa('prev')}>&#8592;</button> */}
          <div className="flex-grow w-3/5 slideshow-container text-start">
            {nasaFeed.map(renderSlide)}
          </div>
          {/* <button className='flex-grow w-1/5' onClick={() => navigateEsa('next')}>&#8594;</button> */}
        </div>
      </div>
      <div className="h-1/2">
        <h2 className="text-2xl text-gray-500 font-bold">esa</h2>
        <div className="mt-1 flex flex-row">
          {/* <button className='flex-grow w-1/5' onClick={() => navigateEsa('prev')}>&#8592;</button> */}
          <div className="flex-grow w-3/5 slideshow-container text-start">
            {esaFeed.map(renderSlide)}
          </div>
          {/* <button className='flex-grow w-1/5' onClick={() => navigateEsa('next')}>&#8594;</button> */}
        </div>
      </div>
    </div>
  );
};

export default NewsSlideshow;
