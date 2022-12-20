import React, { useEffect, useState } from "react";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
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
  FormControl,
  InputLabel,
  InputBase,
  TextField,
  Dialog,
} from "@mui/material";
import addImg from "./imgPageChildren/addImg.svg";
import { Form, Link } from "react-router-dom";
import FormSucess from "./FormSucess";
import axios from "axios";
const S_OverChildren = styled(Box)({
  padding: `10px 40px`,
  // height: `1023px`,
  background: "#fff",
  margin: `auto`,
});
const S_InputInfor = styled(Box)({
  display: `flex`,
  //   alignItems: "center",
  flexDirection: "column",
});
/* CSS input */
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& lable": { position: `initial` },
  "label + &": {
    marginTop: theme.spacing(3),
  },

  "& .MuiInputBase-input": {
    marginTop: `8px`,
    marginBottom: "16px",
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#fff",
    border: "1px solid #EBEAED",
    fontSize: 16,
    color: "##141416",
    fontWeight: 600,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
  },
}));
const S_inputSelect = styled(TextField)({
  marginLeft: `12px`,
  marginTop: `8px`,
  marginBottom: "16px",
  background: `#fff`,
  borderRadius: `4px`,
  // padding: "20px",
  // width: `94px`,
  // height: `43px`,
});
const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const PostChildren: React.FC<any> = () => {
  interface typePost {
    id: String;
    imgTittle: String;
    contentTittle: String;
    releaseDate: String;
    view: Number;
    status: String;
    userID: String;
  }
  const [inforCreat, setInforCreat] = useState<typePost>({
    id: "",
    imgTittle: "",
    contentTittle: "",
    releaseDate: "",
    view: 300,
    status: "ONLINE",
    userID: "QuanID",
  });
  const [currency, setCurrency] = useState<any>("EUR");
  const [location, setLocation] = useState<any>("Sydney");
  const [address, setAddress] = useState<any>("Crawford Room, Mortlock ....");
  //submit form | Creat Post
  const creatPost = async (e: any) => {
    e.preventDefault();
    const date = new Date();
    try {
      const res = await axios.post("http://localhost:5000/post/creatpost", {
        ...inforCreat,
        releaseDate: `${date.getHours()}:${date.getMinutes()}  ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      });
      console.log("success");
    } catch (error) {
      console.log(error, "LOI CON ME NO ROI");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
    setInforCreat({
      ...inforCreat,
      [event.target.name]: event.target.value,
      imgTittle: urlImg,
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    // creatPost();
    setOpen(true);
  };
  const [urlImg, seturlImg] = useState("");
  const handleImage = (e: any) => {
    var file = e.target.files;
    seturlImg(URL.createObjectURL(file[0]));
  };
  useEffect(() => {
    setInforCreat({
      ...inforCreat,
      imgTittle: urlImg,
    });
  }, [urlImg]);
  return (
    <Box
      style={{
        justifyContent: `center`,
        // display: "none",
      }}
    >
      <S_OverChildren>
        <form onSubmit={creatPost}>
          <Typography
            style={{ fontWeight: `600`, marginBottom: `20px` }}
            variant="h4"
          >
            Add new post
          </Typography>
          <S_InputInfor>
            <Typography style={{ fontWeight: `600`, fontSize: `18px` }}>
              Post Information
            </Typography>
            <FormControl variant="standard">
              <Typography variant="h6">Tittle</Typography>
              <BootstrapInput
                defaultValue={inforCreat.contentTittle}
                onChange={handleChange}
                name="contentTittle"
                id="bootstrap-input"
              />
            </FormControl>
            <FormControl variant="standard">
              <Box
                component="form"
                sx={{
                  padding: "0",
                  "& .MuiTextField-root": {
                    width: "10ch",
                  },
                  "& select": {
                    padding: `10px`,
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <Typography variant="h6">Raising</Typography>
                <div
                  style={{
                    display: `flex`,
                    alignItems: `center`,
                  }}
                >
                  <BootstrapInput
                    sx={{ width: "85%" }}
                    defaultValue="1000"
                    id="bootstrap-input"
                  />
                  <S_inputSelect
                    id="filled-select-currency-native"
                    select
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.value}
                      </option>
                    ))}
                  </S_inputSelect>
                </div>
              </Box>
            </FormControl>
            <FormControl variant="standard">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    width: "25ch",
                  },
                  "& select": {
                    padding: `10px`,
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <Typography variant="h6">Location</Typography>
                <Typography
                  style={{ position: `absolute`, top: `0px`, left: `51%` }}
                  variant="h6"
                >
                  Location
                </Typography>
                <div>
                  <S_inputSelect
                    style={{ marginLeft: "0" }}
                    id="filled-select-currency-native"
                    select
                    value={location}
                    onChange={handleChange}
                    SelectProps={{
                      native: true,
                    }}

                    // variant="filled"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </S_inputSelect>
                  <S_inputSelect
                    id="filled-select-currency-native"
                    select
                    value={address}
                    onChange={handleChange}
                    SelectProps={{
                      native: true,
                    }}

                    // variant="filled"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.value}
                      </option>
                    ))}
                  </S_inputSelect>
                </div>
              </Box>
            </FormControl>
            <Box>
              <Typography variant="h5">Media</Typography>
              <label style={{ marginTop: `20px` }} htmlFor="inputFile">
                <img
                  style={{ maxWidth: `160px`, maxHeight: `160px` }}
                  src={urlImg ? urlImg : addImg}
                />
              </label>
              <input
                style={{ display: "none" }}
                accept="image/*"
                id="inputFile"
                type="file"
                onChange={(e) => {
                  handleImage(e);
                }}
              />
            </Box>
            <Button
              style={{ marginTop: `20px` }}
              size="large"
              color="success"
              variant="contained"
              type="submit"
              onClick={handleClickOpen}
            >
              Creat new post
            </Button>
          </S_InputInfor>
        </form>
      </S_OverChildren>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {<FormSucess open={open} />}
      </Dialog>
    </Box>
  );
};

export default PostChildren;
