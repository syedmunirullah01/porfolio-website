// app/about/page.tsx
import ClientReviews from "@/components/Home/ClientReviews/ClientReviews";
import React from "react";


const AboutPage = () => {
  return (
    <div className="bg-[#050709] pt-16 pb-16">
      {" "}
      {/* Background color and padding added */}
      <ClientReviews />
    </div>
  );
};

export default AboutPage;
