import React, { useEffect, useState } from "react";
import './RenderAdmin.css'

function RenderAdmin(prop) {
  const {addItem,employee,setEmployee} = prop

  const[name,setName]=useState('')
  const[lastName,setLastName]=useState('')
  const[position,setPosition]=useState('')

  // state for lock submit button
  const[lockButton,setLockButton]=useState(false)

  // Method SetState to input
  const inputName = (name) =>{
    setName(name.target.value)
  }
  const inputLastName = (lastName) =>{
    setLastName(lastName.target.value)
  }
  const inputPosition = (position) =>{
    setPosition(position.target.value)
  }

  // Method take state(set already) to make an object(NEW employees)
  const handleSubmit = (e) =>{
    e.preventDefault()

    const newEmployee = {
      id:(employee[employee.length-1].id)+1,
      name: name,
      lastname: lastName,
      position: position
    }
    // sent attribute to function addNewItem in Home.jsx
    addItem(newEmployee)
    // console.log(employee,newEmployee);

    // clear state will work if add value = {...} in <input>
    setName('')
    setLastName('')
    setPosition('')
  }

  // Effect for unlock button if all of 3 input.length > 0
  useEffect (()=>{
    // declare new variable as boolean if 3 conditions is true this variable will be true
    console.log(typeof name)
    const checkInput = name.length>0 && lastName.length>0 && position.length>0;
    setLockButton(checkInput)
  },[name,lastName,position])

  const handleDelete = (index) => {
    const tempArr = [...employee]
    tempArr.splice(index,1)
    setEmployee(tempArr)
  }

  return (
    <div className="showResult">
      <h3>Create User Here</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(name)=>inputName(name)}/>
        <input type="text" placeholder="LastName" value={lastName} onChange={(lastName)=>inputLastName(lastName)}/>
        <input type="text" placeholder="Position" value={position} onChange={(position)=>inputPosition(position)}/>
        <button type="submit" disabled={!lockButton}>Save</button>
      </form>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
        {
          employee.map((employee,i)=>{
            return(
              <tr key={i}>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
                <td className="delete-button"><button onClick={()=>handleDelete(i)}>Delete</button></td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
    )
  
}

export default RenderAdmin;
