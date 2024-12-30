import React, { useState, useEffect } from "react";
import "../styles/home.css"; // Import the external CSS file
import wordImage from "../assets/images/word6.jpeg"; // Word of the month image
import eventImage from "../assets/images/word2.jpeg"; // Event image
import pastorImage from "../assets/images/pastor1.jpeg"; // Pastor's image
import testimonyImage1 from "../assets/images/testimonies1.jpg"; // First testimony image
import testimonyImage2 from "../assets/images/testimony2.jpg"; // Second testimony image
import blogImageLeft from "../assets/images/new-church.jpg"; // Replace with your actual image path
import blogImageRight from "../assets/images/rhema-life.jpg"; // Replace with your actual image path
import armImage1 from "../assets/images/children.jpg"; // Replace with your actual image path
import armImage2 from "../assets/images/choir.jpg"; // Replace with your actual image path
import armImage3 from "../assets/images/feast.jpg"; // Replace with your actual image path
import armImage4 from "../assets/images/youth.jpg"; // Replace with your actual image path
// import crownImage from "../assets/images/crown.jpg"; // Import the image

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
      <div className="button-container">
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
        <div className="vertical-line"></div>

        {/* Right Section: Pray with Pastor */}
        <div className="right-section">
          <button className="right-button">Pray with Pastor David</button>
          <div className="pastor-section">
            <img src={pastorImage} alt="Pastor David" className="rounded-image" />
            <div className="pastor-text">
              <p>Join Pastor David Omongole</p>
              <p>every Monday, Wednesday and</p>
              <p>Friday for a time of prayer</p>
              <p>Click ....</p>

              {/* Cornet Section */}
              <div className="cornet-section">
                <button className="cornet-button">Daily Cornet</button>
                <h6>The Daily Cornet Devotional</h6>
                <p>
                  The Cornet Daily Devotional is packaged with the word of God
                  to guide you in your walk with God and to enhance your
                  Spiritual growth.
                </p>
                <button className="read-button">Read</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Pastor David Omongole Digital Library */}
      <div className="digital-library-section">
        <hr className="divider" />
        <h2 className="digital-library-heading">
          Pastor David Omongole Digital Library
        </h2>
        <hr className="divider" />
      </div>

      {/* Testimony Section */}
<div className="testimony-content">
  <button className="testimony-button">Christos Rhema Testimonies</button>
  <div className="testimony-container">
    {/* Left Testimony */}
    <div className="testimony-left">
      <img
        src={testimonyImage1}
        alt="Testimony 1"
        className="testimony-image"
      />
      <p className="testimony-title">
        Testimony: From joblessness to abundant blessings
      </p>
      <p>
        During the darkest moments, when hope seemed distant, He provided
        strength I didn't know I had. His timing was perfect, and in His
        grace, I found opportunities where there once seemed to be none.
        Every setback became a setup for a greater breakthrough, and
        every trial was a lesson in trust. Today, I stand as a living
        testimony of His unfailing love and faithfulness, grateful for
        His miraculous hand that guided me from hardship to blessings
        beyond measure.
      </p>
    </div>

    {/* Vertical Divider */}
    <div className="vertical-divider"></div>

    {/* Right Testimony */}
    <div className="testimony-right">
      <img
        src={testimonyImage2}
        alt="Testimony 2"
        className="testimony-image"
      />
      <p className="testimony-title">
        Testimony: From pain to healing and restoration
      </p>
      <p>
        Healed from a pain I thought would never end, God restored my life
        piece by piece. He turned my despair into hope, my weakness into
        strength, and transformed my scars into a beautiful testimony of
        His healing and faithfulness.
      </p>
      <button className="more">Click for more...</button>
    </div>
  </div>



  {/* Give your life to Christ */}
{/* Give your life to Christ */}
<div className="call-to-action">
    <div className="image-container">
        {/* <img src={crownImage} alt="Crown" className="call-to-action-image" /> */}
        <div className="overlay"></div>
        <h2 className="head">Give Your Life to Christ Today!</h2>
        <p>Click here to know how</p>
    </div>
</div>


{/* BLOGS */}
<div className="blog-container">
  <button className="blog-button">Christos Rhema Blogs</button>
  
  <div className="blog-content">
    {/* Left Blog Section */}
    <div className="blog-left">
      <img src={blogImageLeft} alt="Blog Left" className="blog-image" />
      <h3>Embracing God's Timing: Trusting in His Perfect Plan</h3>
      <p>
        In our fast-paced world, it's easy to feel frustrated when things don’t go as we planned. 
        But as believers, we are called to trust in God’s timing—a timing that’s often different 
        from our own but always perfect. In this blog, we’ll explore biblical stories of those 
        who waited faithfully on God, the lessons we can learn from them, and practical ways 
        to deepen our trust when we feel tempted to rush ahead. Discover how embracing His 
        timing not only strengthens our faith but brings us peace and purpose in the waiting.
      </p>
    </div>

    {/* Right Blog Section */}
    <div className="blog-right">
      <img src={blogImageRight} alt="Blog Right" className="blog-image" />
      <h3>Embracing God's Timing: Trusting in His Perfect Plan</h3>
      <p>
        In our fast-paced world, it's easy to feel frustrated when things don’t go as we planned. 
        But as believers, we are called to trust in God’s timing—a timing that’s often different 
        from our own but always perfect. In this blog, we’ll explore biblical stories of those 
        who waited faithfully on God, the lessons we can learn from them, and practical ways 
        to deepen our trust when we feel tempted to rush ahead. Discover how embracing His 
        timing not only strengthens our faith but brings us peace and purpose in the waiting.
      </p>
    </div>  </div>


{/* MINISTRY ARMS */}
<div>
  <button className="ministry-arms-button">Ministry Arms</button>
  <div className="arm-images">
    <img src={armImage1} alt="Ministry Arm 1" className="arm-image" />
    <img src={armImage2} alt="Ministry Arm 2" className="arm-image" />
    <img src={armImage3} alt="Ministry Arm 3" className="arm-image" />
    <img src={armImage4} alt="Ministry Arm 4" className="arm-image" />
  </div>
</div>
</div>
</div>
    </div>
  );
};

export default HomePage;
