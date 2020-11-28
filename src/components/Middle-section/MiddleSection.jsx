import React from 'react'
import {FaRegTimesCircle} from 'react-icons/fa'
import InputGroup from './InputGroup/InputGroup'
import '../../styles/middle.style.scss'

const MiddleSection = () => {
    return (
        <section className="container mt-5 middle-Section">
            <div className="row justify-content-between">
                <div className="col-lg-7 mailing-list">
                    <FaRegTimesCircle />
                    <h3>Join our mailing list.</h3>
                    <p>Receive 15% off your order at checkout and save today!</p>
                    <div className="mail-form d-flex">
                        <input type="email" className="form-control w-50" placeholder="Email Address" />
                        <button className="btn">&#8594;</button>
                    </div>
                </div>
                <div className="col-lg-4 various-inputs py-4">
                    <InputGroup />
                </div>
            </div>
        </section>
    )
}

export default MiddleSection
