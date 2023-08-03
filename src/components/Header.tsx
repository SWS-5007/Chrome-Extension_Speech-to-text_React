import React, { useState, useEffect } from 'react'
import { Nav ,NavLink} from 'react-bootstrap'


const Header =() =>{
    

    return(
        <Nav>
            <NavLink active href="#">Active</NavLink>
            <NavLink href="#">Login</NavLink>
            
        </Nav>
    )
} 

export default Header