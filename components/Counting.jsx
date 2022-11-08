import React, { useCallback, useState } from "react";

const Counting = () => {
  const [num, setNum] = useState("");

  const handleNumChange = (event) => {
    const limit = 2;
    setNum(event.target.value.slice(0, limit));
  };

  return (
    <div className="border p-4 rounded w-[68px] relative mt-1">
      <input type="number" value={num} onInput={handleNumChange} className="absolute outline-none inset-0 p-2" />
    </div>
  );
};

export default Counting;
