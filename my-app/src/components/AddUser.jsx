import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser ,fetchUsers} from '../redux/userSlice';
const AddUser = () => {
    
    const [userdata, setUserdata] = useState({
        name: '',
        age: '',
        email: ''
    });
    const dispatch = useDispatch();
    // const res = useSelector((Store)=>Store.users.users.data);
    const userList = useSelector((store)=>store.users.users);
    const loading = useSelector((store)=>store.users.loading);
    const onchange = (e)=>{
        // console.log(userdata);
        setUserdata({
            ...userdata,
            [e.target.name]: e.target.value
        })
        
    }
    // console.log(userdata);
    
    function onSubmit(e){
        e.preventDefault();
        dispatch(addUser(userdata))
        console.log(userdata, "userdata on submit");
        
    }
    // useEffect(()=>{
    //     console.log(" response before ",res);
    // },[res])
    useEffect(()=>{
        // if(loading === false){
        // }
        dispatch(fetchUsers())
        console.log(userList,"userList");
    },[dispatch])
    
  return (
    <div>
        <form onSubmit={onSubmit}>
            <h1>Add New User</h1>
            <label>Name:</label>
            <input type="text" name="name" onChange={onchange} ></input>
            <br></br>
            <label>Age:</label>
            <input type="number" name="age" onChange={onchange} ></input>
            <br></br>
            <label>Email:</label>
            <input type="text" name="email" onChange={onchange} ></input>
            <br></br>
            <button type='submit'>Add User</button>
        </form>
        <form>
            {/* {console.log(userList)} */}
            {Object.keys(userList).map((key)=>(
                <div>
                    <h1>{userList[key].name}</h1>
                    <h1>{userList[key].age}</h1>
                    <h1>{userList[key].email}</h1>
                </div>
            ))}
        </form>
    </div>
  )
}

export default AddUser