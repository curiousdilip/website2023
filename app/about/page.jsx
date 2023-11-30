import React from "react";
import ProfileCard from "../components/ProfileCard";
import "./about.css";
import TimeLine from "../components/TimeLine";
import Link from "next/link";


export const metadata = {
  title: "About",
  openGraph: {
    title: "About",
    description: "More About Me showcasing my work Timeline",
    images: '/profilecardimg.jpeg',
  }
};
const page = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <h2>About</h2>

                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <ProfileCard />
            </div>
            <div className="col-md-8">
              <div className="about-section">
                <h3>Hi I'm Dilip Kumar</h3>
                <p>
                  I am a web developer with more than 1 year of
                  experience, I'm very passionate about technology and
                  computers. I am reliable, can work in a team, and can learn
                  quickly my interests are in frontend web development. In my
                  free time, I enjoy music, gaming, and reading.
                </p>
                <h4>Professional milestones of my career:</h4>
                <TimeLine />
                <p className="reach-me">
                  You can always reach out to me to have a coffee together and
                  discuss Code, Community or Collaboration. Ping me on <a href="https://t.me/curiousdilip">Telegram</a>,
                  or reach out to me at <a href="mailto:curiousdilip@gmail.com"> curiousdilip@gmail.com</a>.
                </p>
                <p>See more about my working experiences at my <Link href="/resume">resume</Link> page.</p>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
