import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        onClick={()=>{
          props.setRidePopupPanel(false)
        }}
        className="p-2 text-center ml-10 absolute top-0 w-[80%]"
      >
        <i className=" text-2xl text-gray-700 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold ">New Ride Avilable!</h3>



      <div className="flex items-center justify-between mt-4 bg-amber-300 p-3 border-yellow-800 rounded-2xl">
        <div className="flex items-center gap-3">
          <img className='h-12 w-12 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyzqbjUMZTs5ZiCTfp8mFExzrkV7DC72pIQ&s" alt="" />
          <h2 className="text-xl font-medium">Jubair Khan</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 Km</h5>
      </div>



      <div className="flex gap-2 justify-between flex-col items-center">
        

        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-user-line"></i>

            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Jubair Khan , Mumbai
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
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

        <div className="flex items-center justify-between w-full mt-5">

        <button onClick={()=>{
          props.setRidePopupPanel(false)
        }} className=" mt-1 bg-gray-600 text-white font-semibold rounded-xl px-14 py-2">
          Ignore
        </button>


        <button onClick={()=>{
          props.setConfirmRidePopupPanel(true)
          // props.cnfirmRide()
        }} className=" mt-1 bg-green-600 text-white font-semibold rounded-xl px-14 py-2">
          Accept
        </button>

        


        </div>
      </div>
    </div>
  )
}

export default RidePopUp