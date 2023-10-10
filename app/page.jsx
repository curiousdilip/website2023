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
              <h2 className='mb-3'>Hi everyone! <span className="wave">👋🏾</span> </h2>
              <p>I'm Dilip Kumar Maurya, a frontend web developer with over a year of experience. I'm currently working as a Web Content Executive at the World Health Organization.</p>
              <p>I'm passionate about technology and computers, and I'm always eager to learn new things. I've previously done freelance work, and I'm always looking for new challenges.</p>
              <ul className='shortcut'>
                <li><Link href="/projects">    <i className='bi bi-tools'></i>What I have Built?</Link></li>
                <li><Link href="/about">    <i className='bi bi-search'></i>More about myself</Link></li>
                <li><Link href="/resume">    <i className='bi bi-briefcase'></i>My Latest Resume</Link></li>
                <li><Link href="/contact">    <i className='bi bi-telephone'></i>Contact Me</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="side-card">
                <ProfileCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
