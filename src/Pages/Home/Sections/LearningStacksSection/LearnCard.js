import {
    Card,
    CardActionArea,
    Grid,
    CardMedia,
    CardContent,
    Typography,
} from "@material-ui/core";
import React from "react";
import { learningStacksSectionStyles } from "./LearningStacksSectionStyles";

const LearnCard = ({ img, title, description }) => {
    const classes = learningStacksSectionStyles();
    return (
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={img}
                        style={{ height: 200 }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default LearnCard;