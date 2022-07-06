import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { 
  Link as RouterLink,
  LinkProps as RouterLinkProps,
 } from 'react-router-dom';

interface PageConfig {
  key: string;
  name: string;
  path: string;
};

const pages: PageConfig[] = [
  {
    key: 'home',
    name: 'Home',
    path: '/',
  },
  {
    key: 'resume',
    name: 'Resume',
    path: '/resume',
  },
  {
    key: 'project',
    name: 'Projects',
    path: '/project',
  },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const appBarTitle = 'Roy Chuang';

const AppBarComponent = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const mainStyle = {
    fontFamily: 'Arial,Helvetica,sans-serif',
    letterSpacing: '.1rem',
    bgcolor: "#FBFCFC",
    color: "#7B7D7D",
    boxShadow: 0,
  };

  return (
    <AppBar position="static" color="primary" sx={{ bgcolor: mainStyle.bgcolor, color: mainStyle.color, boxShadow: mainStyle.boxShadow }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: mainStyle.bgcolor,
              fontWeight: 700,
              letterSpacing: mainStyle.letterSpacing,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            { appBarTitle }
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({key, name, path}) => (
                <MenuItem 
                  key={key}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={path}
                >
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: mainStyle.fontFamily,
              fontWeight: 700,
              letterSpacing: mainStyle.letterSpacing,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            { appBarTitle }
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({key, name, path}) => (
              <Button
                key={key}
                onClick={() => {
                  handleCloseNavMenu();
                }}
                component={RouterLink}
                to={path}
                sx={{ my: 2, color: mainStyle.color, display: 'block' }}
              >
                {name}
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarComponent;
