import React from "react";
import './Card.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const TinderCard = ({ zIndex = 0, imageUrl, title, desc, distance, cat }) => (
    <Card className="Card" style={{ zIndex }}>
      <CardActionArea>
        <CardMedia
          image={"imageUrl"}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="actions">
        <p>
          {distance}
        </p>
        <p>
          {cat}
        </p>
      </CardActions>
    </Card>
);

export default TinderCard;
