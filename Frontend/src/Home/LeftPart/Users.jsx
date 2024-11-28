import React from 'react';
import User from './User';

function Users() {
  return (
    <div>
      <h1 className="font-semibold px-8 py-2 rounded-md text-white bg-slate-900">Message</h1>
      <div className=' py-2 scroll-none-custom' style={{ maxHeight: "calc(84vh - 10vh)" }}>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  )
}

export default Users