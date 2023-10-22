import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/VolunteerApplicationForm.css';

function VolunteerApplicationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    resume: null,
    isStudent: '',
    interestedPositions: [], // Add the new state property for volunteer positions
    // ...add more state properties as needed
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePositionsChange = (event) => {
    const { options } = event.target;
    const selectedPositions = [];
    for (const option of options) {
      if (option.selected) {
        selectedPositions.push(option.value);
      }
    }
    setFormData({ ...formData, interestedPositions: selectedPositions });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Redirect to another page after form submission
    navigate('/');
  };

  return (
    <div className="form-box">
      <div className="form-container">
        <h2>Volunteer Application Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Other form fields */}
          <label>
            Select What Volunteer Positions You're Interested In:
            <select
              name="interestedPositions"
              multiple
              value={formData.interestedPositions}
              onChange={handlePositionsChange}
              required
            >
              <option value="Accompaniment">Accompaniment</option>
              <option value="Fundraising">Fundraising</option>
              <option value="Core Team Member">Core Team Member</option>
              <option value="House Maintenance">House Maintenance</option>
              <option value="Driver">Driver</option>
              <option value="Board Membership">Board Membership</option>
            </select>
          </label>
          {/* Add more form fields and labels as needed */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerApplicationForm;
