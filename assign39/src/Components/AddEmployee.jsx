import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddEmployee() {
  const [email, setEmail] = useState('');
  const [dept, setDept] = useState('')
  
  const [name, setName] = useState('')
  

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }
 
  const changeDept = (e) => {
    setDept(e.target.value);
  }
  const changeName = (e) => {
    setName(e.target.value);
  }
 

  const handleAdd = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || dept === "" ) {
      setError("Please Enter the above details")
    }
    else {
      let emp = { name: name, email: email,  dept: dept,  };
      axios.post(" http://localhost:4000/employeeDetails", emp)
      setError("")
      navigate('/view-emp')

    }

  }

  return (
    <div>
      <form style={{ width: '50%', margin: 'auto' }}>
        <div className="form-group m-2">
          <label htmlFor="Fname"> Name:</label>
          <input
            type="text"
            className="form-control "
            id="Fname"
            placeholder="Enter Name"
            name="Fname"
            value={name}
            onChange={changeName}
          />
        </div>

        <div className="form-group m-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={changeEmail}
          />
        </div>
       
        <div className="form-group m-2">
          <label htmlFor="pwd">Department</label>
          <select onChange={changeDept} className="form-control">
            <option value=''>select</option>
            <option value='IT'>IT</option>
            
            <option value='HR'>HR</option>
          </select>
        </div>
     
        <button type="submit" className="btn btn-primary m-2" onClick={handleAdd}>
          Add
        </button>
        {error &&
          <div className="text-danger">{error}</div>}
      </form>

    </div>
  )
}
