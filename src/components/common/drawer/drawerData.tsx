import React from 'react';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import SavingsIcon from '@mui/icons-material/Savings';
import PeopleIcon from '@mui/icons-material/People';
import Face5Icon from '@mui/icons-material/Face5';
import SignalWifiStatusbarNullIcon from '@mui/icons-material/SignalWifiStatusbarNull';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { SidebarItem } from '../../../interface or models/sideBarItems';
export const drawerData:SidebarItem[] = [
  {
    key: '/bank',
    label: 'بانک',
    icon: <SavingsIcon/>,
    

  },
  {
    key: '/login',
    label: 'ورود',
    icon: <Face5Icon/>,

  },
  {
    key: '/users',
    label: 'کاربران',
    icon: <PeopleIcon/>,

  },
  {
    key: '/status',
    label: 'وضعیت',
    icon:<PeopleIcon/>,
    iconOpened: <ExpandLess />,
    iconClosed:<ExpandMore />,
   
    items: [
        {
          key: "/submenu",
          label:'زیر',
          icon: <PeopleIcon />,
            
        }
    ]
},
  {
    key: '/toggle',
    label: 'تغییر زبان',
    icon:<ToggleOffIcon/>,
  },
  
];