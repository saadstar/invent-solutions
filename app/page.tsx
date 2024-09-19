"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import LandingWorld from "@/components/ui/LandingWorld";

const Home = () => {
  return (
      <div className="max-w-7xl w-full">
         <LandingWorld/>
        <Grid />
         <RecentProjects /> 
        <Clients />
         <Experience />
        <Approach /> 
      </div>    
  );
};

export default Home;
