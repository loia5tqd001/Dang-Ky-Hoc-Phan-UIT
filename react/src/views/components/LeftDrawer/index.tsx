import FeedbackIcon from '@mui/icons-material/FeedbackOutlined';
import MenuIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { default as MuiDrawer } from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/styles';
import makeStyles from '@mui/styles/makeStyles';
import logoUit from 'assets/img/logo-uit.png';
import clsx from 'clsx';
import GitHubButton from 'react-github-btn';
import { NavLink, useLocation } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';
import { ROUTES } from '../../../constants';
import { useDrawerStore } from '../../../zus';
import { sendTrackingEvent } from '../../../tracking';

const drawerWidth = 190;
const drawerWidthClosed = 50;

const openCloseMixin = (theme, open) =>
  ({
    width: `${open ? drawerWidth : drawerWidthClosed}px !important`,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  } as const);

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...openCloseMixin(theme, open),
  '& .MuiDrawer-paper': {
    background: '#f2f1e3f0',
    ...openCloseMixin(theme, open),
  },
}));

function LeftDrawer() {
  const classes = useStyles();
  const toggleDrawer = useDrawerStore((s) => s.toggleDrawer);
  const isOpen = useDrawerStore((s) => s.isDrawerOpen);
  const isCollapsed = !isOpen;
  const location = useLocation();

  useEffect(() => {
    sendTrackingEvent.leftDrawer({
      action: 'view',
      label: isOpen ? 'open' : 'close',
      nonInteraction: true,
    });
  }, [isOpen]);

  return (
    <nav className={classes.drawer}>
      <Drawer className={clsx(classes.drawer)} variant="permanent" open={isOpen}>
        <Box className={classes.drawerTopCollapse}>
          <Tooltip title={isOpen ? 'Collapse' : 'Expand'}>
            <IconButton color="inherit" onClick={toggleDrawer} size="large">
              <MenuIcon className={clsx(classes.collapseIcon, isCollapsed && classes.collapseIconCollapsed)} />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Logo */}
        <Box mx={5} my={5} style={{ height: 120, marginTop: 60 }}>
          <Tooltip title="Tool đăng ký học phần UIT">
            <a
              href="https://github.com/loia5tqd001/Dang-Ky-Hoc-Phan-UIT"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                sendTrackingEvent.leftDrawer({
                  action: 'logo_click',
                });
              }}
            >
              <img src={logoUit} alt="logo uit" className={clsx(classes.img, isCollapsed && classes.imgCollapsed)} />
            </a>
          </Tooltip>
        </Box>

        {/* List item */}
        <List>
          {Object.values(ROUTES).map((route, index) => (
            <ListItem
              key={route.path}
              className={classes.listItem}
              button
              component={NavLink}
              to={route.path + location.search}
              activeClassName={classes.menuItemActive}
              onClick={() => {
                sendTrackingEvent.leftDrawer({
                  action: 'menu_item_click',
                  label: route.path,
                });
              }}
            >
              <ListItemText primary={isOpen ? route.name : `${index + 1}.`} />
            </ListItem>
          ))}
        </List>

        {/* Icons with link */}
        <Tooltip title="Gửi feedback" placement="top">
          <Box m={1} style={{ margin: 'auto auto 0' }}>
            <a
              href="https://www.facebook.com/messages/t/loia5tqd001"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                sendTrackingEvent.leftDrawer({
                  action: 'feedback_btn_click',
                });
              }}
            >
              <FeedbackIcon color="primary" fontSize="large" />
            </a>
          </Box>
        </Tooltip>

        {/* Typewriter */}
        <Box className={clsx(classes.typewriterWrapper, classes.etc, isCollapsed && classes.etcCollapsed)}>
          <Typewriter
            options={{
              strings: ['Give feedback', 'Like & Share', 'Star'],
              autoStart: true,
              loop: true,
            }}
          />
        </Box>

        {/* Github stars */}
        <Tooltip title="Hãy vào star giúp nhé">
          <Box className={clsx(classes.githubStarWrapper, classes.etc, isCollapsed && classes.etcCollapsed)}>
            <div
              onClick={() => {
                sendTrackingEvent.leftDrawer({
                  action: 'github_star_btn_click',
                });
              }}
              onMouseEnter={() => {
                sendTrackingEvent.leftDrawer({
                  action: 'github_star_btn_hover',
                });
              }}
            >
              <GitHubButton
                href="https://github.com/loia5tqd001/Dang-Ky-Hoc-Phan-UIT"
                data-size="large"
                data-show-count="true"
                children={'Star'}
              />
            </div>
          </Box>
        </Tooltip>
      </Drawer>
    </nav>
  );
}

export default LeftDrawer;

// styles below:

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    transition: 'all 0.3s ease',
  },
  collapseIcon: {
    margin: '0 auto 0',
    transform: 'rotate(0deg)',
    transition: 'all 0.3s ease',
  },
  collapseIconCollapsed: {
    transform: 'rotate(540deg)',
  },
  img: {
    width: '100%',
    transformOrigin: 'center',
    transform: 'scale(1)',
    transition: 'all 0.3s ease',
  },
  imgCollapsed: {
    transform: 'scale(0)',
  },
  etc: {
    transform: 'scale(1)',
  },
  etcCollapsed: {
    transform: 'scale(0) translateY(100px)',
    overflow: 'hidden',
  },
  drawerTopCollapse: {
    background: '#f7dce733',
    color: theme.palette.primary.main,
    fontWeight: 'bolder',
    borderBottom: '1px solid #ccc',
    display: 'grid',
    placeItems: 'center',
  },
  listItem: {
    borderTop: '1px solid transparent',
    borderBottom: '1px solid transparent',
    userSelect: 'none',
    userDrag: 'none',
    marginTop: 10,
  },
  menuItemActive: {
    background: '#f7dce733',
    color: theme.palette.primary.main,
    fontWeight: 'bolder',
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
  },
  githubStarWrapper: {
    minHeight: 45,
    margin: 5,
    paddingTop: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '3px dotted #0477BD',
    borderRadius: 3,
  },
  typewriterWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
