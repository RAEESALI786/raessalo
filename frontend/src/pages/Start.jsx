import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className="">
        <div className=" bg-cover bg-center bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_690,w_552/v1684852612/assets/ba/4947c1-b862-400e-9f00-668f4926a4a2/original/Ride-with-Uber.png)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
            <img className='w-16 ml-8 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className="bg-white py-4 pb-7 px-4">
                <h2 className="text-2xl font-bold">Get Started with Uber</h2>
                <Link to='/login' className="w-full flex items-center justify-center bg-black text-white py-3 rounded mt-5">Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start
