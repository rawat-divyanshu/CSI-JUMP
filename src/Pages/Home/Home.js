import React from "react";
import { homeStyles } from "./HomeStyles";
import Header from "./Sections/Header/Header";
import About from "./Sections/About/About";
import PeopleCategorySection from "./Sections/PeopleCategorySection/PeopleCategorySection";
import ProgramPhasesSection from "./Sections/ProgramPhasesSection/ProgramPhasesSection";
import LearningStacksSection from "./Sections/LearningStacksSection/LearningStacksSection";
import Navbar from "./Sections/Navbar/Navbar";
import ProgramMotto from "./Sections/ProgramMotto/ProgramMotto";
import QNASection from "./Sections/QNASection/QNASection";
import Footer from "./Sections/Footer/Footer";
import { Fade } from "react-awesome-reveal";


const Home = () => {
  const classes = homeStyles();
  return (
    <div className={classes.mainContainer}>
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <Header />

      {/* About */}
      <Fade triggerOnce>
      <About />
      </Fade>

      {/* Selected People Section */}
      <Fade triggerOnce>
      <PeopleCategorySection />
      </Fade>

      {/* Program Phases Section */}
      <Fade triggerOnce>
      <ProgramPhasesSection />
      </Fade>

      {/* Learning Stacks Section */}
      <Fade triggerOnce>
      <LearningStacksSection />
      </Fade>

      {/* Program Motto Section */}
      <Fade triggerOnce>

      <ProgramMotto />
      </Fade>

      {/* QNA Section */}
      <Fade triggerOnce>

      <QNASection />
      </Fade>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
