import React from 'react';
import '../styles/AboutUs.css';  // For any custom styles you may want to add

// Import branch images
import churchImage1 from '../assets/images/kampala.jpg'; 
import churchImage2 from '../assets/images/Mbarara.jpg';
import churchImage3 from '../assets/images/Jinja.jpg';
import churchImage4 from '../assets/images/Kireka.jpg';
import churchImage5 from '../assets/images/Soroti.jpg';
import churchImage6 from '../assets/images/Gulu.jpg';
import churchImage7 from '../assets/images/Wakiso.jpg';
import churchImage8 from '../assets/images/Tororo.jpg';

import pastorMamaImage from '../assets/images/pastor_mama.png';  // Mama (wife) image

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1 className="about-us-title">Christos Rhema Church</h1>
      
      <p className="catchy-phrase">
        Christos Rhema Church is an embodiment of Christ's love, spreading His message and transforming lives.
      </p>
      
      <p>
        It is a born-again church with various branches in various parts of the country Uganda,
        with its main branch at Makerere Kaminanda Lane, Kampala.
      </p>
      <p>
        The church is a vibrant Christian community led by Pastor David Omongole alongside his wife
        Mrs. Linda Omongole.
      </p>
      
      <h2>Vision</h2>
      <p>
        To passionately spread the gospel of Jesus Christ, empower believers through the Word of God,
        and foster a vibrant, loving community that brings transformation to individuals, families, and society.
      </p>
      
      <h2>Mission</h2>
      <p>
        To raise a generation of Christ-centered leaders who live out their faith with purpose and impact, 
        creating a lasting legacy of love, service, and spiritual growth in Uganda and beyond.
      </p>
      
      <h2>Service Times</h2>
      <p>
        Join us for our services at Christos Rhema Church:
      </p>
      <ul>
        <li><strong>Midweek Session:</strong> Every Thursday, from 5:00 PM to 9:00 PM</li>
        <li><strong>Sunday Services:</strong> 
          <ul>
            <li>First Service: 8:00 AM</li>
            <li>Second Service: 10:00 AM (EAT)</li>
          </ul>
        </li>
      </ul>

      {/* Church Locations and Leadership Section */}
      <section className="church-details">
        <h2>Our Church Locations & Leadership</h2>
        
        <div className="pastor-info">
          <img 
            src={pastorMamaImage} 
            alt="Pastor Linda Omongole" 
            className="pastor-mama-img" 
          />
        </div>

        <div className='info'>
        <p>
          Pastor David Omongole, together with his wife Mrs. Linda Omongole, leads the Christos Rhema Church, inspiring and guiding believers in their walk with Christ.
          </p>
          <p>We also have branches in various parts of the country, serving the spiritual needs of many believers.</p>
          <p><strong>Contact Us:</strong></p>
  <p>For inquiries, please reach us at: <strong>+256 700 000 000</strong></p>
  <p>Or visit any of our branches.</p>
        </div>



        {/* Branch Locations Section */}
        <div className="branch-locations">
  
</div>

        {/* Branch List Section */}
        <div className="branch-list-section">
          <h3>Our Branches</h3>
          <div className="branch-list">
            <div className="branch">
              <img src={churchImage1} alt="Kampala Branch" className="branch-img" />
              <p><strong>Kampala Branch:</strong> Location and Contact details.</p>
            </div>
            <div className="branch">
              <img src={churchImage2} alt="Mbarara Branch" className="branch-img" />
              <p><strong>Mbarara Branch:</strong> Location and Contact details.</p>
            </div>
            <div className="branch">
              <img src={churchImage3} alt="Jinja Branch" className="branch-img" />
              <p><strong>Jinja Branch:</strong> Location and Contact details.</p>
            </div>
            <div className="branch">
              <img src={churchImage4} alt="Kireka Branch" className="branch-img" />
              <p><strong>Kireka Branch:</strong> Location and Contact details.</p>
            </div>
            <div className="branch">
              <img src={churchImage5} alt="Soroti Branch" className="branch-img" />
              <p><strong>Soroti Branch:</strong> Location and Contact details.</p>
            </div>
            <div className="branch">
              <img src={churchImage6} alt="Gulu Branch" className="branch-img" />
              <p><strong>Gulu Branch:</strong> Location and Contact details.</p>
            </div>
            <div className="branch">
              <img src={churchImage7} alt="Wakiso Branch" className="branch-img" />
              <p><strong>Wakiso Branch:</strong> Location and Contact details.</p>
            </div>
            <div className="branch">
              <img src={churchImage8} alt="Tororo Branch" className="branch-img" />
              <p><strong>Tororo Branch:</strong> Location and Contact details.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
