/** @jsx jsx */
import { Global, jsx } from '@emotion/core';
import { useTheme, makeStyles, createStyles } from '@material-ui/styles';
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { green } from '@material-ui/core/colors';

export const App = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles(theme =>
    createStyles({ paper: { width: 240 } })
  );
  const classes = useStyles({});

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
      <main css={{ flexGrow: 1 }}>blah </main>
    </div>
  );
};

export default App;
