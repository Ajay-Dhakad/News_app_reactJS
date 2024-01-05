import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {

  const [menu,setmenu] = useState(false)

  const navItems =[
    {
      name:'Home',
      slug:'/'
    },

    {
      name:'Entertainment',
      slug:'/entertainment'
    },
    {
      name:'Politics',
      slug:'/politics'
    },

    {
      name:'Sports',
      slug:'/sports'
    },

    {
      name:'Health',
      slug:'/health'
    },

    {
      name:'Technology',
      slug:'/technology'
    },

    {
      name:'Science',
      slug:'/science'
    },

  ]

  return (
    <>
    <header>
        <h1><div className='logo'></div> News<h1>Hub</h1></h1>

        <ul>

        {navItems && navItems.map((item) => 
          <NavLink className={({isActive}) => isActive && 'active'} key={item.name} to={item.slug}>
          <li key={item.name}>{item.name}</li>
          </NavLink>

        )}

        </ul>

        <i onClick={() => setmenu((prev) => !prev)} class="ri-menu-fill"></i>

       

    </header>

    {menu && <div className="menuphone">   <ul>

      <h1>Categories</h1>

{navItems && navItems.map((item) => 
  <NavLink onClick={() => setmenu((prev) => !prev)} className={({isActive}) => isActive && 'active'} key={item.name} to={item.slug}>
  <li key={item.name}>{item.name}</li>
  </NavLink>

)}

</ul></div>}
    </>
  )
}

export default Header
