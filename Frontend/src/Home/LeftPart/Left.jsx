import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

function Left() {
  return (
      <div className='w-[30%] text-gray-300 bg-black'>
          <Search />
          <Users />
          <Logout />
      </div>
  )
}

export default Left