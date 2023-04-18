import React, { useState } from "react";
import './RenderAdmin.css'

function RenderAdmin(prop) {
  const {addItem,employee,setemployee} = prop

  const[name,setName]=useState('')
  const[lastName,setLastName]=useState('')
  const[position,setPosition]=useState('')

  // Method SetState to input
  const inputName = (name) =>{
    setName(name.target.value)
  }
  const inputLastName = (lastname) =>{
    setLastName(lastname.target.value)
  }
  const inputPosition = (position) =>{
    setPosition(position.target.value)
  }

  // Method take state(set already) to make an object(NEW employees)
  const handleSubmit = (e) =>{
    e.preventDefault()

    const newEmployee = {
      id:employee.length,
      name: name,
      lastname: lastName,
      position: position
    }
    // sent attribute to function addNewItem in Home.jsx
    addItem(newEmployee)
  }

  

  const handleDelete = (index) => {
    const tempArr = [...employee]
    tempArr.splice(index,1)
    setemployee(tempArr)
  }

  return (
    <div className="showResult">
      <h3>Create User Here</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(name)=>inputName(name)}/>
        <input type="text" placeholder="LastName" onChange={(lastname)=>inputLastName(lastname)}/>
        <input type="text" placeholder="Position" onChange={(position)=>inputPosition(position)}/>
        <button type="submit">Save</button>
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
