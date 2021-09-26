import React, { useEffect, useLayoutEffect, useRef } from 'react';

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  // Loads before useEffect
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div>
      <input ref={inputRef} value="JEMMA" style={{width: 400, height: 200}} />
    </div>
  );
}

export default LayoutEffectTutorial;