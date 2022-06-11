import './Nav.css'
import React from 'react'
import * as reactRouterDom from 'react-router-dom'

export default function props() {
     return <aside className='menu-area'>
         <nav className="menu">
             <reactRouterDom.Link to="/">
                 <link className='fa fa-home'></link> Início
             </reactRouterDom.Link>
             <reactRouterDom.Link to="/users">
                 <link className='fa fa-users'></link> Usuários
             </reactRouterDom.Link>
         </nav>
     </aside>
}
