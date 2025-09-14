import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props)

    // sample array location
    const location = [
        "Unit No-30, morachapada, goregaon East, Mumbai-400 065",
        "Unit No-25, lokhandwala, Andheri East, Mumbai-400 039",
        "johar nagar, kantapada, borivali West, mumbai-400 026",
        "mira road, sb link road, bhayandar East, Mumbai-400 005"
    ]
  return (

    
    
    <div>
      {/* sample data */}
      {
        location.map(function(elem,idx){
            return <div key={idx} onClick={()=>{
                props.setVehiclePanel(true)
                props.setPanelOpen(false)
            }} className="flex gap-4 border-2 p-3 rounded-xl border-white active:border-black my-2 items-center justify-start">
                    <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-4xl"><i className="ri-map-pin-fill font-medium"></i></h2>
                     <h4 className="">{elem}</h4>
                    </div>
        })
      }

      
    </div>
  )
}

export default LocationSearchPanel


// import React from 'react'

// const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

//     const handleSuggestionClick = (suggestion) => {
//         if (activeField === 'pickup') {
//             setPickup(suggestion)
//         } else if (activeField === 'destination') {
//             setDestination(suggestion)
//         }
//         // setVehiclePanel(true)
//         // setPanelOpen(false)
//     }

//     return (
//         <div>
//             {/* Display fetched suggestions */}
//             {
//                 suggestions.map((elem, idx) => (
//                     <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
//                         <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
//                         <h4 className='font-medium'>{elem}</h4>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }

// export default LocationSearchPanel