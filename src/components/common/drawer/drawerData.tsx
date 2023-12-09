import React from 'react';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import SavingsIcon from '@mui/icons-material/Savings';
import PeopleIcon from '@mui/icons-material/People';
import Face5Icon from '@mui/icons-material/Face5';
import SignalWifiStatusbarNullIcon from '@mui/icons-material/SignalWifiStatusbarNull';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { SidebarItem } from '../../../interface or models/sideBarItems';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
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
    icon:<BubbleChartIcon />,
    iconOpened: <ExpandLess />,
    iconClosed:<ExpandMore />,
   
    items: [
        {
          key: "/submenu",
          label:'کامپوننت‌ها',
          icon: <DragIndicatorIcon />,
            
        }
    ]
},
  {
    key: '/toggle',
    label: 'تغییر زبان',
    icon:<ToggleOffIcon/>,
  },
  {
    key: '/big-table',
    label: 'جدول',
    icon:<TableRowsIcon/>,
  },
  
];