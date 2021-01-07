import ChatIcon from "@material-ui/icons/Chat";
//Material Icons
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import ChatIntro from "./components/ChatIntro/ChatIntro";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

//local components
import ChatListItem from "./components/ChatList/ChatListItem";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import { Colors } from "./constants";
import * as S from "./styles";

const options = [
  "Novo grupo",
  "Criar uma sala",
  "Perfil",
  "Arquivadas",
  "Favoritas",
  "Configurações",
  "Desconectar",
];

export const App = () => {
  const chatList = [
    {
      chatId: 1,
      title: "John Lennon",
      avatar:
        "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
    },
    {
      chatId: 2,
      title: "John Lennon",
      avatar:
        "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
    },
    {
      chatId: 3,
      title: "John Lennon",
      avatar:
        "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
    },
    {
      chatId: 4,
      title: "John Lennon",
      avatar:
        "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
    },
    {
      chatId: 5,
      title: "John Lennon",
      avatar:
        "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
    },
    {
      chatId: 6,
      title: "John Lennon",
      avatar:
        "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
    },
    {
      chatId: 7,
      title: "John Lennon",
      avatar:
        "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
    },
    {
      chatId: 8,
      title: "John Lennon",
      avatar:
        "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
    },
    {
      chatId: 9,
      title: "John Lennon",
      avatar:
        "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
    },
    {
      chatId: 10,
      title: "John Lennon",
      avatar:
        "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
    },
    {
      chatId: 11,
      title: "John Lennon",
      avatar:
        "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
    },
    {
      chatId: 12,
      title: "John Lennon",
      avatar:
        "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
    },
  ];

  const [activeChat, setActiveChat] = useState<any>({});
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const ITEM_HEIGHT = 60;

  const user = {
    id: 1234,
    avatar:
      "https://avatars1.githubusercontent.com/u/53799397?s=460&u=8a2305f532ec15d5538062ae9629db0d3514ee5c&v=4",
    name: "Julio Cesar",
    message: "bla bla bla",
    messageReceived: "bla bla",
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <S.AppWindow>
      <S.SideBar>
        <S.Header>
          <S.HeaderAvatar src={user.avatar} alt="" />
          <S.HeaderButton>
            <S.HeaderBtn>
              <DonutLargeIcon style={{ color: Colors.colorIcons }} />
            </S.HeaderBtn>
            <S.HeaderBtn>
              <ChatIcon style={{ color: Colors.colorIcons }} />
            </S.HeaderBtn>
            <S.HeaderBtn onClick={handleClick}>
              <MoreVertIcon style={{ color: Colors.colorIcons }} />
            </S.HeaderBtn>
          </S.HeaderButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "15ch",
                marginTop: 35,
              },
            }}
          >
            {" "}
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                style={{ fontSize: 14 }}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </S.Header>

        <S.Search>
          <S.SearchInput>
            <SearchIcon fontSize="small" style={{ color: Colors.colorIcons }} />
            <S.InputSearch
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </S.SearchInput>
        </S.Search>
        <S.ChatList>
          {chatList.map((item: any, key: any) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={() => setActiveChat(chatList[key])}
            />
          ))}
        </S.ChatList>
      </S.SideBar>
      <S.ContentArea>
        {activeChat.chatId !== undefined && <ChatWindow user={user} />}
        {activeChat.chatId === undefined && <ChatIntro />}
      </S.ContentArea>
    </S.AppWindow>
  );
};

export default App;
