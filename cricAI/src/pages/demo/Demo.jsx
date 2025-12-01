import './Demo.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import { useState } from 'react';
const Demo = () => {
       const navigate = useNavigate();
         const [formData, setFormData] = useState({
           fullName: "",
           organizationName: "",
           mobile: "",
           email: "",
           startDate: "",
           timeSlot: "",
           useCase: ""
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
        <>
         <div className="glow-wrapper">
       <div className="glow glow-left" ></div>
<div className="glow glow-right" ></div>
<Header/>
        <div className='ground-div'>
            <span className='ground-title'>
              Book a Live Demo of Crik.ai
            </span>
            <span className='ground-desc'>
                Experience the power of AI-driven DRS with a guided walkthrough.
            </span>
            <span className='ground-match'>Schedule Your Demo</span>
            <div className='ground-form'>
             <div className='ground-row'>
                 <div className='input-div'>
                    <span className='ground-row-title'>Full Name </span>
                    <input className='ground-row-input'
                     name="fullName"
  value={formData.fullName}
  onChange={handleChange}
                     placeholder='Enter Your Full Name'/>
                </div>
               
                <div className='input-div'>
                    <span className='ground-row-title'>Organization/Academy/Individual/Other</span>
                    <input className='ground-row-input'
  name="organizationName"
  value={formData.organizationName}
  onChange={handleChange}
  placeholder='Enter Organization’s Name'
                     />
                        
                        
 
                        
                </div>
                
             </div>
              <div className='ground-row'>
                       <div className='input-div'>
                    <span className='ground-row-title'> Mobile No.</span>
                    <input className='ground-row-input'
                     name="mobile"
  value={formData.mobile}
  onChange={handleChange}
                     placeholder='+91-985624XXXX'/>
                </div>
                 <div className='input-div'>
                    <span className='ground-row-title'>Email Address</span>
                    <input className='ground-row-input'
                     name="email"
  value={formData.email}
  onChange={handleChange}
                     placeholder='You@example.com'/>
                </div>
             </div>
              <div className='ground-row'>
                  <div className='input-div'>
                    <span className='ground-row-title '>Preferred Date </span>
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
                    <div className='input-div'>
                    <span className='ground-row-title'>Preferred Time Slot </span>
                    <input className='ground-row-input'
                     name="timeSlot"
  value={formData.timeSlot}
  onChange={handleChange}
                     placeholder='e.g.- 11:00 - 12:00 '/>
                </div>
                
                
             </div>
              <div className='ground-row'>
                     <div className='input-div'>
                    <span className='ground-row-title'>Use Case</span>
                    <input className='ground-row-input'
                     name="useCase"
  value={formData.useCase}
  onChange={handleChange}
                     placeholder='Ground/Match/Tournament'/>
                </div>
             </div>
            </div>
            <button className='ground-button' onClick={()=> handleSubmit()}>
      Done
            </button>
        </div>
        </div>
        </>
    )
}
export default Demo;