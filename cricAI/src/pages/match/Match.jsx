import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import './Match.css';
import { useState } from 'react';

const Match = () => {

     const navigate = useNavigate();
      const [formData, setFormData] = useState({
         matchType: "",
         teamsPlaying: "",
         matchDate: "",
         venue: "",
         contactPerson: "",
         mobile: "",
         email: ""
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
                Enable DRS For Your Next Match
            </span>
            <span className='ground-desc'>
                Register Match details and let Crik.ai handle the decision review
            </span>
            <span className='ground-match'>Match Details</span>
            <div className='ground-form'>
             <div className='ground-row'>
                <div className='input-div'>
                    <span className='ground-row-title'>Match Type </span>
                    <select className='ground-select-input'
  name="matchType"
  value={formData.matchType}
  onChange={handleChange}
                     >
                        
                        <option value="" disabled>Select Match Type</option>
  <option value="Local Matches">Local Matches</option>
  <option value="Tournament">Tournament</option>
  <option value="Practice Sessions">Practice Sessions</option>
 
                        </select>
                </div>
                 <div className='input-div'>
                    <span className='ground-row-title'>Teams Playing </span>
                    <input className='ground-row-input'
                    name={formData.teamsPlaying}
                    onChange={handleChange}
                    value={formData.teamsPlaying}
                     placeholder='e.g.- Team A VS Team B'/>
                </div>
               
             </div>
              <div className='ground-row'>
                       <div className='input-div'>
                    <span className='ground-row-title '>Match Date </span>
                    <input 
                    type='date'
                     placeholder='DD/MM/YYYY'
                     onFocus={(e) => e.target.showPicker()}
                     name={formData.matchDate}
                    onChange={handleChange}
                    value={formData.matchDate}
                     
                     className='ground-row-input calendar'
                   />
                </div>
                 <div className='input-div'>
                    <span className='ground-row-title'>Venue </span>
                    <input className='ground-row-input'
                    name={formData.venue}
                    onChange={handleChange}
                    value={formData.venue}
                     placeholder='e.g.- Arun Jaitley Cricket Stadium, Delhi'/>
                </div>
             </div>
              <div className='ground-row'>
                    <div className='input-div'>
                    <span className='ground-row-title'>Contact Person </span>
                    <input className='ground-row-input'
                    name={formData.contactPerson}
                    onChange={handleChange}
                    value={formData.contactPerson}
                     placeholder='Enter Full Name'/>
                </div>
                <div className='input-div'>
                    <span className='ground-row-title'>Mobile No. </span>
                    <input className='ground-row-input'
                    name={formData.mobile}
                    onChange={handleChange}
                    value={formData.mobile}
                     placeholder='+91-985624XXXX'/>
                </div>
             </div>
              <div className='ground-row'>
                     <div className='input-div'>
                    <span className='ground-row-title'>Email Address</span>
                    <input className='ground-row-input'
                    name={formData.email}
                    onChange={handleChange}
                    value={formData.email}
                     placeholder='You@example.com'/>
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
export default Match;