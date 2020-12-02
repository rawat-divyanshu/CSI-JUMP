import React from "react";
import { homeStyles } from "./HomeStyles";
import Header from "./Sections/Header/Header";
import About from "./Sections/About/About";
import PeopleCategorySection from "./Sections/PeopleCategorySection/PeopleCategorySection";
import ProgramPhasesSection from "./Sections/ProgramPhasesSection/ProgramPhasesSection";

const Home = () => {
  const classes = homeStyles();
  return (
    <div className={classes.mainContainer}>
      {/* Header */}
      <Header />

      {/* About */}
      <About />

      {/* Selected People Section */}
      <PeopleCategorySection />

      {/* Program Phases Section */}
      <ProgramPhasesSection />
    </div>
  );
};

export default Home;
