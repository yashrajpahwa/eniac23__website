import React from "react";
import unacademy from "../../../images/sponsors/byjus.png";

const Image = () => {
  return (
    <div className="w-[140px] md:w-[140px] aspect-square  flex bg mx-auto">
      <img
        src={unacademy}
        loading="lazy"
        alt="Unacademy"
        className="aspect-square h-auto object-cover mx-auto max-h-[68%] my-auto"
      />
    </div>
  );
};

export default Image;
