import React, { useRef, useState }  from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {

  const [ pickup, setPickup ] = useState('')
  const [ destination, setDestination ] = useState('')
  const [panelOpen , setPanelOpen ] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [vehiclePanel,setVehiclePanel]= useState(false)
  const [confirmRidePanel,setConfirmRidePanel] = useState(false)
  const [vehicleFound,setVehicleFound] = useState(false)
  const [waitingForDriver,setWaitingForDriver] = useState(false)
  const [ pickupSuggestions, setPickupSuggestions ] = useState([])
  const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
  const [ activeField, setActiveField ] = useState(null)
  const [fare,setFare] = useState(null)


  const handlePickupChange = async (e) => {
    setPickup(e.target.value)
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
        setPickupSuggestions(response.data)
    } catch {
        // handle error
    }
}


  const handleDestinationChange = async (e) => {
    setDestination(e.target.value)
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setDestinationSuggestions(response.data)
    } catch {
        // handle error
    }
}

  const submitHandler = (e) =>{
    e.preventDefault()
  }

  useGSAP(function() {
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',padding:24
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }
    else{
      gsap.to(panelRef.current,{
        height:'0%',padding:24
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
    
  },[panelOpen])

  

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanel])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehicleFound])

  useGSAP(function(){
    if(WaitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[WaitingForDriver])


  async function findTrip(){
    setVehiclePanel(true)
    setPanelOpen(false)

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
      params: { pickup, destination },
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })


  setFare(response.data)
  }
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute top-5 left-5 "
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div  className="h-screen w-screen ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />


      </div>

      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className=" h-[30%] p-5 bg-white relative">

          <h5 
          ref={panelCloseRef}
          onClick={()=>{
            setPanelOpen(false)
          }}
           className=" top-3 opacity-0 left-0"><i className="ri-arrow-down-wide-line"></i></h5>

          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>

             <div className="line absolute h-16 w-1 top-[73%] -translate-y-1/2 left-9 bg-gray-700 rounded-full"></div>



            <input
            onClick={()=>{
              setPanelOpen(true)
            }}
              value={pickup}
              onChange={(e)=>{
                setPickup(e.target.value)
              }}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
            onClick={()=>{
              setPanelOpen(true)
            }}
            value={destination}
            onChange={(e)=>{
              setDestination(e.target.value)
            }}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
          <button onClick={
            findTrip
          } className="bg-black text-lg text-white w-full px-6 py-2 rounded-lg  my-5">find a ride</button>
        </div>

        <div ref={panelRef} className="mt-8 h-0 bg-white ">
          <LocationSearchPanel 
          suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
          setPanelOpen={setPanelOpen}  
          setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>

      <div ref={vehiclePanelRef} className="fixed w-full  z-10 bottom-0 translate-y-full bg-white px-3 py-2">
       <VehiclePanel fare={fare} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />

      </div>

      <div ref={confirmRidePanelRef} className="fixed w-full  z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
       <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>

      </div>

      <div ref={vehicleFoundRef} className="fixed w-full  z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
       <LookingForDriver WaitingForDriver={waitingForDriver} setVehicleFound={setVehicleFound} setWaitingForDriver={setWaitingForDriver} /> 
      </div>

      {/* <div ref={waitingForDriverRef} className="fixe w-full  z-10 bottom-0  bg-white px-3 py-6 pt-12">
        <WaitingForDriver 
        // WaitingForDriver={waitingForDriver} 
        setWaitingForDriver={setWaitingForDriver} setVehicleFound={setVehicleFound}/>
      </div> */}
      
    </div>
  );
};

export default Home;
