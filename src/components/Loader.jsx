import React, { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };

    // Wait for the entire page to load
    window.addEventListener("load", handlePageLoad);

    // Clean up the event listener
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return (
    <div
      className={`${
        loading ? "h-screen" : "h-0"
      } duration-1000 fixed z-[200] top-0 left-0 w-screen overflow-hidden bg-[#2a3440] flex flex-col items-center justify-center gap-[20px] text-[#eceef2]`}
    >
      <div className="overflow-hidden">
        <p
          className={`whitespace-nowrap duration-[1000] text-[2rem] font-semibold`}
        >
          YOSSY DENTAL CARE
        </p>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
