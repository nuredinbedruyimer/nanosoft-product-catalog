import React from "react";
import Hero from "../components/home/Hero";
import BestSeller from "../components/home/BestSeller";
import Latest from "../components/home/Latest";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Latest />
      <BestSeller />
    </div>
  );
};

export default HomePage;