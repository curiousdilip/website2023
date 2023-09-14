import React from 'react'
import "./home.css"
import ProfileCard from './components/ProfileCard'
const page = () => {

  return (
    <>
      <section id="home">
        <div className="container">
          <div className="row align-items-center" >
            <div className="col-md-8">
              <h1>Dilip Kumar 😀</h1>
              <p>Good day! I'm glad you're here. I'm Dilip Kumar - Looking for Opportunity in Frontend Web Development.</p>
              <p>I am a frontend web developer with more than 1 year of experience, I'm very passionate about technology and computers. I've previously done freelance work. I have a strong interest in computers and technology. I can learn new things quickly, I can be relied upon, and my interests are in frontend web development.</p>
              <ul>
                <li><a href="/projects">What I have Built?</a></li>
                <li><a href="/snippets">Useful snippets collected by me</a></li>
                <li><a href="/about">More about myself</a></li>
                <li><a href="/resume">My Latest Resume</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <ProfileCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
