import React, { useReducer } from 'react';

// Define the reducer function
const reset=(a)=>{
    return {count: a}
}

const reducer = (state, a) => {
  switch (a.type) {
    case 'inc':
      return { count: state.count + 1 };
    case 'dec':
      return { count: state.count - 1};
    case 'init':
      return reset(state.paylode);
    default:
      return state;
  }
};

// Define the initial state
const initialState = { 
    count: 0

 };

function Stat() {
  // Use the reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button
        style={{ fontSize: '20px', margin: '10px' }}
        onClick={() => dispatch({ type: 'inc' })}
      >
        +
      </button>
      <button
        style={{ fontSize: '20px', margin: '10px' }}
        onClick={() => dispatch({ type: 'dec' })}
      >
        -
      </button>
      <button
        style={{ fontSize: '20px', margin: '10px' }}
        onClick={() => dispatch({ type: 'init', paylode:initialState.count })}
      >
        0
      </button>
      <p style={{ fontSize: '20px', margin: '10px' }}>
        = {state.count}
      </p>
      
    </div>
  );
}

export default Stat;
