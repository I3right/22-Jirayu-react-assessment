import React from "react";
import './RenderUser.css'


function RenderUser({employee}) {
  console.log(employee)
  return (
    <div className="user">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
        {
          employee.map((employee,i)=>{
            console.log(employee)
            return(
              <tr key={i}>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
    )
}

export default RenderUser;
