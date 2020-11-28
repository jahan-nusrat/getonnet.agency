import React from 'react'
import {FaTimes} from 'react-icons/fa'
import InputGroup from './InputGroup/InputGroup'
import '../../styles/middle.style.scss'

const MiddleSection = () => {
    return (
        <section className="container mt-5 middle-Section">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-8 col-12 mailing-list mb-3">
                    <div className="mail-left">
                        <FaTimes className="close-icon" />
                        <h3>Join our mailing list.</h3>
                        <p className="py-2">Receive 15% off your order at checkout and save today!</p>
                        <div className="mail-form py-2 d-flex justify-content-center">
                            <input type="email" className="form-control w-50" placeholder="Email Address" />
                            <button className="btn">&#8594;</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-4 col-8 various-inputs pl-5">
                    <div className="groups">
                        <InputGroup />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MiddleSection
