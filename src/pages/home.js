import React, { useState, useEffect } from "react";
import "../styles/home.css"; // Import the external CSS file
import wordImage from "../assets/images/word6.jpeg"; // Word of the month image
import eventImage from "../assets/images/word2.jpeg"; // Event image
import pastorImage from "../assets/images/pastor1.jpeg"; // Pastor's image

const HomePage = () => {
  const [wordOfMonth, setWordOfMonth] = useState(null);

  // Simulating a backend API call to fetch data
  useEffect(() => {
    const fetchData = async () => {
      setWordOfMonth({
        graphic: wordImage,
        link: "https://example.com/word-of-the-month",
        trendingText: "Special miracle night-19th October",
      });
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {/* Word of the Month Section */}
      <div className="word-of-the-month">
        <div className="text-center">
          <div className="top-button-container">
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
            {wordOfMonth ? (
              <a
                href={wordOfMonth.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={wordOfMonth.graphic}
                  alt="Word of the Month"
                  className="word-of-the-month-img"
                />
              </a>
            ) : (
              <p>Loading Word of the Month...</p>
            )}
          </div>
          <h1 className="church-heading">AN EMBODIMENT OF CHRIST'S LOVE.</h1>
        </div>
      </div>

      {/* Buttons and Information Section */}
      <div
        className="button-container"
        style={{ display: "flex", alignItems: "flex-start", marginTop: "20px" }}
      >
        {/* Left Section: Ministry Events */}
        <div>
          <button className="left-button">Christos Rhema Ministry Events</button>
          <div>
            <img src={eventImage} alt="Event Poster" className="event-poster" />
            <div className="event-details">
              <p className="highlights">
                <span className="highlights-label">Highlights:</span> Trusting
                God's Promises: Focusing on key scriptures that encourage us to
                rely on God’s promises, especially when circumstances seem
                overwhelming. Emphasis on verses like Isaiah 41:10 and
                Philippians 4:6-7.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="vertical-line"
          style={{
            width: "1px",
            height: "40%",
            backgroundColor: "#ccc",
            margin: "0 20px",
          }}
        ></div>

        {/* Right Section: Pray with Pastor */}
<div className="right-section">
    <button className="right-button">Pray with Pastor David</button>
    <div className="pastor-section">
        <img
            src={pastorImage}
            alt="Pastor David"
            className="rounded-image"
        />
        <div className="pastor-text">
            <p>Join Pastor David Omongole</p>
            <p>every Monday, Wednesday and</p>
            <p>Friday for a time of prayer</p>
            <p>Click ....</p>
        
              {/* Cornet Section */}
              <div className="cornet-section">
                <button className="cornet-button">Daily Cornet</button>
                <h6>The Daily Cornet Devotional</h6>
                <p>The Cornet Daily Devotional is packaged with the word of God 
                to guide you in your walk with God and to enhance your Spiritual growth.</p>
                <button className="read-button">Read</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
