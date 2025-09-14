import React from "react";

const CaptainDetails = () => {
  return (
    <div>
     
          <div className="flex items-center justify-between px-3 ">
            <div className="flex items-center justify-start gap-4">
              <img
                className="w-15 h-15 object-cover rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyzqbjUMZTs5ZiCTfp8mFExzrkV7DC72pIQ&s"
                alt=""
              />
              <h4 className="text-xl font-medium">Jubair Khan</h4>
            </div>
            <div className="">
              <h4 className="text-xl font-semibold">Rs. 295.23</h4>
              <p className="text-sm text-gray-600 text-center">Earned</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl flex justify-center gap-5 p-5 mt-6">
            <div className="text-center">
              <i class="text-3xl mb-2 font-thin ri-timer-flash-line"></i>
              <h5 className="text-lg font-medium">10.2 </h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div className="text-center">
              <i class="text-3xl mb-2 font-thin ri-speed-up-line"></i>
              <h5 className="text-lg font-medium">10.2 </h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div className="text-center">
              <i class="text-3xl mb-2 font-thin ri-booklet-line"></i>
              <h5 className="text-lg font-medium">10.2 </h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
          </div>
      
    </div>
  );
};

export default CaptainDetails;
