import {React, useState} from 'react';
import Card from "./Cards";
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginTop: "2rem",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
}));

export default function SimpleCard({posts, loadPosts}) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm ] = useState("")

  return (
    <>
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search by Title…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
    {posts.filter((post) => {
      if (searchTerm == "") {
        return post
      } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return post
      }
    }).map((post) => (
      <Card post={post} loadPosts={loadPosts}/>
     ))}
     </>
  );
}
