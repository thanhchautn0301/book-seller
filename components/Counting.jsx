import React, { useCallback, useState } from "react";

const Counting = ({ changeQuantity , totalQuantity , isDisabled}) => {
  const handleNumChange = (event) => {
    const limit = 2;
    const quantityNumb = event.target.value.slice(0, limit)
    changeQuantity(quantityNumb);
  };

  return (
    <div className="border p-4 rounded w-[68px] relative mt-1">
      <input type="number" 
        value={totalQuantity}
        onInput={handleNumChange} 
        className="absolute outline-none inset-0 p-2"
        min={0}  
        disabled={isDisabled} 
        />
    </div>
  );
};

export default Counting;
