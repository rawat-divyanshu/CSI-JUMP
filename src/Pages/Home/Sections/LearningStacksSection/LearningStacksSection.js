import {
  Card,
  CardActionArea,
  Container,
  Grid,
  CardMedia,
  CardContent,
  Typography,
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

const LearningStacksSection = () => {
  const classes = learningStacksSectionStyles();
  return (
    <React.Fragment>
      <div className={classes.wrapperContainer}>
        <Container maxWidth="lg">
          <div className={classes.titleContainer}>
            <h1
              className={`${classes.basicText} ${classes.headerHeading}`}
              style={{ color: "#ffffff" }}
            >
              Learning Stacks
            </h1>
            <hr className={classes.underline} />
          </div>
          <p className={classes.subTitle}>
            We've collected mentors working in following different stacks to
            give you a guided learning path.
          </p>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={FrontEndStackImg}
                    style={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Front End Development
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Front-end web development is the practice of converting
                      data to a graphical interface, through the use of HTML,
                      CSS, and JavaScript, so that users can view and interact
                      with that data.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={BackEndStackImg}
                    style={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Back End Development
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Back-end Development refers to the server-side
                      development. It is the term used for the behind-the-scenes
                      activities that happen when performing any action on a
                      website.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={MLStackImg}
                    style={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Machine Learning
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Machine learning is an application of artificial
                      intelligence (AI) that provides systems the ability to
                      automatically learn and improve from experience without
                      being explicitly programmed.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={DSStackImg}
                    style={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Data Science
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Data science is an inter-disciplinary field that uses
                      scientific methods, processes, algorithms and systems to
                      extract knowledge and insights from many structural and
                      unstructured data.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={CPStackImg}
                    style={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Competitive Programming
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Competitive programming is a mind sport usually held over
                      the Internet or a local network, involving participants
                      trying to program according to provided specifications. It
                      is referred as Programmers Sport.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={FlutterStackImg}
                    style={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      Mobile App Development using Flutter
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Flutter is an open-source UI software development kit
                      created by Google. It is used to develop applications for
                      Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the
                      web from a single codebase.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={GameDevStackImg}
                    style={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Game Development
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Game Development is the art of creating games and
                      describes the design, development and release of a game.
                      It may involve concept generation, design, build, test and
                      release.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={OSStackImg}
                    style={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Open Source Development
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Open-source software development is the process by which
                      open-source software, or similar software whose source
                      code is publicly available, is developed by an open-source
                      software project.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.shapeContainer} />
    </React.Fragment>
  );
};

export default LearningStacksSection;
