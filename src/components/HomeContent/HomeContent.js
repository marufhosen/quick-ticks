import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 180,
  },
});

const HomeContent = (props) => {
  const classes = useStyles();
  const { title, imgUrl } = props.services;

  const history = useHistory();
  const handleService = () => {
    history.push(`/destination/${title}`);
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={handleService}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={imgUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeContent;
