import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarItem } from '../../../interface or models/sideBarItems';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import "../../../assets/styles/css/drawerList.css"

type SidebarLinkProps = {
    item: SidebarItem;
};

const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding: 2rem;
    text-decoration: none;

    &:hover {
        background-color: rgb(192, 192, 239);
        border-left: 4px solid #6d44dc;
    }
`    ;


const DropdownLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding-left: 3rem;
    text-decoration: none;
    color: black;

    &:hover {
        background-color: rgb(192, 192, 239);
    }
`;

const SubMenu: FC<SidebarLinkProps> = ({ item}) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
    const location = useLocation();

    return (
        <>
        <List  className='drawer-list' className={
                  item.key === location.pathname ? styles['menu-items'] : ''} component="div" disablePadding onClick={showSubnav}>
          <ListItemButton >
            
            <ListItemIcon>
                {item.icon}
            </ListItemIcon>
            <ListItemText>
                {item.label}
            </ListItemText>
            <div>{item?.items && subnav ? item?.iconOpened : item?.iconClosed}</div>

          </ListItemButton>

        </List>
        {subnav &&
            item?.items?.map((subnavItem, index) => {
                return (
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                          {subnavItem.icon}
                      </ListItemIcon>
                      <ListItemText>
                          {subnavItem.label}
                      </ListItemText>
                    </ListItemButton>
          
                  </List>   
                );
             


            })}
    </>

    );
};

export default SubMenu;