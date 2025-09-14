import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

    const [otp,setOtp]=useState('')


    const submitHander = ()=>{
        e.preventDefault()
    }
  return (
    <div className='h-screen'>
      <h5
        onClick={()=>{
          props.setConfirmRidePopupPanel(false)
        }}
        className="p-2 text-center ml-10 absolute top-0 w-[80%]"
      >
        <i className=" text-2xl text-gray-700 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold ">Confirm this ride to Start</h3>



      <div className="flex items-center justify-between mt-4 bg-amber-300 p-3 border-yellow-800 rounded-2xl">
        <div className="flex items-center gap-3">
          <img className='h-12 w-12 rounded-full object-cover' src="https://static.vecteezy.com/system/resources/thumbnails/024/344/088/small/businessman-isolated-illustration-ai-generative-free-png.png" alt="" />
          <h2 className="text-xl font-medium">Raees Ali</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 Km</h5>
      </div>



      <div className="flex gap-2 justify-between flex-col items-center">
        

        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-line"></i>

            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Jubair Khan , Mumbai
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>

            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Jubair Khan , Mumbai
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-fill"></i>

            <div className="">
              <h3 className="text-lg font-medium">₹ 65</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Cash / Upi / Net Banking
              </p>
            </div>
          </div>
        </div>



        {/* otp */}
        <div className="mt-6 w-[95%] ">
        <form className='' action="" onSubmit={(e)=>{
            submitHander(e)
        }}>

            <input value={otp} onChange={(e)=>{e.target.value}} className='bg-[#eee] px-8 py-4 text-base rounded-lg w-full mt-3 ' type="text " placeholder='Enter OTP' />

        <Link to='/captain-riding' className="flex w-full  justify-center mt-5 bg-green-600 text-white font-semibold rounded-xl p-3">
          confirm Ride
        </Link>

        <button onClick={()=>{
          props.setConfirmRidePopupPanel(false)
          props.setRidePopupPanel(false)
        }} className="w-full mt-1 bg-red-600 text-white font-semibold rounded-xl p-3">
          Cancel Ride
        </button>
        </form>
        </div>

      </div>
    </div>
  )
}

export default ConfirmRidePopUp