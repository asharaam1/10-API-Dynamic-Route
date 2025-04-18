import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div style={{textAlign:'center'}}>
                <a>My Products</a>
            </div>
            <div >
                <ul style={{display:'flex', alignItems:'center', justifyContent:'center', textDecoration:'none', listStyleType: "none", gap:'5px'}}>
                    <li><Link to={''}>Home</Link></li>
                    <li><Link to={'about'}>About</Link></li>
                    <li><Link to={'contact'}>Contact</Link></li>
                    <li><Link to={'products'}>Products</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar