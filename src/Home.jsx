import React,{useState} from "react"
import Layout from "./Layout"
import RenderUser from "./RenderUser";
import RenderAdmin from "./RenderAdmin";
import './Home.css'

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {

  const [employee,setEmployee] = useState(mockEmployees)
  
  const addNewItem = (newEmployee) => {
    setEmployee((oldEmployee) => {
      return [...oldEmployee,newEmployee]// {waiting value from RenderAdmin component}
    })
  }

  const[sector,setSector] = useState('');
  {if(sector==='other'){<h1>Generation Thailand<br/>Home - Assessment</h1>}}
  return (
    <Layout>
      <div className="container">
        {sector==='' &&  <h1>Generation Thailand<br/>Home - Assessment</h1>}
        {sector==='user'  &&  <h1>Generation Thailand<br/>Home - User Sector</h1>}
        {sector==='admin' &&  <h1>Generation Thailand<br/>Home - Admin Sector</h1>}

        <div className="btn-selector">
          <button onClick={()=>{setSector('user')}}>User Home Sector</button>
          <button onClick={()=>{setSector('admin')}}>Admin Home Sector</button>
        </div>

        {sector==='user' &&  <RenderUser employee={employee}/>}
        {sector==='admin' &&  <RenderAdmin addItem={addNewItem} setEmployee={setEmployee}  employee={employee}/>}
      </div>
    </Layout>
  )
}

export default Home