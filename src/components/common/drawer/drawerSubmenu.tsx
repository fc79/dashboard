import React, { FC, useState } from 'react';
import { SidebarItem } from '../../../interface or models/sideBarItems';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

type SidebarLinkProps = {
    item: SidebarItem;
};

const SubMenu: FC<SidebarLinkProps> = ({ item}) => {
    const [subnav, setSubnav] = useState(false);
    const [selected, setSelected] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
    const location = useLocation();
    const navigate = useNavigate();
    const onItemClick = (event:any) =>{
        if(event !== "/status")
        {
            navigate(event);
            setSelected(!selected)
        }


    } 
    return (
        <>
        <List  className="parent-list" component="div" disablePadding >
            <ListItem disablePadding onClick={(e)=> onItemClick(item.key)} className={
                  item.key === location.pathname ? "item-selected": '' } >
          <ListItemButton className="list-items" onClick={showSubnav}>
            <div>{item?.items && subnav ? item?.iconOpened : item?.iconClosed}</div>
            <ListItemText primaryTypographyProps={{fontSize: '18px'}} 
             className='list-item-text' >
                {item.label}
            </ListItemText>
            <ListItemIcon className='list-item-icon'>
                {item.icon}
            </ListItemIcon>
          </ListItemButton>
          </ListItem>
          {subnav &&
            item?.items?.map((subnavItem, index) => {
                return (
                    <ListItem sx={{display:"flex", justifyContent:"space-between", pl:0}} onClick={(e)=>onItemClick(subnavItem.key)}  >
                    <ListItemButton >
                        <ListItemText primaryTypographyProps={{fontSize: '16px'}}  sx={{pl:7}} className={
                        subnavItem.key === location.pathname ? "item-selected": `${subnavItem.key}` }>
                          {subnavItem.label}
                      </ListItemText>
                      <ListItemIcon sx={{pl:5}}>
                          {subnavItem.icon}
                      </ListItemIcon>
                      
                    </ListItemButton>
                    </ListItem>
          
                );

            })}
        </List>
   
    </>

    );
};

export default SubMenu;