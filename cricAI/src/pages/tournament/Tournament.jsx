import { useNavigate } from 'react-router-dom';
import './Tournament.css';
import { useState } from 'react';
import Header from '../../components/header/Header';
import { DateRange } from "react-date-range";

const Tournament = () => {

    const navigate = useNavigate();
   

      const [formData, setFormData] = useState({
         tournamentName: "",
         noOfTeams: "",
         organizationName: "",
         noOfMatches: "",
         organizerName: "",
         tournamentDate: "",
         location: "",
         mobile: "",
         email: "",

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
               DRS Support for your Entire Tournament
            </span>
            <span className='ground-desc'>
                Submit tournament details to get complete DRS coverage by Crick.ai.
            </span>
            <span className='ground-match'>Tournament Information</span>
            <div className='ground-form'>
             <div className='ground-row'>
                <div className='input-div'>
                    <span className='ground-row-title'>Tournament Name </span>
                    <input className='ground-row-input'
  name="tournamentName"
  value={formData.tournamentName}
  onChange={handleChange}
  placeholder='e.g.- Premier League'
                     />
                        
                       
 
                       
                </div>
                 <div className='input-div'>
                    <span className='ground-row-title'>No. of Teams </span>
                    <input className='ground-row-input'
                    name='noOfTeams'
                    onChange={handleChange}
                    value={formData.noOfTeams}
                     placeholder='e.g.- 08'/>
                </div>
               
             </div>
              <div className='ground-row'>
                       <div className='input-div'>
                    <span className='ground-row-title '>Organization Name </span>
                    <input 
                    
                     placeholder='Enter Organization’s Name'
                    
                     name='organizationName'
                    onChange={handleChange}
                    value={formData.organizationName}
                     
                     className='ground-row-input '
                   />
                </div>
                 <div className='input-div'>
                    <span className='ground-row-title'>No. of Matches </span>
                    <input className='ground-row-input'
                    name='noOfMatches'
                    onChange={handleChange}
                    value={formData.noOfMatches}
                     placeholder='e.g.- 32'/>
                </div>
             </div>
              <div className='ground-row'>
                    <div className='input-div'>
                    <span className='ground-row-title'>Organizer Name </span>
                    <input className='ground-row-input'
                    name='organizerName'
                    onChange={handleChange}
                    value={formData.organizerName}
                     placeholder='Enter Organizer Name'/>
                </div>
                <div className='input-div'>
                    <span className='ground-row-title'>Tournament Dates </span>
                    <input className='ground-row-input calendar'
                    name='tournamentDate'
                     type='date'
                    
                     onFocus={(e) => e.target.showPicker()}
                    onChange={handleChange}
                    value={formData.tournamentDate}
                     placeholder='Select Date Range'/>
                 

                </div>
             </div>
              <div className='ground-row'>
                    <div className='input-div'>
                    <span className='ground-row-title'>Location </span>
                    <input className='ground-row-input'
                    name='location'
                    onChange={handleChange}
                    value={formData.location}
                     placeholder='e.g.- New Delhi, INDIA'/>
                </div>
                <div className='input-div'>
                    <span className='ground-row-title'>Organizer No. </span>
                    <input className='ground-row-input'
                    name='mobile'
                    onChange={handleChange}
                    value={formData.mobile}
                     placeholder='+91-985624XXXX'/>
                </div>
             </div>
              <div className='ground-row'>
                     <div className='input-div'>
                    <span className='ground-row-title'>Organizer Email</span>
                    <input className='ground-row-input'
                    name='email'
                    onChange={handleChange}
                    value={formData.email}
                     placeholder='You@example.com'/>
                </div>
             </div>
            </div>
            <button className='ground-buttons' onClick={()=> handleSubmit()}>
      Done
            </button>
        </div>
        </div>
        </>
    )
}
export default Tournament;