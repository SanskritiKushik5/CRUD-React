import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    textDecoration: 'none',
    color: 'white',
  },
  menu: {
    textDecoration: 'none',
    color: 'black',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <AddCircleOutlineIcon />
        </IconButton>
        <Typography component={Link} to="/create" className={classes.menu}>Create Post</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <ThumbUpIcon />
        </IconButton>
        <Typography component={Link} to="/" className={classes.menu}>Liked Posts</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <ThumbDownIcon />
        </IconButton>
        <Typography component={Link} to="/" className={classes.menu}>Disliked Posts</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography component={Link} to="/" className={classes.title} variant="h6" noWrap>
            CEA-2
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Tooltip title="Create Post">
              <IconButton component={Link} to="/create" color="inherit">
                  <AddCircleOutlineIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Liked Posts">
              <IconButton component={Link} to="/" color="inherit">
                  <ThumbUpIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Disliked Posts">
              <IconButton component={Link} to="/" color="inherit">
                  <ThumbDownIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
