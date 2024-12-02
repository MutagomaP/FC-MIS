import React from 'react'
import user from '../../../assets/user.png'


function GlobalHeader() {
  return (
    <div className='pl-2 bg-[#F5F5F5]'>
      <div className='bg-white h-[65px] min-w-[1329px]'>
        <div className='flex flex-row pt-5 justify-between px-5'>
            <p className='text-[#838383]'>Super Admin/ <span className='text-[#2057A5]'>Dashboard</span></p>
            <div className="">
      <h1 className='font-extrabold text-[#2057A5]'>AZAM FC</h1>
      </div>
      <div className='flex flex-row gap-3 relative '>
        <p  className='text-[#838383]'>Hamza Jackson</p>
        <img src={user} alt="" className='w-[40px] h-[40px] relative bottom-2' />
      </div>
        </div>
      </div>
    </div>
     
  )
}

export default GlobalHeader;
