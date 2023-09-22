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
                                <Link href="https://github.com/curiousdilip"> <i className='bi bi-github'> </i></Link>
                                <Link href="https://twitter.com/curiousdilip"> <i className='bi bi-twitter-x'> </i></Link>
                                <Link href="https://www.linkedin.com/in/curiousdilip/">
                                    <i className='bi bi-linkedin'></i></Link>
                                <Link href="mailto:curiousdilip@gmail.com">
                                    <i className='bi bi-envelope'></i>
                                </Link>
                            </div>
                            <div className="copyright">
                                <h5>Dilip Kumar | Frontend Web Developer</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
