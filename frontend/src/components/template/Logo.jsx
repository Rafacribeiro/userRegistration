import './Logo.css'
import React from 'react'
import { Link } from 'react-router-dom'


export default props => 
   <aside className='logo'>  
       <Link to="http" className='logo'>
           <img src="http://files.cod3r.com.br/curso-web/logo.png" alt="logo" />
       </Link>
   </aside>