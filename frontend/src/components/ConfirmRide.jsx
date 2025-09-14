import React from "react";

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
          props.setConfirmRidePanel(false)
        }}
        className="p-2 text-end ml-10 absolute top-0 w-[80%]"
      >
        <i className=" text-2xl text-gray-700 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold m-5 ">Confirm your Ride</h3>

      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569352630/assets/4b/28f11e-c97b-495a-bac1-171ae9b29362/original/BlackSUV.png"
          alt=""
        />

        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-line"></i>

            <div className="">
              <h3 className="text-lg font-medium">Unit no 30, Morachapada</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Goregaon East, Mumbai
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>

            <div className="">
              <h3 className="text-lg font-medium">Samta Colony, Johar Nagar</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Dombi wali, New-Mumbai
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-fill"></i>

            <div className="">
              <h3 className="text-lg font-medium">₹ 268</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Cash / Upi / Net Banking
              </p>
            </div>
          </div>
        </div>

        <button onClick={()=>{
          props.setVehicleFound(true)
          props.setConfirmRidePanel(false)
        }} className="w-full mt-5 bg-green-600 text-white font-semibold rounded-xl px-4 py-2">
          confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
