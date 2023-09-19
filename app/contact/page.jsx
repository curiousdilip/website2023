import React from 'react'
export const metadata = {
    title: "Contact",

}
import "./contact.css"
const page = () => {
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
                                <p>Contact Me for Any query
                                </p>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="contact-section">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d544.4761088651313!2d77.02631196668!3d28.569825482033593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b0024a3520b%3A0x7cca2b1632be5ac7!2sDilip%20Kumar%20%7C%20Frontend%20Web%20Developer!5e0!3m2!1sen!2sin!4v1695141408264!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="col-md-6">
                                <h3>Dilip Kumar Maurya</h3>

                                <div className="social-contact">
                                    <a href="#"><i className='bi bi-whatsapp'></i></a>
                                    <a href="#"><i className='bi bi-phone'></i></a>
                                    <a href="#"><i className='bi bi-geo'></i></a>
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
