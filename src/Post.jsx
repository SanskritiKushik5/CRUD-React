import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { Tooltip } from '@material-ui/core';

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
            <>
                <Tooltip title="Edit">
                    <IconButton color="primary">
                        <EditIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton color="secondary">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </>
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
