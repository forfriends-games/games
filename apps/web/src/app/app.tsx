/** @jsx jsx */
import React from 'react';
import { Global, jsx } from '@emotion/core';
import { useTheme, makeStyles, createStyles } from '@material-ui/styles';
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  Button,
  ButtonGroup,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Modal,
  Backdrop,
  Fade
} from '@material-ui/core';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { green } from '@material-ui/core/colors';

export const App = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles(theme =>
    createStyles({
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        color: 'white'
      },
      popup: {
        padding: '20px',
        background: '#111'
      },
      paper: {
        width: 240
      }
    })
  );
  const classes = useStyles({});

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setPlayers = ev => {
    gameConfig.numOfPlayers = ev.currentTarget.dataset.num_of_players;
    console.log(gameConfig);
    return true;
  }

  var gameConfig = {
    numOfPlayers: 0,
    characters: {
      merlin: 1,
      percival: 0,
      assasin: 1,
      morgana: 0,
      mordred: 0,
      oberon: 0,
      normalGood: 0,
      normalBad: 0
    },
    ladyOfTheLake: 0,
    limitDiscussion: 0,
    limitEndDiscussion: 0
  }

  return (
    <div css={{ display: 'flex' }}>
      <Global
        styles={{ body: { backgroundColor: theme.palette.background.default } }}
      />
      <AppBar css={{ zIndex: theme.zIndex.drawer + 1 }} position="fixed">
        <Toolbar css={{ display: 'flex' }}>
          <div css={{ flexGrow: 1 }}>
            <Typography variant="h6">Avalon</Typography>
          </div>
          <Button
            variant="contained"
            color="secondary"
            css={{ marginRight: theme.spacing(2) }}
            onClick={handleOpen}
          >
            Create Game
          </Button>
          <Avatar
            css={{
              color: '#fff',
              backgroundColor: green[500]
            }}
          >
            JH
          </Avatar>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{
          paper: classes.paper
        }}
        open={true}
        variant="persistent"
      >
        <div css={theme.mixins.toolbar}></div>
        <List>
          {[
            { icon: <VideogameAssetIcon />, text: 'Find Games' },
            { icon: <ShowChartIcon />, text: 'Stats' }
          ].map((item, index) => (
            <ListItem button key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.popup}>
            <h2 id="transition-modal-title">Game configurations</h2>
            <h3>Number of players</h3>
            <ButtonGroup color="secondary" aria-label="outlined secondary button group">
              <Button data-num_of_players="5" onClick={setPlayers.bind(this)}>5</Button>
              <Button data-num_of_players="6" onClick={setPlayers.bind(this)}>6</Button>
              <Button data-num_of_players="7" onClick={setPlayers.bind(this)}>7</Button>
              <Button data-num_of_players="8" onClick={setPlayers.bind(this)}>8</Button>
              <Button data-num_of_players="9" onClick={setPlayers.bind(this)}>9</Button>
              <Button data-num_of_players="10" onClick={setPlayers.bind(this)}>10</Button>
            </ButtonGroup>
            <h3>Characters</h3>
            <div>
              <Button data-character="Merlin" color="secondary" variant="contained">Merlin</Button>
              <Button data-character="Percival" color="secondary" variant="outlined" css={{ marginLeft: theme.spacing(2) }}>Percival</Button>
              <Button data-character="Assasin" color="secondary" variant="contained" css={{ marginLeft: theme.spacing(2) }}>Assasin</Button>
              <Button data-character="Morgana" color="secondary" variant="outlined" css={{ marginLeft: theme.spacing(2) }}>Morgana</Button>
              <Button data-character="Mordred" color="secondary" variant="outlined" css={{ marginLeft: theme.spacing(2) }}>Mordred</Button>
              <Button data-character="Oberon" color="secondary" variant="outlined" css={{ marginLeft: theme.spacing(2) }}>Oberon</Button>
            </div>
            <h3>Use Lady of the Lake?</h3>
            <div>
              <Button color="secondary" variant="outlined">Lady of the Lake</Button>
            </div>
            <h3>Time limits (in seconds)</h3>
            <div>
              <TextField id="in_game_discussion" label="In game discussion" color="secondary" placeholder="300" />
              <TextField id="end_game_discussion" label="End game discussion" color="secondary" placeholder="300" css={{ marginLeft: theme.spacing(2) }}/>
            </div>
          </div>
        </Fade>
      </Modal>
      <main css={{ flexGrow: 1 }}>blah </main>
    </div>
  );
};

export default App;
