import React from 'react'
import ProfileCard from '../components/ProfileCard'
export const metadata = {
    title: "About",

}
const page = () => {
    return (
        <>
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading">
                                <h1>
                                    About
                                </h1>

                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <ProfileCard />
                        </div>
                        <div className="col-md-8">
                            <h2>Hi  I'm Dilip Kumar
                            </h2>
                            <p>I am a frontend web developer with more than 1 year of experience, I'm very passionate about technology and computers. I am reliable, can work in a team, and can learn quickly my interests are in frontend web development. In my free time, I enjoy music, gaming, and reading. As well, I love to travel and see new places and meet new people.

                            </p>
                            <h4>Professional milestones of my career:
                            </h4>
                            <h4 className='italic'>TIMELINE</h4>
                            <p>You can always reach out to me to have a coffee together and discuss Code, Community or Collaboration. Ping me on Telegram, or reach out to me at curiousdilip@gmail.com.

                            </p>
                            <p>See more about my working experiences at my resume page.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
