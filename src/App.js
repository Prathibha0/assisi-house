import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VolunteerPage from './components/VolunteerPage';
import VolunteerApplicationForm from './components/VolunteerApplicationForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VolunteerPage />} />
        <Route path="/apply" element={<VolunteerApplicationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
