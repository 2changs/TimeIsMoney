import React from "react";
import './Card.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const TinderCard = ({ zIndex = 0, imageUrl, title }) => (
    <Card className="Card" style={{ zIndex }}>
      <CardActionArea>
        <CardMedia
          className
          image={"imageUrl"}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            description
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="actions">
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
);

export default TinderCard;
