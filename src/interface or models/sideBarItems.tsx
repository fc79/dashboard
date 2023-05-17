  export  interface SidebarItem {
    key: string;
    label: string;
    icon: any;
    iconOpened?: any;
    iconClosed?: any;
    items?: SidebarItem[];
}