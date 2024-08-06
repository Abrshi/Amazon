import React from 'react';
import { HashLoader } from 'react-spinners';

function Spinners() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <HashLoader color="#36d7b7" size={150} />
    </div>
  );
}

export default Spinners;
