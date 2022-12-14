import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  styled,
  Avatar,
  Button,
} from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import React, { useState, useEffect, useRef } from "react";
import logomain from "../../img/imgMain/logoMain.png";
import document from "../../img/imgMain/document.png";
import documentShow from "../../img/ImgCurrent/documentShow.png";
import hand from "../../img/imgMain/hand.png";
import handShow from "../../img/ImgCurrent/handShow.png";
import location from "../../img/imgMain/location.png";
import locationShow from "../../img/ImgCurrent/locationShow.png";
import Vector from "../../img/imgMain/Vector.png";
import VectorShow from "../../img/ImgCurrent/VectorShow.png";
import search from "../../img/imgMain/search.png";
import avatar from "../../img/imgMain/Avatar.png";
import payment from "../../img/imgMain/payment.png";
import paymentShow from "../../img/ImgCurrent/paymentShow.png";
import Post_man from "../Home/Post_manager";
import Overview from "../Home/Overview";
import OverviewChildren from "../pageChildren/PostChildren";
import { useNavigate, NavLink } from "react-router-dom";
const Home: React.FC<any> = ({ children }) => {
  const [show, setShow] = useState(0);
  const arrayIcon = [Vector, document, location, hand, payment];
  const arrayIconShow = [
    VectorShow,
    documentShow,
    locationShow,
    handShow,
    paymentShow,
  ];
  const drawerWidth = 240;
  const S_inputSearch = styled(Box)({
    position: `relative`,
    width: `517px`,
    height: `56px`,
    background: `#F4F5F6`,
    borderRadius: `4px`,
    marginLeft: `80px`,
    display: `flex`,
    alignItems: `center`,
    padding: `20px`,
    "& .iconSearch": {
      width: `35px`,
    },
  });
  const S_toolBar = styled(Toolbar)({
    padding: `18px 28px`,
    display: `flex`,
    alignItems: `center`,

    // justifyContent: `space-between`,
  });
  const S_textLeft = styled(ListItemText)({
    "& .css-10hburv-MuiTypography-root": {
      fontWeight: `700`,
    },
  });

  const S_NavLink = styled(NavLink)({
    textDecoration: "none",

    display: "block",
    width: "100%",
    height: "100%",
  });
  const navigate = useNavigate();

  let activeStyle = {
    color: "green",
    background: "green",
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        style={{ background: `#fff`, marginBottom: `30px` }}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <S_toolBar>
          <img style={{ width: `168px` }} src={logomain} alt="" />
          <S_inputSearch placeholder="Search a post">
            <img className="iconSearch" src={search} alt="" />
          </S_inputSearch>
          <Avatar
            src={avatar}
            sx={{
              width: `60px`,
              height: `60px`,
              position: `absolute`,
              right: `30px`,
            }}
          />
        </S_toolBar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: `60px`,
            maxHeight: `700px`,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar></Toolbar>

        <List>
          {["Overview", "Post_manager", "Location", "Reward", "Payment"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                {/* shet cai hien ra  */}
                <ListItemButton>
                  <S_NavLink
                    // onClick={() => {
                    //   setShow(index);
                    // }}
                    to={`/${text.toLowerCase()}`}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    <ListItemButton>
                      <ListItemIcon
                        style={{ minWidth: `18px`, marginRight: `10px` }}
                      >
                        <img
                          className="cssIMG"
                          style={{ width: `18px` }}
                          src={
                            show == index
                              ? arrayIconShow[index]
                              : arrayIcon[index]
                          }
                        />
                      </ListItemIcon>
                      <S_textLeft
                        primary={text}
                        // sx={show == index ? { color: "green" } : null}
                      />
                    </ListItemButton>
                  </S_NavLink>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      {children}
    </Box>
  );
};

export default Home;
