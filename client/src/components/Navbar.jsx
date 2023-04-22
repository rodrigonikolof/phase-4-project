import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
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
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function Navbar({user, setUser}){

    const pages = [
                    {text: 'My Enrolments', path: '/enrolments'}, 
                    {text: 'Available Courses', path: '/courses'}
                  ];
    const settings = [ 'Profile',  'Logout'];

    
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function handleLogoutClick(){
        fetch("/logout", {method: "DELETE"})
        .then((r)=>{
            if(r.ok){
                setUser(null)
            }
        })
    }



return(
<AppBar position="static" color='transparent'>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <EmojiEventsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          {/* <Link to="/" style={{textDecoration: 'none'}} > */}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            YOUDEMY
          </Typography>
          {/* </Link> */}




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
              {pages.map((page) => (
                // <Link to={page.path} style={{textDecoration: 'none'}} key={page.text}>
                <MenuItem key={page.text} 
                  onClick={()=>{
                    handleCloseNavMenu()
                    navigate(page.path)
                    }}>
                  <Typography textAlign="center">{page.text}</Typography>
                </MenuItem>
                // </Link>
              ))}
            </Menu>


          </Box>
          
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              
                <Button
                  key={page.text}
                  onClick={()=>{
                    handleCloseNavMenu()
                    navigate(page.path)
                  }}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {page.text}
                </Button>
              
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
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
              
                <MenuItem 
                    key={'profile'} 
                    onClick={()=>{
                        handleCloseUserMenu();
                        navigate('/profile')
                        }}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem 
                    key={'logout'} 
                    onClick={()=>{
                        handleCloseUserMenu();
                        handleLogoutClick()
                        }}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
)

}