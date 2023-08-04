import React, { useState } from 'react'

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () =>{
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }

  setInterval(UpdateTime,1000)

  return (
    <>
      <div className="clock">
        <h1>Time</h1>
        <h2>{ctime}</h2>
      </div>
    </>
  )
}

export default App
