import React, { useRef } from "react";

function RefTutorial() {

  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
  };
  
  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="name" ref={inputRef} />
      <button>Change Name</button>
    </div>
  )
}

export default RefTutorial;