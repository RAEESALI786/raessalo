import React from 'react'
import { Link } from 'react-router-dom';

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehicleFound(false);
        }}
        className="p-2 text-end ml-10 absolute top-0 w-[80%]"
      >
        <i className=" text-2xl text-gray-700 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold m-5 ">Captain for you</h3>

      <div className='flex items-center justify-between'>
        <img className='h-17 pl-5' src="https://static.vecteezy.com/system/resources/previews/041/642/170/non_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png" alt="" />
        
        <div className='text-right'>
          <h2 className='text-lg font-medium capitalize'> Mr. jubair khan
            {/* {props.ride?.captain.fullname.firstname} */}
            </h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH 02 AJ 789
            {/* {props.ride?.captain.vehicle.plate} */}
            </h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          <h1 className='text-lg font-semibold'>  
            {/* {props.ride?.otp} */}
             </h1>
        </div>
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Goragaon East, Mumbai
                {/* {props.ride?.pickup} */}
                </p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>Samta Colony, Johar Nagar</h3>
              <p className='text-sm -mt-1 text-gray-600'>Dombiwali, New-Mumbai
                {/* {props.ride?.destination} */}
                </p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹ 268
                {/* {props.ride?.fare}  */}
                </h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
            </div>
          </div>
          <Link to="/payment">
          <button  className="w-full mt-5 bg-green-600 text-white font-semibold rounded-xl px-4 py-2">Start Ride</button>
          </Link>
          {/* <button onClick={()=>{
            
          }} className="w-full bg-green-400 py-2 text-lg font-semibold rounded-lg px-32">Start ride</button> */}
        </div>
      </div>
    </div>
  )
}

export default LookingForDriver
