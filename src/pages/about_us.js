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
          <div className="branch-group">
            <div className="branch">
              <img src={churchImage1} alt="Kampala Branch" className="branch-img" />
              
              <div className='contact'>
              <p>Pastor Omongole David Omongole</p>
              <p>Makerere, Kikoni-C</p>
              <p>Along Sir Apollo Kagwa Road. Take the road opposite MBI.</p>
              <p>+256 393 206 175 | + 256 706 905 656</p>
              </div>


            </div>
            <div className="branch">
              <img src={churchImage2} alt="Mbarara Branch" className="branch-img" />
              <div className='contact'>
              <p>Pastor Edgar Twasiima</p>
              <p>Ankole Institute, Near River Rwizi Bridge.</p>
              <p>Along Mbarara - Kabale Highway, In Rwebikoona, Mbarara.</p>
              <p>+256 394 721 640 | +256 200 903 974
              </p>
              </div>
            </div>
          </div>
          
          <div className="branch-group">
            <div className="branch">
              <img src={churchImage3} alt="Jinja Branch" className="branch-img" />
              <div className='contact'>
              <p>Pastor Mathias Suuna </p>
              <p>Merona Hotel (First Floor).</p>
              <p>Along Jinja - Kamuli Highway, just after Milo Mbili round about.</p>
              <p>+256 785 496 693 | +256 704 696 024
              </p>
              </div>
            </div>
            <div className="branch">
              <img src={churchImage4} alt="Kireka Branch" className="branch-img" />
              <div className='contact'>
              <p>Pastor Bright Kazirimu</p>
              
              <p>Next to GoodWays DayCare and Nursery School (First floor).
              </p>
              <p>Along Kireka - Namugongo Road.
              </p>
              <p>+256 785 790 004 | +256 709 587 558
              </p>
              </div>
            </div>
          </div>

          <div className="branch-group">
            <div className="branch">
              <img src={churchImage5} alt="Soroti Branch" className="branch-img" />
              <div className='contact'>
              <p>Pastor John Paul Omeri
              </p>
              <p>Atotti Annex, Opposite Voice of Teso Radio Station.
              </p>
              
              <p>+256 787 767 169 | +256 742 657 656
              </p>
              </div>
            </div>
            <div className="branch">
              <img src={churchImage6} alt="Gulu Branch" className="branch-img" />
              <div className='contact'>
              <p>Pastor Paul Engoru
              </p>
              <p>Ariaga East along Gulu-Kitgum highway.
              </p>
              <p>Next to Mmanuel Junior School.</p>
              <p>+256 774 160 212 | +256 706 334 538
              </p>
              </div>
            </div>
          </div>

          <div className="branch-group">
            <div className="branch">
              <img src={churchImage7} alt="Wakiso Branch" className="branch-img" />
              <div className='contact'>
              <p>Pastor Peter Sittankya
              </p>
              <p>Galuleeba Plaza, 2nd Floor, in Wakiso Town.
              </p>
              <p>Along Hoima Road.</p>
              <p>+256 765 021 380 | +256 752 848 593</p>
              </div>
            </div>
            <div className="branch">
              <img src={churchImage8} alt="Tororo Branch" className="branch-img" />
              <div className='contact'>
              <p>Pastor Philip Ajuk
              </p>
             
              <p>Flonico Hotel, Plot 29, Part Lane. Along Tororo - Mbale Road.
              </p>
              <p>+256 777 145 360 | +256 759 270 781
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
