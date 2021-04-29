import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import LongMenu from "./Menu";

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

export default function SimpleCard() {
    const classes = useStyles();

  return (
    <Card className={classes.root} raised="true">
      <CardHeader
        title = "Title"
        action={
            <LongMenu />
        }
      />
      <CardContent>
        <Typography variant="body2" component="p">
          content
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton><ThumbUpIcon /></IconButton>
        <IconButton><ThumbDownIcon /></IconButton>
      </CardActions>
    </Card>
  );
}
