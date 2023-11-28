import React, { useState } from "react";
import MedDes from "./MedDes";

export default function Med({ meds }) {
  const [modalshow, setModalshow] = useState(false);

  const handleClick = () => {
    setModalshow(true);
  };

  
  return (
    <>
      <div
        className="m-3 shadow-lg p-3 mb-5 bg-white rounded clickable-item"
        style={{ height: "300px" }}
        onClick={handleClick}
      >
        <img
          src={meds.imageUrl}
          alt="meds"
          style={{ height: "200px", width: "100%", objectFit: "cover", borderRadius: "8px" }}
        />
        <h5 className="mt-3">{meds.name}</h5>
      </div>
      <MedDes med={meds} show={modalshow} onHide={() => setModalshow(false)} />
    </>
  );
}
