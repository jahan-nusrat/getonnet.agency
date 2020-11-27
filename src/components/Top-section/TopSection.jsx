import React from 'react'
import Login from './Login/Login'
import olive from '../../assets/img/Olive.png'
import styled from 'styled-components'

const TopSectionStyle= styled.section`
    .login-section{
        background-color:#ffffff;
        border-radius:32px;
    }
    .summer-sale{
        background-color:#ffffff;
        border-radius:32px;
        padding: 2rem 1.8rem;
        .summer-left-side{
            padding-right: 1.8rem;
            h2{
            font-weight:700;
            font-size: 3rem;
            }
            p{
                font-size: 1.5rem;
            }
        }
        .summer-right-side{
            img{
                width:340px;
                height: auto;
            }
        }
    }
`

const TopSection = () => {
    return (
        <TopSectionStyle className="container">
            <div className="row justify-content-between">
                <div className="col-md-5 login-section">
                    <Login />
                </div>
                <div className="col-md-6 summer-sale d-flex align-items-center">
                    <div className="summer-left-side">
                        <h2>Summer Sale</h2>
                        <p>25% Off Now through sunday for all in-store purchases.</p>
                        <button className="btn btn-info">Shop Now</button>
                    </div>
                    <div className="summer-right-side">
                        <img src={olive} alt="olive leaves" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </TopSectionStyle>
    )
}

export default TopSection
