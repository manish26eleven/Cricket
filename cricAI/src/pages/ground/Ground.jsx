import { useState } from 'react';
import './Ground.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';

const Ground = () => {
    const navigate = useNavigate();

      const [formData, setFormData] = useState({
    groundName: "",
    location: "",
    contactPerson: "",
    mobile: "",
    email: "",
    startDate: "",
    monthlyMatchCount: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = () => {
  const errors = {};
  navigate('/thanks');

  if (!formData.matchType) errors.matchType = "Please select match type.";
  if (!formData.teamsPlaying.trim()) errors.teamsPlaying = "Enter team names.";
  if (!formData.matchDate) errors.matchDate = "Select match date.";
  if (!formData.venue.trim()) errors.venue = "Enter venue.";
  if (!formData.contactPerson.trim()) errors.contactPerson = "Enter contact person.";

  // Mobile validation: 10 digits
  if (!/^[0-9]{10}$/.test(formData.mobile)) {
    errors.mobile = "Enter a valid 10-digit mobile number.";
  }

  // Email validation
  if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = "Enter a valid email address.";
  }

  // If errors exist, show them
  if (Object.keys(errors).length > 0) {
    console.log("Validation Errors:", errors);
    alert("Please fill all required fields correctly.");
    return;
  }

  // If valid → submit
  console.log("Form Submitted:", formData);
  alert("Match registered successfully!");
};
    return(
        <div className="glow-wrapper">
       <div className="glow glow-left" ></div>
<div className="glow glow-right" ></div>
<Header/>
        <div className='ground-div'>
            <span className='ground-title'>
               Bring AI-Powered DRS to Your Ground 
            </span>
            <span className='ground-desc'>
                Submit your ground Details to Activate Crick.ai for your matches
            </span>
            <span className='ground-match'>Ground Information</span>
            <div className='ground-form'>
             <div className='ground-row'>
                <div className='input-div'>
                    <span className='ground-row-title'>Ground Name </span>
                    <select className='ground-select-input'
  name="groundName"
  value={formData.groundName}
  onChange={handleChange}
                     >
                        
                        <option value="" disabled>Select Ground</option>
  <option value="Local Matches">Local Matches</option>
  <option value="Tournament">Tournament</option>
  <option value="Practice Sessions">Practice Sessions</option>
 
                        </select>
                </div>
                 <div className='input-div'>
                    <span className='ground-row-title'>Location </span>
                    <input className='ground-row-input'
                     name="location"
  value={formData.location}
  onChange={handleChange}
                     placeholder='e.g.- New Delhi, INDIA'/>
                </div>
               
             </div>
              <div className='ground-row'>
                       <div className='input-div'>
                    <span className='ground-row-title'>  Contact Person </span>
                    <input className='ground-row-input'
                     name="contactPerson"
  value={formData.contactPerson}
  onChange={handleChange}
                     placeholder='Enter Full Name'/>
                </div>
                 <div className='input-div'>
                    <span className='ground-row-title'>Mobile No. </span>
                    <input className='ground-row-input'
                     name="mobile"
  value={formData.mobile}
  onChange={handleChange}
                     placeholder='+91-985624XXXX'/>
                </div>
             </div>
              <div className='ground-row'>
                    <div className='input-div'>
                    <span className='ground-row-title'>Email Address </span>
                    <input className='ground-row-input'
                     name="email"
  value={formData.email}
  onChange={handleChange}
                     placeholder='You@example.com'/>
                </div>
                
                  <div className='input-div'>
                    <span className='ground-row-title '>Preferred Start Date </span>
                    <input 
                    type='date'
                     placeholder='DD/MM/YYYY'
                     onFocus={(e) => e.target.showPicker()}
                      name="startDate"
  value={formData.startDate}
  onChange={handleChange}
                     
                     className='ground-row-input calendar'
                   />
                </div>
             </div>
              <div className='ground-row'>
                     <div className='input-div'>
                    <span className='ground-row-title'>Avg. Monthly Match Count</span>
                    <input className='ground-row-input'
                     name="monthlyMatchCount"
  value={formData.monthlyMatchCount}
  onChange={handleChange}
                     placeholder='e.g.- 10'/>
                </div>
             </div>
            </div>
            <button className='ground-button' onClick={()=> handleSubmit()}>
      Done
            </button>
        </div>
        </div>
    )
}
export default Ground;