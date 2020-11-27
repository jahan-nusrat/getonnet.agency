import React from 'react'
import styled from 'styled-components'

const StyledMiddleSection=styled.section`
    .mailing-list{
        background-color:#ffffff;
        border-radius: 16px;
        padding: 2rem 1.6rem;
        h3{
            font-weight:700;
            font-size: 2rem;
        }
        p{
            font-size:1.3rem;
        }
    }
    .mail-form{
        button{
            background-color:#5F2EEA;
            margin-left: 1rem;
            color: #FFFFFF;
            width:80px;
            border-radius: 16px;
        }
        input{
            border-radius:16px;
        }
    }
`

const MiddleSection = () => {
    return (
        <StyledMiddleSection className="container mt-5">
            <div className="row">
                <div className="col-lg-7 mailing-list">
                    <h3>Join our mailing list.</h3>
                    <p>Receive 15% off your order at checkout and save today!</p>
                    <div className="mail-form d-flex">
                        <input type="email" className="form-control w-50" placeholder="Email Address" />
                        <button className="btn">&#8594;</button>
                    </div>
                </div>
            </div>
        </StyledMiddleSection>
    )
}

export default MiddleSection
