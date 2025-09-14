import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {

  const [ridePopupPanel,setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel,setConfirmRidePopupPanel] = useState(false)


  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

  useGSAP(function(){
    if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(ridePopupPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[ridePopupPanel])

  useGSAP(function(){
    if(confirmRidePopupPanel){
      gsap.to(confirmRidePopupPanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(confirmRidePopupPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePopupPanel])


  return (
    <div className="h-screen">
      <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
          className="w-16"
        />
        <Link
          to="/captain-home"
          className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center p-2 rounded-full"
        >
          <i class="ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-2/5 p-4">
        <CaptainDetails/>
      </div>

      <div ref={ridePopupPanelRef} className="bottom-0 fixed translate-y-full z-10 w-full bg-white px-3 py-10 pt-12 ">
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
      </div>

      <div ref={confirmRidePopupPanelRef} className="bottom-0 top-0 fixed translate-y-full z-10 w-full bg-white px-3  pt-12 ">
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
