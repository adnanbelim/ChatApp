import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

function Search() {
    return (
        <div className="h-[10vh]">

            <div className='px-6 py-4'>
                <form action="">
                    <div className="flex space-x-3">
                        <label class="input border-[1px] border-gray-600 bg-slate-900 rounded-lg p-3 flex items-center gap-2 text-white w-[80%]">
                            <input type="text" class="grow outline-none" placeholder="Search" />
                        </label>
                        <button>
                            <IoSearchOutline className='text-5xl p-2 hover:bg-gray-600 duration-300 rounded-full' />
                        </button>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default Search