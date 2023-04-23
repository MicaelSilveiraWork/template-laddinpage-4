/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Inicio",
      icon: <HomeIcon />,
      id: "inicio"
    },
    {
      text: "Sobre",
      icon: <InfoIcon />,
      id: "sobre"
    },
    {
      text: "Avaliações",
      icon: <CommentRoundedIcon />,
      id: "avaliações"
    },
    {
      text: "Contato",
      icon: <PhoneRoundedIcon />,
      id: "contato"
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <nav style={{zIndex: 10000}}>
      <div className="nav-logo-container" style={{zIndex: 10000}}>
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container" style={{zIndex: 10000}}>
        <a href="#inicio">Inicio</a>
        <a href="#sobre">Sobre</a>
        <a href="#avaliações">Avaliações</a>
        <a href="#contato">Contato</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" style={{zIndex: 10000}} />
        </a>
        <button className="primary-button">Reservas agora</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <Link href={`#${item.id}`}>
                    <ListItemText primary={item.text} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
