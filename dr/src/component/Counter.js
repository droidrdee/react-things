import React, { useState} from 'react'

const Counter = () =>{
    const [count, setCount] = useState(0)

function increaseCount(){
    setCount(count+1)
    console.log(count)
}

function decreseCount(){
    setCount(count-1)
    console.log(count)
}

function setToZero(){
    setCount(0)
    console.log(count)
}
    return (
        <div>
            <h1> Welcome to Counter App</h1>
            <h2> Click + to increase and Click - to decrese the counter value</h2>
            <h2> Counter Value is {count}</h2>
            <button style={{ height:"50px", width:"130px"}}  onClick={increaseCount}> Increase + </button>
            <button style={{ marginLeft:"20px", height:"50px", width:'130px'}} onClick={decreseCount}> Decrese - </button>
            <button style={{ marginLeft:"20px", height:"50px", width:"130px"}} onClick={setToZero}>Set to Zero</button>
        </div>
    )
}

export default Counter;