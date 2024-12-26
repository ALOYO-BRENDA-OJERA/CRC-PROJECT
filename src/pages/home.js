import React, { useState, useEffect } from "react";
import "../styles/home.css"; // Import the external CSS file

const HomePage = () => {
  const [wordOfMonth, setWordOfMonth] = useState(null);

  // Simulating a backend API call to fetch data
  useEffect(() => {
    const fetchData = async () => {
      // Example data from backend (you will replace this with real API call)
      setWordOfMonth({
        graphic: "/path/to/word-of-the-month.jpg", // Replace with real backend data
        trendingText: "Special miracle night-19th October", // Placeholder text for now
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="container">
        {/* Word of the Month Section */}
        <div className="word-of-the-month">
          <div className="text-center">
            <div className="top-button-container">
              {/* Flex container for marquee and button */}
              <div className="marquee-button-container">
                {wordOfMonth ? (
                  <div className="trending-marquee">
                    <p className="trending-text">{wordOfMonth.trendingText}</p>
                  </div>
                ) : (
                  <p>Loading Word of the Month...</p>
                )}
                <button className="top-button">Trending Now</button>
              </div>
            </div>
            <div className="graphic-placeholder word-of-the-month-graphic">
              {/* Placeholder for Word of the Month graphic */}
              {wordOfMonth ? (
                <img
                  src={wordOfMonth.graphic}
                  alt="Word of the Month"
                  className="word-of-the-month-img"
                />
              ) : (
                <p>Loading Word of the Month...</p>
              )}
            </div>
            {/* Move the heading here */}
            <h1 className="church-heading">AN EMBODIMENT OF CHRIST'S LOVE.</h1>
          </div>
        </div>

        {/* New Div with Buttons */}
        <div className="button-container" style={{ height: '100px', display: 'flex', alignItems: 'center' }}>
          <button className="left-button">Christos Rhema  Ministry Events</button>
          <div className="vertical-line" style={{ width: '1px', height: '50%', backgroundColor: '#ccc', margin: '0 20px' }}></div>
          <button className="right-button">Pray with Pastor David</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;