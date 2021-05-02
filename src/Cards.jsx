import {React, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import LongMenu from "./LongMenu";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 700,
      margin: 20,
      borderRadius: 4,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Cards = ({post}) => {
  const classes = useStyles();
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const toggle1 = () => {
    setActive1(true);
    setActive2(false);
  };
  const toggle2 = () => {
    setActive2(true);
    setActive1(false);
  };
    return (
    <Card key={post.id} className={classes.root} raised="true">
      <CardHeader
        title = {post.title}
        action={
            <LongMenu id={post.id}/>
        }
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions key={post.id}>
        <IconButton>
          <ThumbUpIcon  
            onClick={toggle1}
            color={active1 ? 'primary': 'inherit'} 
          />
        </IconButton>
        <IconButton>
          <ThumbDownIcon
            onClick={toggle2}
            color={active2 ? 'primary': 'inherit'} 
          />
        </IconButton>
      </CardActions>
    </Card>
    )
}

export default Cards
