import React from 'react'
import Message from './Message'

function Messages() {
    return (
        <div className='scroll-none-custom' style={{ minHeight: "calc(92vh - 8vh)" }}>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    )
}

export default Messages