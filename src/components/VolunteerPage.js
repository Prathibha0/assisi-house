import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel'; // Assume you have a Carousel component
import Header from './Header'; // Assume you have a Header component
import Footer from './Footer'; // Assume you have a Footer component
import '../styles/VolunteerPage.css';

function VolunteerPage() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <div className="volunteer-container">
      <Header />
      <div className="volunteer-content">
        <div className="intro-text">
          <p>
            Volunteers are at the heart of our work. Since the beginning, volunteers have been involved in the acquisition
            and rehab of our buildings, accompanying residents to doctors visits or the grocery store, fundraising and
            collecting items to make Assisi House feel like home.
          </p>
          <Link to="/apply">
            <button className="apply-now-button">Apply Now</button>
          </Link>
        </div>
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}

export default VolunteerPage;
