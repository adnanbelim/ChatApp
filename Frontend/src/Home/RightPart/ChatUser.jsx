import React from 'react'

function ChatUser() {
    return (
        <div>
            <div className=' h-[8vh] flex align-middle justify-center items-center space-x-4 px-8 py-4 bg-slate-800 hover:bg-slate-700 duration-300 cursor-pointer'>
                <div class="avatar online">
                    <div class="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className=''>
                    <h2 className='text-xl'>Kyle</h2>
                    <span className='text-sm'>Online</span>
                </div>
            </div>
        </div>
    )
}

export default ChatUser