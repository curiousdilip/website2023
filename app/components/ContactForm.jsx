"use client";
import React, { useState } from "react";

const ContactForm = ({ onFormSubmit }) => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbyLgS0NuKwRbDWDoFgz2FROEOQk6Tc3D-9uxazp4EQct-ENewCyfyRNkmZdB9sdadRZ/exec",
                {
                    method: "POST",
                    body: new FormData(event.target),
                },
            );

            if (response.ok) {
                setFormSubmitted(true);
                window.alert("Thank You! \n Form submitted successfully!");
                setTimeout(() => {
                    setFormSubmitted(false);
                }, 2000);
                // Call the parent component's onFormSubmit function if provided
                if (onFormSubmit) {
                    onFormSubmit();
                }
            } else {
                console.error("Form submission failed.");
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };

    return (
        <>
            {!formSubmitted ? (
                <form onSubmit={handleSubmit}>
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
            ) : (
                <p>Thank you for submitting the form!</p>
            )}
        </>
    );
};

export default ContactForm;
