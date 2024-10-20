import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the Slider component with SSR disabled
const Slider = dynamic(() => import("./Slider"), { ssr: false });

const ClientReviews = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>Client Reviews</SectionHeading>
      <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
        <Slider />
      </div>
    </div>
  );
};

export default ClientReviews;
