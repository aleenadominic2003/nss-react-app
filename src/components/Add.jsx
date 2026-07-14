import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const Add = () => {

    const [input,changeInput]=useState(

      {

    
            VolunteerID: "",
            FullName: "",
            Email: "",
            Phone: "",
            DateofBirth: "",
            Gender: "",
            BloodGroup: "",
            Department: "",
            YearofStudy: "",
            CampName: "",
            HoursCompleted: "",
            Address: "",
            UnitNumber: ""
          
      }

    )

    const inputHandler = (event) => {

        changeInput({...input,[event.target.name]:event.target.value})

    }
    
    const readValue =() => {

      console.log(input)

      axios.post("http://localhost:3000/add",input).then(

        (response)=>{

          console.log(response.data)
          alert("Details added successfully")

        }

      ).catch(
        (error)=>{
            console.log(error)
            alert("Error inserting data")
        }
      )

    }

  return (
    <div>
        <NavigationBar />

    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                  <label htmlFor="" className="form-label">Volunteer ID</label>
                  <input type="text" className="form-control" 
                  name="VolunteerID"
                  value={input.VolunteerID}
                  onChange={inputHandler}
                  />


                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">FullName</label>
                  <input type="text" className="form-control" 
                   name="FullName"
                   value={input.FullName}
                   onChange={inputHandler}
                  />

                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">Email</label>
                  <input type="text" className="form-control" 
                   name="Email"
                   value={input.Email}
                   onChange={inputHandler}
                  />

                </div>

                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">Phone</label>
                  <input type="text" className="form-control" 
                   name="Phone"
                   value={input.Phone}
                   onChange={inputHandler}
                  />

                </div>

                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    
                  <label htmlFor="" className="form-label">Date of Birth</label>
                  <input type="text" className="form-control"
                   name="DateofBirth"
                   value={input.DateofBirth}
                   onChange={inputHandler}
                  />

                </div>

                 <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    
                  <label htmlFor="" className="form-label">Gender</label>
                  <input type="text" className="form-control"
                   name="Gender"
                   value={input.Gender}
                   onChange={inputHandler}
                  />

                </div>

                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">Blood Group</label>
                  <input type="text" className="form-control" 
                   name="BloodGroup"
                   value={input.BloodGroup}
                   onChange={inputHandler}
                  />

                </div>

                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">Department</label>
                  <input type="text" className="form-control" 
                   name="Department"
                   value={input.Department}
                   onChange={inputHandler}
                  />

                </div>

               
                
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">YearofStudy</label>
                  <input type="text" className="form-control" 
                   name="YearofStudy"
                   value={input.YearofStudy}
                   onChange={inputHandler}
                  />

                </div>

                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">Camp Name</label>
                  <input type="text" className="form-control" 
                   name="CampName"
                   value={input.CampName}
                   onChange={inputHandler}
                  />

                </div>


                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">HoursCompleted</label>
                  <input type="text" className="form-control" 
                   name="HoursCompleted"
                   value={input.HoursCompleted}
                   onChange={inputHandler}
                  />

                </div>

                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">Address</label>
                  <input type="text" className="form-control" 
                   name="Address"
                   value={input.Address}
                   onChange={inputHandler}
                  />

                </div>

                 <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                  <label htmlFor="" className="form-label">Unit Number</label>
                  <input type="text" className="form-control" 
                   name="UnitNumber"
                   value={input.UnitNumber}
                   onChange={inputHandler}
                  />

                </div>




                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <button className="btn btn-success" onClick={readValue}>Submit</button>

                </div>
            </div>


            </div>
        </div>
    </div>


    </div>
  )
}

export default Add