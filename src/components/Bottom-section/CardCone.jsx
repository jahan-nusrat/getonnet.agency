import React, { useState } from 'react'
import cone from '../../assets/img/Blue Cone.png';
import {FaPlus,FaMinus} from 'react-icons/fa'
import '../../styles/card.style.scss';
import tag from '../../assets/img/Tag.png';

const CardCone = () => {
    const [count,setCount] = useState({num:1})
    const increment=()=>{
        setCount({num:count.num+1})
    }

    const decrement=()=>{
        setCount({num:count.num-1})
    }
    return (
        <div className="card">
            <img src={cone} className="card-img-top img-fluid" alt="" />
            <div className="card-body">
                <h3 style={{fontWeight:'700', fontSize:'32px'}} classNameName="card-title">Waffle Cone</h3>
                <p style={{color:'#4E4B66'}} className="card-text">12-Pack Box</p>
                <div className="footer-card d-flex justify-content-between align-items-center">
                    <div className="card-btn d-flex align-items-center">
                        <button className="btn count-btn" onClick={decrement}><FaMinus className="btn-icon" /></button>
                            <p className="mb-0 count">{count.num}</p>
                        <button className="btn count-btn" onClick={increment}><FaPlus className="btn-icon" /></button>
                    </div>
                    <div className="btn-label">
                        <button style={{width:'120px', borderRadius:'30px',fontWeight:'600', fontSize:'13px',backgroundColor:'#DED3FF',color:'#2A00A2'}} className="btn"><img className="pr-1" src={tag} alt="tag"/> Dessert</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CardCone
