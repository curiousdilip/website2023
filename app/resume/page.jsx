import React from 'react'
export const metadata = {
    title: "Resume",

}
import "./resume.css"
const page = () => {
    return (
        <>
            <section id="resume">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading">
                                <h1>
                                    Resume
                                </h1>

                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="resume-box">
                                <div className="title ">
                                    <h1>Dilip Kumar Maurya</h1>
                                    <div className="links">
                                        <p><a href="">+91 9899742615 </a> | <a href="">curiousdilip@gmail.com</a> | <a href="#">Website</a> | <a href="#">LinkedIn</a> | <a href="#">Github</a> </p>
                                    </div>
                                </div>
                                <div className="work">
                                    <h4 className='heading'>Work Experience</h4>
                                    <div className="experience-box">
                                        <div className="company-time">
                                            <h5>World Health Organization</h5>
                                            <p>September 2023 - Present</p>
                                        </div>
                                        <div className="role">
                                            <h5>Web Content Executive</h5>
                                            <p>R K Puram, New Delhi</p>
                                        </div>
                                        <ul >
                                            <li>Was responsible for updating any changes on WHO India Website</li>

                                        </ul>
                                    </div>
                                    <div className="experience-box">
                                        <div className="company-time">
                                            <h5>Taknik Bharti</h5>
                                            <p>February 2022 - July 2023</p>
                                        </div>
                                        <div className="role">
                                            <h5>Frontend Web Developer</h5>
                                            <p>Bikaner, Rajasthan</p>
                                        </div>
                                        <ul >
                                            <li>Developed Pradhanmantri Sangrahalaya frontend from the designs on adobe xd</li>
                                            <li>Improved website security through regular updates and maintenance</li>
                                            <li>Collaborated with cross-functional teams to ensure that projects were delivered on time and within budget</li>
                                            <li>Created responsive websites using HTML, CSS, and JavaScript</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="skills">
                                    <h4 className="heading">
                                        Technical Skills
                                    </h4>
                                    <div className="skill-box">
                                        <p>Languages:<span>JavaScript, HTML/CSS</span></p>
                                        <p>Platforms:<span>Linux, Amazon Web Services, Windows, MacOS</span></p>
                                        <p>Tools:<span> Git, MySQL, Amplify</span></p>
                                        <p>Libraries/Frameworks:<span>Tailwind Css, Nextjs, bootstrap, Reactjs</span></p>
                                    </div>
                                </div>
                                <div className="education">
                                    <h4 className="heading">
                                        Education
                                    </h4>
                                    <div className="education-box">
                                        <div className="institute-time">
                                            <h5>Guru Gobind Singh Indraprastha University</h5>
                                            <p>August 2019 - August 2022</p>
                                        </div>
                                        <div className="standard">
                                            <h5>Bachelor of Computer Applications</h5>
                                            <p>Dwarka, New Delhi</p>
                                        </div>
                                        <ul >
                                            <li>Cumulative CGPA : 8.7/10</li>
                                            <li>Designed College Magazine</li>
                                        </ul>
                                    </div>
                                    <div className="education-box">
                                        <div className="institute-time">
                                            <h5>Guru Gobind Singh Indraprastha University</h5>
                                            <p>August 2019 - August 2022</p>
                                        </div>
                                        <div className="standard">
                                            <h5>Bachelor of Computer Applications</h5>
                                            <p>Dwarka, New Delhi</p>
                                        </div>
                                        <ul >
                                            <li>Cumulative CGPA : 8.7/10</li>
                                            <li>Designed College Magazine</li>
                                        </ul>
                                    </div>
                                    <div className="education-box">
                                        <div className="institute-time">
                                            <h5>Guru Gobind Singh Indraprastha University</h5>
                                            <p>August 2019 - August 2022</p>
                                        </div>
                                        <div className="standard">
                                            <h5>Bachelor of Computer Applications</h5>
                                            <p>Dwarka, New Delhi</p>
                                        </div>
                                        <ul >
                                            <li>Cumulative CGPA : 8.7/10</li>
                                            <li>Designed College Magazine</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default page
