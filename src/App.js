import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [data,setdata]=useState({users:[]});
  const url='https://dummyjson.com/users';
  useEffect(()=>{
    fetchdata();
  },[]);

  const fetchdata=()=>{
    fetch(url)
    .then((response) => response.json())
    .then((data)=>{
      setdata(data);
    });
  };
  return (
    <div>
        <h1>Dummy Data</h1>
        <table>
        <thead>
            <tr className='rl'>
                <th>Sno</th>
                <th>Profile Pic</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>UserName</th>
                <th>Domain</th>
                <th>IP</th>
                <th>University</th>
            </tr>
            {
              data.users.map((item,i)=>(
              <tr key={i}>
                  <td>{item.id}</td>
                  <td><img src={item.image} alt="" /></td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.gender}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>{item.domain}</td>
                  <td>{item.ip}</td>
                  <td>{item.university}</td>
              </tr>
            ))}
        </thead>
        </table>
    </div>
  )
}

export default App;