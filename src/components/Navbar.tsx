import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  AppBar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Box from "@mui/material/Box";
import Link from "../Link";

const drawerWidth = 260;

interface MenuItem {
  name: string;
  url: string;
  icon: JSX.Element;
}

export default function Navbar() {
  const menuItems: MenuItem[] = [
    {
      name: "test",
      url: "/about",
      icon: <InboxIcon />,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <AppBar
        position='fixed'
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Toolbar />
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton LinkComponent={Link} href={item.url}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
