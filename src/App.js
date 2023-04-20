import React, { useState } from 'react'
import Tours from "./components/Tours";
import data from "./data";

const App = () => {

    const[tours,setTours]=useState(data);

    function removeTour(id){
    const newTours=tours.filter(tour=>tour.id !== id);
    setTours(newTours);
    }

    if(tours.length ===0){
        return(
            <div className='refersh'>
                <h2>No Tours Left</h2>
                <button onClick={()=>{setTours(data)}} className='btn-white'>
                    Refresh
                </button>
            </div>
        )
    }
    return (
        <div className='app'>
            <Tours tours={tours} removeTour={removeTour}></Tours>
        </div>
    )
}

export default App;