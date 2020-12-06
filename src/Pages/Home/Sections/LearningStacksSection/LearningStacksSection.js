import {
  Container,
  Grid,
} from "@material-ui/core";
import React from "react";
import { learningStacksSectionStyles } from "./LearningStacksSectionStyles";
import FrontEndStackImg from "../../../../Assets/images/frontendstackimg.jpeg";
import BackEndStackImg from "../../../../Assets/images/backendstackimg.jpg";
import MLStackImg from "../../../../Assets/images/mlstackimg.jpg";
import DSStackImg from "../../../../Assets/images/dsstackimg.jpg";
import CPStackImg from "../../../../Assets/images/cpstackimg.png";
import GameDevStackImg from "../../../../Assets/images/gamedevstackimg.png";
import FlutterStackImg from "../../../../Assets/images/flutterstackimg.jpg";
import OSStackImg from "../../../../Assets/images/osstackimg.png";
import LearnCard from "./LearnCard";

const LearningStacksSection = () => {
  const classes = learningStacksSectionStyles();
  const data = [
    {
      img: FrontEndStackImg,
      title: "Front End Development",
      description: `Front-end web development is the practice of converting
      data to a graphical interface, through the use of HTML,
      CSS, and JavaScript, so that users can view and interact
      with that data.`
    },
    {
      img: BackEndStackImg,
      title: "Back End Development",
      description: `Back-end Development refers to the server-side
      development. It is the term used for the behind-the-scenes
      activities that happen when performing any action on a
      website.`
    },
    {
      img: MLStackImg,
      title: "Machine Learning",
      description: `Machine learning is an application of artificial
      intelligence (AI) that provides systems the ability to
      automatically learn and improve from experience without
      being explicitly programmed.`
    },
    {
      img: DSStackImg,
      title: "Data Science",
      description: `Data science is an inter-disciplinary field that uses
      scientific methods, processes, algorithms and systems to
      extract knowledge and insights from many structural and
      unstructured data.`
    },
    {
      img: CPStackImg,
      title: "Competitive Programming",
      description: `   Competitive programming is a mind sport usually held over
      the Internet or a local network, involving participants
      trying to program according to provided specifications. It
      is referred as Programmers Sport.`
    },
    {
      img: GameDevStackImg,
      title: "Game Development",
      description: `Game Development is the art of creating games and
      describes the design, development and release of a game.
      It may involve concept generation, design, build, test and
      release.`
    },
    {
      img: FlutterStackImg,
      title: "Mobile App Development using Flutter",
      description: `Flutter is an open-source UI software development kit
      created by Google. It is used to develop applications for
      Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the
      web from a single codebase.`
    },
    {
      img: OSStackImg,
      title: "Open Source Development",
      description: `Open-source software development is the process by which
      open-source software, or similar software whose source
      code is publicly available, is developed by an open-source
      software project.`
    },
  ]
  return (
    <React.Fragment>
      <div className={classes.wrapperContainer}>
        <Container maxWidth="lg">
          <div className={classes.titleContainer}>

            {/* Header */}
            <h1
              className={`${classes.basicText} ${classes.headerHeading}`}
              style={{ color: "#ffffff" }}
            >
              Learning Stacks
            </h1>
            <hr className={classes.underline} />
          </div>

          {/* SUB-HEADER */}
          <p className={classes.subTitle}>
            We've collected mentors working in following different stacks to
            give you a guided learning path.
          </p>
          <Grid container spacing={4}>
            {/* Card */}

            {
              data.map(data => (
                <LearnCard
                  img={data.img}
                  title={data.title}
                  description={data.description}
                />
              ))
            }
          </Grid>
        </Container>
      </div>
      <div className={classes.shapeContainer} />
    </React.Fragment>
  );
};

export default LearningStacksSection;
