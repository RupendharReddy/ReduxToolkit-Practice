import React, { useState } from 'react'

const AddUser = () => {
    const [userdata, setUserdata] = useState({
        name: '',
        age: '',
        email: ''
    });
    const onchange = (e)=>{
        console.log(userdata);
        setUserdata({
            ...userdata,
            [e.target.name]: e.target.value
        })
        
    }
    console.log(userdata);
    
    function onSubmit(e){
        e.preventDefault();
        console.log(userdata, "userdata on submit");
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <h1>Add New User</h1>
            <label>Name:</label>
            <input type="text" onChange={onchange} ></input>
            <br></br>
            <label>Age:</label>
            <input type="number" onChange={onchange} ></input>
            <br></br>
            <label>Email:</label>
            <input type="text" onChange={onchange} ></input>
            <br></br>
            <button type='submit'>Add User</button>
        </form>
    </div>
  )
}

export default AddUser