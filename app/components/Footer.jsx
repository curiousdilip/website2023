import Link from 'next/link'
import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <footer>

            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">

                            <div className="follow-me">
                                <Link href="https://github.com/curiousdilip" aria-label="Github"> <i className='bi bi-github'> </i></Link>
                                <Link href="https://twitter.com/curiousdilip" aria-label="Twitter"> <i className='bi bi-twitter-x'> </i></Link>
                                <Link href="https://www.linkedin.com/in/curiousdilip/" aria-label="LinkedIn">
                                    <i className='bi bi-linkedin'></i></Link>
                                <Link href="mailto:curiousdilip@gmail.com" aria-label="Email">
                                    <i className='bi bi-envelope'></i>
                                </Link>
                            </div>
                            <div className="copyright">
                                <h4>Dilip Kumar | Frontend Web Developer</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
