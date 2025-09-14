import React, { useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const CaptainRiding = () => {

    const [finishRidePanel,setFinishRidePanel]=useState(false)
    const finishRidePanelref = useRef(null)


    useGSAP(function(){
        if(finishRidePanel){
          gsap.to(finishRidePanelref.current,{
            transform:'translateY(0)'
          })
        }
        else{
          gsap.to(finishRidePanelref.current,{
            transform:'translateY(100%)'
          })
        }
      },[finishRidePanel])



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

      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div onClick={()=>{
        setFinishRidePanel(true)
      }} className="h-1/5 p-4 bg-yellow-200 flex items-center justify-between relative">
      <h5
        onClick={()=>{
          
        }}
        className="p-2 text-center 
         absolute top-0 w-full"
      >
        <i className=" text-2xl text-gray-700 ri-arrow-up-wide-fill"></i>
      </h5>

        <h4 className="text-xl font-semibold">4 Km away</h4>
        <button className=" mt-1 bg-green-600 text-white font-semibold rounded-xl px-14 py-2">Complete Ride</button>
      </div>


      <div ref={finishRidePanelref} className="bottom-0 top-0 fixed translate-y-full z-10 w-full bg-white px-3  pt-12 ">
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>

      
    </div>
  )
}

export default CaptainRiding