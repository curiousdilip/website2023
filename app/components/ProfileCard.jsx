import React from 'react'
import "./profile-card.css"
import Image from 'next/image'
const ProfileCard = () => {
    return (
        <>
            <div className="line"></div>

            <div className="profile-box">
                <div className="img-box">
                    {/* <img src="/og-image.png" alt="" className='img-fluid' /> */}
                    <Image
                        src="/profilecardimg.jpeg"
                        alt='Profile Card Image'
                        height={217}
                        width={341}
                        className='img-fluid'
                        style={{
                            objectFit: "contain"
                        }}
                    />
                </div>
                <div className="details">
                    <div className="name"><h2>Dilip Kumar </h2>
                        <h4>Frontend Web Developer</h4></div>
                    <div className="work">
                        <i className='bi bi-briefcase'> Looking for Opportunity</i>
                    </div>
                    <div className="location">
                        <i className='bi bi-geo'> New Delhi, India</i>
                    </div>
                    <div className="mail">
                        <i className='bi bi-envelope'> curiousdilip@gmail.com</i>
                    </div>
                    <div className="social">
                        <i className='bi bi-github'> curiousdilip</i>
                        <i className='bi bi-linkedin'> curiousdilip</i>

                    </div>
                </div>
            </div>
            <div className="line-1"></div>
        </>
    )
}

export default ProfileCard
