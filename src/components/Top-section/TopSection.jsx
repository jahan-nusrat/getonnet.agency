import React from 'react'
import Login from './Login/Login'
import olive from '../../assets/img/Olive.png'
import styled from 'styled-components'

const TopSectionStyle= styled.section`
    .login-section{
        .top-login{
            background-color:#ffffff;
            border-radius:32px;
            h3{
                color: #14142B;
                font-weight:bold;
                font-size:32px;
            }
        }
    }
    .summer-sale{
        .top-sale{
            background-color:#ffffff;
            border-radius:32px;
            padding:2.5rem 2.2rem;
            .summer-left-side{
            padding-right: 1.8rem;
            h2{
            font-weight:700;
            font-size: 3rem;
            }
            p{
                font-size: 1.3rem;
            }
            .btn-sale{
                border-radius:40px;
                border: 2px solid #D6D8E7;
                color: #5F2EEA;
                font-weight: 600;
            }
        }
        }
    }
`

const TopSection = () => {
    return (
        <TopSectionStyle className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5 col-sm-5 col-10 login-section mb-3">
                    <div className="top-login pb-5 pt-4">
                        <h3 className="pl-5 pt-3 pb-4">Login</h3>
                        <Login />
                    </div>
                </div>
                <div className="col-md-7 col-sm-6 col-12 summer-sale pl-5 pr-4">
                    <div className="top-sale row align-items-center">
                        <div className="summer-left-side col-6">
                            <h2>Summer Sale</h2>
                            <p className="py-3">25% Off Now through sunday for all in-store purchases.</p>
                            <button className="btn btn-sale px-4 py-3 mb-2">Shop Now</button>
                        </div>
                        <div className="summer-right-side col-6">
                            <img src={olive} alt="olive leaves" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </TopSectionStyle>
    )
}

export default TopSection
