import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { Colors } from "./constants";

//local components
import ChatListItem from "./components/ChatList/ChatListItem";
import ChatIntro from "./components/ChatIntro/ChatIntro";
import ChatWindow from "./components/ChatWindow/ChatWindow";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

export const App = () => {
  const [chatList, setChatList] = useState<any>([
    {
      chatId: 1,
      title: "fulano de tal1",
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
    },
    {
      chatId: 2,
      title: "fulano de tal2",
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
    },
    {
      chatId: 3,
      title: "fulano de tal3",
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
    },
    {
      chatId: 4,
      title: "fulano de tal4",
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
    },
  ]);
  const [activeChat, setActiveChat] = useState<any>({});

  return (
    <S.AppWindow>
      <S.SideBar>
        <S.Header>
          <S.HeaderAvatar
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=""
          />
          <S.HeaderButton>
            <S.HeaderBtn>
              <DonutLargeIcon style={{ color: Colors.colorIcons }} />
            </S.HeaderBtn>
            <S.HeaderBtn>
              <ChatIcon style={{ color: Colors.colorIcons }} />
            </S.HeaderBtn>
            <S.HeaderBtn>
              <MoreVertIcon style={{ color: Colors.colorIcons }} />
            </S.HeaderBtn>
          </S.HeaderButton>
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
        {activeChat.chatId !== undefined && <ChatWindow />}
        {activeChat.chatId === undefined && <ChatIntro />}
      </S.ContentArea>
    </S.AppWindow>
  );
};

export default App;
