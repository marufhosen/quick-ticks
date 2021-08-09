import React from "react";
import { CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "60vh",
  },
  mediaText: {
    position: "absolute",
    top: "40%",
    left: " 50%",
    transform: "translate(-50%, -50%)",
    color: "#ac1a1a",
    textAlign: "center",
    border: "2px solid white",
    padding: 30,
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div>
      <CardMedia
        className={classes.media}
        image={
          "https://www.sainteldaily.com/wp-content/uploads/2019/05/google-trips.jpg"
        }
      >
        <Typography className={classes.mediaText} variant="h3">Find Your Destination</Typography>
      </CardMedia>
    </div>
  );
};

export default Banner;
