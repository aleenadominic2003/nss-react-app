import React, { useEffect, useState } from 'react'

import axios from 'axios'
import NavigationBar from './NavigationBar'

const View = () => {

    const[data,changData]=useState(

        [

            
        ]

    )
    const fetchData = () => {

        axios.post("http://localhost:3000/view").then(

            (response) => {

                changData(response.data)

            }

        ).catch()

    }
    useEffect(

        () => {

            fetchData()

        },[]

    )
  return (
    <div>
        <NavigationBar />
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <div className="row g-3">
           

          <div className="table-responsive">
  <table className="table table-bordered table-striped table-hover">
    <thead className="table-dark">
      <tr>
        
            <th>Volunteer ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Blood Group</th>
            <th>Department</th>
            <th>Year of Study</th>
            <th>Camp Name</th>
            <th>Hours Completed</th>
            <th>Address</th>
            <th>Unit Number</th>
            <th>Action</th>
            

        
      </tr>
    </thead>
    <tbody>
      {data.map((value, index) => (
        <tr key={index}>
          
            <td>{value.VolunteerID}</td>
            <td>{value.FullName}</td>
            <td>{value.Email}</td>
            <td>{value.Phone}</td>
            <td>{value.DateofBirth}</td>
            <td>{value.Gender}</td>
            <td>{value.BloodGroup}</td>
            <td>{value.Department}</td>
            <td>{value.YearofStudy}</td>
            <td>{value.CampName}</td>
            <td>{value.HoursCompleted}</td>
            <td>{value.Address}</td>
            <td>{value.UnitNumber}</td>

          <td>
            <button className="btn btn-primary btn-sm">
              View Details
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            
           
        </div>

        </div>
    </div>
</div>


    </div>
  )
}

export default View