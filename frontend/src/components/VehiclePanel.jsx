import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div className=''>
       <h5 
        onClick={()=>{
          props.setVehiclePanel(false)
        }}
        className="p-2 text-end ml-10 absolute top-0 w-[80%]"><i className=" text-2xl text-gray-700 ri-arrow-down-wide-fill"></i></h5>
        <h3 className="text-2xl font-semibold m-5 ">Choose a Vehicle</h3>

        

        

        <div onClick={()=>{
          props.setConfirmRidePanel(true)
        }} className="flex w-full border-2 border-white active:border-black rounded-xl items-center justify-between p-3 mb-3">
          <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="" />
          <div className="w-1/2">
            <h4 className="font-bold text-sm">Uber Moto<span className=""><i className="ri-user-2-fill"></i>1</span></h4>
            <h5 className="font-medium text-sm">5 mins away</h5>
            <p className="font-normal text-xs">Affordable, compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹ 96</h2>
        </div>

        
        <div onClick={()=>{
          props.setConfirmRidePanel(true)
        }} className="flex w-full border-2 border-white active:border-black rounded-xl items-center justify-between p-3 mb-3">
          <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className="w-1/2">
            <h4 className="font-bold text-sm">Uber Auto <span className=""><i className="ri-user-2-fill"></i>3</span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs">Affordable, compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹ 132</h2>
        </div>

        <div onClick={()=>{
          props.setConfirmRidePanel(true)
        }} className="flex w-full border-2 border-white active:border-black rounded-xl items-center justify-between p-3 mb-3">
          <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
          <div className="w-1/2">
            <h4 className="font-bold text-sm">Uber Go <span className=""><i className="ri-user-2-fill"></i>4</span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs">Affordable, compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹ 178</h2>
        </div>

        <div onClick={()=>{
          props.setConfirmRidePanel(true)
        }} className="flex w-full border-2 border-white active:border-black rounded-xl items-center justify-between p-3 mb-3">
          <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569352630/assets/4b/28f11e-c97b-495a-bac1-171ae9b29362/original/BlackSUV.png" alt="" />
          <div className="w-1/2">
            <h4 className="font-bold text-sm">Uber Luxury <span className=""><i className="ri-user-2-fill"></i>2</span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs">Affordable, compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹ 268</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
