import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";

function TypeSend() {
  return (
      <div className='flex h-[8vh] bg-slate-800 items-center justify-center'>

          <div className=" w-[80%]">
              <input type="text" placeholder="Type here" class="border border-gray-700 outline-none px-4 py-3 w-full bg-slate-900 rounded-xl" />
        </div>
          <button>
              <FaTelegramPlane className='text-5xl p-2 hover:bg-gray-600 duration-300 rounded-full' />
          </button>
    </div>
  )
}

export default TypeSend