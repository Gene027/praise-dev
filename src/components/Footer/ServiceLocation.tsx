import React from "react";

const ServiceLocation = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <h1 className="font-raleway text-base md:text-lg font-semibold text-bg">
        Service Location
      </h1>
      <div className="flex flex-col gap-2 md:gap-3">
        <p className="font-raleway text-xs md:text-sm text-bg">
          43, Green Estate, Agege, Lagos State
        </p>
        <p className="font-raleway text-xs md:text-sm text-bg">
          {`Contact No; (+234) 8060388607`}
        </p>
        <p className="font-raleway text-xs md:text-sm text-bg">
          Email: anosikepraise@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ServiceLocation;
