import React from 'react'
export const metadata = {
    title: "Snippets",

}
const page = () => {
    return (
        <>
            <section id="snippets">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading">
                                <h1>
                                    Snippets
                                </h1>
                                <p>Reuseable code snippets collected by me

                                </p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
