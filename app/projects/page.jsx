import React from 'react';
import { projects } from '../data/projects';
import './projects.css';
import Image from 'next/image';

export const metadata = {
    title: "Projects",
};



const Page = () => {
    return (
        <>
            <section id="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading">
                                <h2>Projects</h2>
                                <p>Stuff that I have built</p>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="work">
                        <div className="projects">
                            {projects.map((project, index) => (
                                <div className="project" key={index}>
                                    <Image
                                        src={project.imgSrc}
                                        alt={project.title}
                                        width={200}
                                        height={200}
                                        priority="true"
                                        className='img-fluid'
                                    />
                                    <div className="details">
                                        <h3 className="p-title">{project.title}</h3>
                                        <p className="description">{project.description}</p>

                                        {project.tech ? (
                                            <ul className="tech-stack">
                                                {project.tech.map((technology, techIndex) => (
                                                    <li key={techIndex}>{technology}</li>
                                                ))}
                                            </ul>
                                        ) : null}

                                        <a className="p-link" href={project.href} target="_blank" rel="noopener noreferrer">
                                            See Live &rarr;
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
