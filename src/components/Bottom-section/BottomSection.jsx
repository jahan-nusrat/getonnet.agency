import React, { useState } from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DropDown from './DropDown';
import SearchBar from './SearchBar';
import configure from '../../assets/img/Configure.png';
import first from '../../assets/img/first.png'
import second from '../../assets/img/second.png'
import third from '../../assets/img/third.png'
import fourth from '../../assets/img/fourth.png'
import CardCone from './CardCone';
import '../../styles/bottom.css';
import '../../styles/bottom.style.scss';

const BottomSection = () => {
    const [select,setSelect]=useState({
        setA: true,
        setB: false
    })
    const [active,setActive]= useState({
        btnA:true,
        btnB:false
    })

    const handleSelectA=()=>{
        setSelect({
            setA:true,
            setB:false
        })
    }

    const handleSelectB=()=>{
        setSelect({
            setA:false,
            setB:true
        })
    }

    const handleBtnClickA=()=>{
        setActive({
            btnA: true,
            btnB: false
        })
    }

    const handleBtnClickB=()=>{
        setActive({
            btnA: false,
            btnB: true
        })
    }

    return (
        <section className="container mt-5 bottom-section mb-5">
            <div className="row justify-content-center">
                <div className="col-md-3 col-sm-6 col-10">
                    <div className="left">
                        <div className="row">
                            <div className="col-md-12 col-12 toggle-btn d-flex justify-content-around">
                                <button onClick={handleSelectA} className={select.setA?'btn selected':'btn unselected'}>{select.setA? 'Selected':'Unselected'}</button>
                                <button onClick={handleSelectB} className={select.setB?'btn selected':'btn unselected'}>{select.setB? 'Selected':'Unselected'}</button>
                            </div>
                            <div className="col-md-10 col-12">
                                <TextareaAutosize className="textarea" aria-label="minimum height" rowsMin={4} placeholder="Share a reply" />
                            </div>
                            <div className="col-md-10 col-12">
                                <DropDown />
                            </div>
                            <div className="col-md-10 col-12">
                                <DropDown />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 col-sm-10 col-12">
                    <div className="right">
                        <div className="row">
                            <div className="col-md-12 col-12 right-top">
                                <div className="d-flex px-3">
                                    <SearchBar />
                                    <button className="btn config-btn">
                                        <img src={configure} alt="configure" className="img-fluid"/>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6 right-bottom-left mt-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="watch d-flex align-items-center justify-content-around">
                                            <div className="watch-count">
                                                <p className="mb-1"><strong style={{fontSize:'24px',fontWeight:'600'}}>$ 370,345</strong><span className="pl-1" style={{color:'#00BA88',fontWeight:'600',fontSize:'18px'}}>+126</span></p>
                                                <p className="mb-0" style={{color:'#6E7191',fontSize:'18px'}}>This month</p>
                                            </div>
                                            <button className="btn" style={{border:'2px solid #5F2EEA',borderRadius:'30px', width:'132px'}}>Watch</button>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-4">
                                        <div className="buttons d-flex justify-content-around">
                                            <button onClick={handleBtnClickA} className={active.btnA? 'btn active btn-custom':'btn inactive btn-custom'}>Sign Up</button>
                                            <button onClick={handleBtnClickB} className={active.btnB? 'btn active btn-custom':'btn inactive btn-custom'}>Log In</button>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-4">
                                        <div className="people d-flex justify-content-around align-items-center">
                                            <img src={first} alt="female" className="img-fluid first" />
                                            <img src={second} alt="male" className="img-fluid second" />
                                            <img src={third} alt="female" className="img-fluid third" />
                                            <img src={fourth} alt="male" className="img-fluid fourth" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 right-bottom-right mt-4">
                                <CardCone />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BottomSection
