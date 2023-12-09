import React, { FC, useState } from 'react';
import { ThemeProvider, createTheme, styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { drawerData } from './drawerData';
import SubMenu from './drawerSubmenu';
import axios from 'axios';
import BasrURL from '../../../utils/constants/urls';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import StarIcon from '@mui/icons-material/Star';

const token = localStorage.getItem('token')
const drawerWidth = 200;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
//   open?: boolean;
// }>(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginRight: -drawerWidth,
//   ...(open && {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginRight: 0,
//   }),
// }));
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


export default function DrawerPersistant() {
  const [listChildren,setListChildren] = React.useState(true)
  // const open = useSelector((state:any) => state.appStates.drawerIsOpen)
  // const firstname = useSelector((state:any) => state.auth.firstname)
  // const lastname = useSelector((state:any) => state.auth.lastname)
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
console.log("token",token);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const logOutUrl = BasrURL + 'api/v1/logout'

  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setOpen(false);
  };
    
  const options = {
    method: 'POST',
    url: logOutUrl,
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  };
  const logOutButton = () =>{

    axios
      .request(options)
      .then(function ({ data }: { data: Response }) {
        console.log(data);
        navigate('/login');
      })
      .catch(function (error: any) {
        console.error(error);
      });  
  } 
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = createTheme({
    direction: "ltr",
    typography: {
      fontFamily:
        'Vazir',
    }
  });
return(
  <ThemeProvider theme={theme}>
  <Box sx={{ flexGrow: 1 }}>
  <CssBaseline />

  <AppBar position="static" className='text'>
      <Container maxWidth="xl" >
        <Toolbar variant="dense" disableGutters sx={{marginLeft:{xl:"-10%"},marginRight:{xl:"-10%"}}} >
          <Box sx={{ flexGrow: 1,display: { xs: 'flex' } }}>
          <IconButton onClick={handleClick} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',

                  }}
                  
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
          

              >
        <MenuItem onClick={handleClose}>
          <div>
            {/* {firstname} {lastname} */}
          </div>
        </MenuItem>
        <MenuItem  sx={{display:'flex',justifyContent:'center'}} onClick={logOutButton}>
          <div >
            خروج
            </div>
        </MenuItem>
       
      </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 0,display: { md: 'flex' } }}>         
          <IconButton
              size="large"
              aria-haspopup="true"
              onClick={handleDrawerOpen}
              color="inherit"
            >
              <StarIcon />
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <StarIcon />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            {drawerData.map((item) => {
            return (
              <SubMenu item={item} key={item.key} />
            )
          })}
        </List>
      </Drawer>
   
    </Box>
    </ThemeProvider>
  );
}
