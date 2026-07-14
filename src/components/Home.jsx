import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
  return (
    <>
    <NavigationBar />

    
      <h1 className="text-center">NSS ENTRY APP</h1>

      <h2 className="text-center mt-4">
        Welcome to Our NSS  App
      </h2>

      <p>
       Nss App Description


        <p>
          NSS Volunteer Management System is a web-based application developed to
          simplify the management of National Service Scheme (NSS) volunteers and
          their activities. The system allows administrators to register
          volunteers, maintain volunteer profiles, record participation in NSS
          events and community service activities, and manage all volunteer
          information in a centralized MongoDB database. It provides an intuitive
          interface to add, view, update, and delete volunteer records, making
          volunteer management efficient, organized, and easily accessible.
        </p>

      </p>
    
    </>
  )
}

export default Home