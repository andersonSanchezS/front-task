import { InboxOutlined, MailOutlineOutlined } from '@mui/icons-material'
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material'
import { useContext } from 'react'
import { UIContext } from '../../context/UIContext'
import PerfectScrollbar from 'react-perfect-scrollbar'

const menuItems: string[] = [
    'Home',
    'About',
    'Contact',
    'inbox',
    'starred',
    'drafts'
]
export const SideBar = () => {
    const { sideMenuOpen, closeSideMenu } = useContext(UIContext)

    return (
        <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>
            <PerfectScrollbar>
                <Box sx={{ width: 250 }}>
                    <Box sx={{ padding: '5px 10px' }}>
                        <Typography variant="h4">Menu</Typography>
                    </Box>
                    <Divider />
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem key={item}>
                                <ListItemIcon>
                                    {index % 2 ? (
                                        <InboxOutlined />
                                    ) : (
                                        <MailOutlineOutlined />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem key={item}>
                                <ListItemIcon>
                                    {index % 2 ? (
                                        <InboxOutlined />
                                    ) : (
                                        <MailOutlineOutlined />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem key={item}>
                                <ListItemIcon>
                                    {index % 2 ? (
                                        <InboxOutlined />
                                    ) : (
                                        <MailOutlineOutlined />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </PerfectScrollbar>
        </Drawer>
    )
}
