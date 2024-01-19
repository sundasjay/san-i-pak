import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import Topbar from "./Topbar";

interface Props {
  window?: () => Window;
  drawerWidth: number;
}

type MenuItem = {
  name: string;
  url: string;
  icon: JSX.Element;
};

export default function Navbar(props: Props) {
  const { window } = props;
  const drawerWidth = props.drawerWidth;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const menuItems: MenuItem[] = [
    {
      name: "Dashboard",
      url: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      name: "BI records",
      url: "/birecords",
      icon: <AssignmentOutlinedIcon />,
    },
    {
      name: "Accounting",
      url: "/accounting",
      icon: <ReceiptLongOutlinedIcon />,
    },
    {
      name: "Documents",
      url: "/documents",
      icon: <TopicOutlinedIcon />,
    },
    {
      name: "Training Material",
      url: "/trainingmaterial",
      icon: <OndemandVideoOutlinedIcon />,
    },
    {
      name: "Service",
      url: "/service",
      icon: <SettingsSuggestOutlinedIcon />,
    },
    {
      name: "Get Help",
      url: "/gethelp",
      icon: <SupportAgentOutlinedIcon />,
    },
  ];

  const drawer = (
    <Box component='div' sx={{ textAlign: "center" }}>
      <Box component='div' sx={{ padding: "16px 0 0" }}>
        <img src='images/logo.png' height={38} />
      </Box>
      <List sx={{ textAlign: "center", padding: "25px 0" }}>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box component='div'>
        <Button color='error' variant='contained'>
          Request Service/Visit
        </Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Topbar
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
