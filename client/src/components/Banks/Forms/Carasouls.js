/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    // TODO ADD CARAOUSEL
    <>
      <div>
        <img src="/preg33.jpg" className="h-[90vh] w-full  " alt="" />
      </div>
    </>
  );
}

// render(<ControlledCarousel />);
