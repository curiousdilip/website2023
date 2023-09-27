import React from 'react'
import "./profile-card.css"
import Image from 'next/image'
const ProfileCard = () => {
    return (
        <>
            <div className="line"></div>

            <div className="profile-box">
                <div className="img-box">
                    <Image
                        src="/profilecardimg.jpeg"
                        alt='Profile Card Image'
                        height={200}
                        width={500}
                        className='img-fluid'
                    />
                </div>
                <div className="details">
                    <div className="name"><h2>Dilip Kumar </h2>
                        <h4>Frontend Web Developer</h4></div>
                    <div className="work">
                        <i className='bi bi-briefcase'> Looking for Opportunity</i>
                    </div>
                    <div className="location">
                        <a href="https://www.google.com/maps/place/Dilip+Kumar+%7C+Frontend+Web+Developer/@28.569776,77.0265519,20.3z/data=!4m6!3m5!1s0x390d1b0024a3520b:0x7cca2b1632be5ac7!8m2!3d28.5695894!4d77.0267466!16s%2Fg%2F11r__7nsmj?entry=ttu" target='_blank'><i className='bi bi-geo'> New Delhi, India</i></a>
                    </div>
                    <div className="mail">
                        <a href="mailto:curiousdilip@gmail.com"> <i className='bi bi-envelope'> curiousdilip@gmail.com</i></a>
                    </div>
                    <div className="social">
                        <a href="https://github.com/curiousdilip" target='_blank'> <i className='bi bi-github'> curiousdilip</i></a>
                        <a href="https://www.linkedin.com/in/curiousdilip/" target='_blank'><i className='bi bi-linkedin'> curiousdilip</i></a>

                    </div>
                </div>
            </div>
            <div className="line-1"></div>
        </>
    )
}

export default ProfileCard
