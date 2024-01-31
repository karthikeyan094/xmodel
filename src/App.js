import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [showForm,setShowForm] = useState(false);
  const [username,setUsername] = useState('');
  const[email,setEmail] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const[date,setDate] = useState(null);
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(phoneNumber<1000000000){
      alert("Invalid phone number.Please enter a 10-digit phone number.");
      return;
    }
    if(new Date().getTime()<new Date(date).getTime()){
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }
    setUsername('');
    setPhoneNumber('');
    setEmail('');
    setDate('');
  }


  return (
    <div className={showForm ?"App bg-light model":"App model"} onClick={()=>{if(showForm)setShowForm(false)}}>
    <h1>User Details Model</h1>
    <button onClick={()=>setShowForm(true)}>Open Form</button>
    {showForm && <form id='form' className='modal-content' onClick={(e)=> e.stopPropagation()} onSubmit={(e)=>handleSubmit(e)}>
      <h1>Fill Details</h1>
      <label>Username:</label>
      <input type='text' value={username} required onChange={(e)=> setUsername(e.target.value)}/>
      <label>Email Address:</label>
      <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
      <label>Phone Number:</label>
      <input type='number' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} required/>
      <label>Date of Birth</label>
      <input type='date' value={date} onChange={(e)=>setDate(e.target.value)} required/>
      <button type='submit'>Submit</button>
    </form> }
    </div>
  );
}

export default App;
