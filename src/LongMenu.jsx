import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItemIcon, Typography } from '@material-ui/core';
import Delete from './Delete';
import { Link } from 'react-router-dom';

export default function LongMenu({id, loadPosts}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={handleClose}>
            <ListItemIcon >
                <EditIcon color="primary"/>
            </ListItemIcon>
            <Typography component={Link} to={`/edit/${id}`} style={{textDecoration: 'none', color: 'black'}} variant="inherit">Edit</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <ListItemIcon >
                <DeleteIcon color="secondary"/>
            </ListItemIcon>
            <Delete id={id} loadPosts={loadPosts}/>
        </MenuItem>
      </Menu>
    </div>
  );
}
