import React from "react";
import "../styles/AboutPastor.css"; // Optional: For styling
import pastorImage from "../assets/images/PASTOR.jpg"; // Replace with the correct image path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBroadcastTower, faUniversity, faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";

const AboutPastor = () => {
  return (
    <div className="about-pastor">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-image">
              <img src={pastorImage} alt="Pastor Omongole" />
            </div>
            <div className="hero-text">
              <h1 className="hero-title">Pastor David Omongole</h1>
              <p className="hero-subtitle">
                President of Agapao International Ministries<br />
                Founding Pastor of Christos Rhema Church
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor Image and Intro Text
      <section className="pastor-image-section">
        
      </section> */}

      {/* Pastor Details Section */}
      <section className="pastor-details-section">
        <div className="details-container">
          {/* Right Side: Text Content */}
          <div className="details-right">
            <h2 className="details-title">About the Pastor</h2>
            <p>
              Pastor Omongole David Omongole is a committed minister of the Word of God
            </p>
            <p>
              and the Spirit. His ministration has blessed many, revealing the Love of Christ and
            </p>
            <p>
              the depth of Truth all around the world.
              <h3>He is a leader, writer, teacher, among others and below are some of the areas he is involved in.</h3>
            </p>

            <div className="grouped-headings">
              {/* Upper Row: Rhema Life Program and The Cornet Daily */}
              <div className="heading-row">
                <div className="heading-group">
                  <h3>
                    <FontAwesomeIcon icon={faBook} /> The Cornet Daily
                  </h3>
                  <p>Author of The Cornet Daily, which is a devotional, packaged with the Word of God to guide you in your walk with God and to enhance your spiritual growth.</p>
                </div>

                <div className="heading-group">
                  <h3>
                    <FontAwesomeIcon icon={faBroadcastTower} /> Rhema Life Program
                  </h3>
                  <p>Which is a Radio ministry Program reaching countless souls.</p>
                </div>
              </div>

              {/* Lower Row: Rhema College and Global Impact */}
              <div className="heading-row">
                <div className="heading-group">
                  <h3>
                    <FontAwesomeIcon icon={faUniversity} /> Rhema College
                  </h3>
                  <p>Training and discipling future ministers. Rhema College is a church-based Bible study institution dedicated to equipping individuals with biblical knowledge and spiritual growth for impactful Christian living.</p>
                </div>

                <div className="heading-group">
                  <h3>
                    <FontAwesomeIcon icon={faGlobe} /> Global Impact
                  </h3>
                  <p>Pastor Omongole's visionary leadership has enabled Christos Rhema Church to expand through the creation of multiple branches, while also making a global impact by spreading the Gospel and transforming lives worldwide.</p>
                </div>
              </div>
            </div>

            {/* Vision and Statement of Faith Sections */}
            <div className="vision-faith">
              <h3>Vision</h3>
              <p>
                Raising an army of believers who are dedicated to taking the Gospel to the ends of the world to the glory of God.
            
              </p>

              <h2>Statement of Faith</h2>
              <p>
                We believe in one God, the Creator of all things, eternally existent in three persons: God the Father, God the Son, and God the Holy Spirit. We believe in the deity of Jesus Christ, His virgin birth, His sinless life, His atoning death, and His resurrection from the dead. We believe that salvation is available through faith in Jesus Christ alone and that it is by grace, not by works, that we are saved. We believe in the power of the Holy Spirit to transform lives, empowering believers to live out their faith and fulfill the Great Commission.
              </p>
            </div>

            <h3>
              <FontAwesomeIcon icon={faUser} /> Personal & Professional
            </h3>
            <ul>
              <li>Loving husband and father</li>
              <li>Qualified pharmacologist and pharmacist</li>
              <li>Dedicated minister of the Word</li>
              <li>Mentor and spiritual leader</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPastor;
