import React from 'react'

function User() {
  return (
   <div>
      <div className='flex space-x-4 px-8 py-4 hover:bg-slate-700 duration-300 cursor-pointer'>
        <div class="avatar online">
          <div class="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className=''>
          <h2 className='font-bold'>Kyle</h2>
          <span>kyle@123gmail.com</span>
        </div>
      </div>
   </div>
  )
}

export default User