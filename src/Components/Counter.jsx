import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';


function Counter() {
    // state creation
    const[counter,setCounter]=useState(0)
    // function counter
    function incrementCounter(){
        // increment by 1
        setCounter(counter+1)
    }
    function decrementCounter(){
        // decrement by 1
        if(counter!==0){
        setCounter(counter-1)
    }}
    function reset(){
        setCounter(0)
        
    
    }
    
  return (
    <div className='m-5 p-5 d-flex justofy-content-center align-items-center'>
        <div className='container m-5 p-5 border border-2 border-dark shadow rounded w-50 bg-success'>
            <h1 className='text-light text-center'>Counter App</h1>
            <h1 className='text-center'>{counter}</h1>
          <div className='text-left d-flex justify-content-between'>
            
        <MDBBtn color='warning' onClick={incrementCounter}>Increment</MDBBtn>
    
        <MDBBtn color='danger' onClick={decrementCounter}>Decrement</MDBBtn>

        
        <MDBBtn color='info' onClick={reset}>Reset</MDBBtn>
    
        </div>
        
    </div>
    </div>
  )
}

export default Counter