"use client"
import React from 'react'
import { useState } from 'react'
// export const metadata = {
//     title: "Contact",
// }
import "./contact.css"
const page = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbyLgS0NuKwRbDWDoFgz2FROEOQk6Tc3D-9uxazp4EQct-ENewCyfyRNkmZdB9sdadRZ/exec',
                {
                    method: 'POST',
                    body: new FormData(event.target),
                }
            );

            if (response.ok) {
                // If the response is successful, set the formSubmitted state to true
                setFormSubmitted(true);
                // Display an alert box
                window.alert('Thank You! \n Form submitted successfully!');
            } else {
                // Handle errors here if needed
                console.error('Form submission failed.');
            }
        } catch (error) {
            // Handle network errors here if needed
            console.error('Network error:', error);
        }
    };

    if (formSubmitted) {
        // If the form has been successfully submitted, reload the page
        window.location.reload();
    }
    return (
        <>
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading">
                                <h1>
                                    Contact
                                </h1>

                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <form action="https://script.google.com/macros/s/AKfycbyLgS0NuKwRbDWDoFgz2FROEOQk6Tc3D-9uxazp4EQct-ENewCyfyRNkmZdB9sdadRZ/exec" method="POST" onSubmit={handleSubmit} >
                                <input
                                    type="name"
                                    name="name"
                                    className="form-control mb-3"
                                    placeholder="Name"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control mb-3"
                                    placeholder="Email"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control mb-3"
                                    placeholder="Phone number"
                                    required
                                />
                                <textarea
                                    name="message"
                                    className="form-control mb-3"
                                    rows="3"
                                    placeholder="Your Message"
                                ></textarea>

                                <button type="submit" className="btn btn-primary">
                                    Send Now
                                </button>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <div className="details">
                                <div className="box">
                                    <div className="icon">
                                        <i className="bi bi-telephone"></i>
                                    </div>
                                    <div className="number">
                                        <h4>Call</h4>
                                        <p>+91 98997 42615</p>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="icon">
                                        <i className="bi bi-envelope"></i>
                                    </div>
                                    <div className="mail">
                                        <h4>Send Email</h4>
                                        <p>curiousdilip@gmail.com</p>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="icon">
                                        <i className="bi bi-geo"></i>
                                    </div>
                                    <div className="location">
                                        <h4>Visit </h4>
                                        <p>Dwarka, New Delhi, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
