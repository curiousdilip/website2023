import React from 'react'
import "./home.css"
import ProfileCard from './components/ProfileCard'
import Link from 'next/link'
const page = () => {

  return (
    <>
      <section id="home">
        <div className="container">
          <div className="row align-items-center" >
            <div className="col-md-8">
              <h1 className='mb-2'>Dilip Kumar 😀</h1>
              <p>Good day! I'm glad you're here. I'm Dilip Kumar - Looking for Opportunity in Frontend Web Development.</p>
              <p>I am a frontend web developer with more than 1 year of experience, I'm very passionate about technology and computers. I've previously done freelance work. I have a strong interest in computers and technology. I can learn new things quickly, I can be relied upon, and my interests are in frontend web development.</p>
              <ul className='shortcut'>
                <li><Link href="/projects">    <i className='bi bi-tools'></i>What I have Built?</Link></li>
                <li><Link href="/snippets">    <i className='bi bi-collection'></i>Useful snippets collected by me</Link></li>
                <li><Link href="/about">    <i className='bi bi-search'></i>More about myself</Link></li>
                <li><Link href="/resume">    <i className='bi bi-briefcase'></i>My Latest Resume</Link></li>
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
