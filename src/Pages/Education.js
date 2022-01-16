import React from 'react'
import '../styles/Education.css'
function Education() {
    return (
        <div className='education'>
            <div className='school edu'>
            <i className='fas fa-graduation-cap'></i>
                <h3> School </h3>
                <p>T.R.M.M.Girls high school (SSC</p>
                <p>Jun 2014–April 2015</p>
                <p>CGPA- (9.7/10.0)</p>
            </div>
            <div className='puc edu'>
                <i className='fas fa-graduation-cap'> </i>
                <h3> Pre university course</h3>
                <p>Rajiv Gandhi University of Knowledge Technologies, Nuzvid (PUC)</p>
                <p>Aug 2015–May 2017</p>
                <p>CGPA — (8.4/10.0)</p>
            </div>
            <div className='btech edu'>
                <i className='fas fa-graduation-cap'> </i>
                <h3> Bachelor of Technology </h3>
                <p>Rajiv Gandhi University of Knowledge Technologies, Nuzvid </p>
                <p>Sep 2017–Aug 2021</p>
                <p>CGPA — (8.2/10.0)</p>
            </div>
            <h1 className='project'>Projects</h1>
            <div className="card-group">
                <div className="card text-white mb-3">
                    <div className="card-body">
                        <h5 className="card-title one">Student Online trainee Website</h5>
                        <p className="card-text">
                            HTML, CSS, Bootstrap, Basic PHP, Basic SQL and, Adobe Photoshop
                        </p>
                        <p className="card-text">
                            In this project, there are different pages like the admin login page, User login, User details page, Contact page,
                            and About page with creative designs
                        </p>
                    </div>
                </div>
                <div className="card text-white bg-primary mb-3">
                    <div className="card-body">
                        <h5 className="card-title two">BKT Matrimony website front-end project</h5>
                        <p className="card-text bkt">
                            HTML, CSS, Bootstrap, Basic PHP, Basic SQL and, Adobe Photoshop
                        </p>
                        <p className="card-text bkt">
                            In this project, there are different pages like the admin login page, User login, User details page, Contact page,
                            and About page with creative designs.
                        </p>
                    </div>
                </div>
                <div className="card text-white mb-3">
                    <div className="card-body">
                        <h5 className="card-title one">Raksha Insurance responsive website</h5>
                        <p className="card-text">
                            HTML, CSS, Bootstrap, Basic PHP, Basic SQL and, Adobe Photoshop
                        </p>
                        <p className="card-text">
                            This is a Raksha insurance website project for the Akshaya innovations company. This a responsive website including
                            Hospital Service, Loans, Raksha Mitra, Jobs, Gallery, Government schemes, insurance, and contact page with valid
                            information and creative designs
                        </p>
                    </div>
                </div>
                </div>













        </div>
    )
}

export default Education;
