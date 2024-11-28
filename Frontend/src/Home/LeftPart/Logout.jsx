import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";

function Logout() {
    return (
        <div className="h-[10vh] p-3  border-t border-slate-300">
            <button>
                <RiLogoutCircleLine className='text-5xl p-2 hover:bg-gray-600 duration-300 rounded-full ml-2' />
            </button>
        </div>
    )
}

export default Logout