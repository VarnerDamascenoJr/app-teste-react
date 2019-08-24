import React, {useState} from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink

} from 'reactstrap';


function Header(){

    

    return(
        <div>
         <Navbar color='dark' light expand='md'>
          <NavbarBrand href='/' className='mr-auto'>Teste React</NavbarBrand>
           <NavbarToggler  className='mr-2'/>
            <Collapse>
             <Nav>
               <NavItem>
                   <NavLink href='/component01'>Component 01</NavLink>
               </NavItem>
               <NavItem>
                   <NavLink href='/component02'>Component 02</NavLink>
               </NavItem>  
             </Nav>
            </Collapse>
         </Navbar>
        </div>
    );
}
export default Header;
