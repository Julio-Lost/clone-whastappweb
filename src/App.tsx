import React from "react";
import * as S from "./styles";
import { Colors } from "./constants";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

export const App = () => {
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
        <S.ChatList>...</S.ChatList>
      </S.SideBar>
      <S.ContentArea>...</S.ContentArea>
    </S.AppWindow>
  );
};

export default App;
