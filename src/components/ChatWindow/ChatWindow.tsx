import React from "react";
import * as S from "./styles";
import { Colors } from "../../constants";

import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";

export const ChatWindow = () => {
  return (
    <S.ChatWindow>
      <S.ChatWindowHeader>
        <S.ChatWindowHeaderInfo>
          <S.ChatWindowHeaderInfoImage
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=""
          />
          <S.ChatWindowHeaderName>Julio Cesar</S.ChatWindowHeaderName>
        </S.ChatWindowHeaderInfo>

        <S.ChatWindowHeaderButtons>
          <S.ChatWindowBtn>
            <SearchIcon style={{ color: Colors.colorIcons }} />
          </S.ChatWindowBtn>
          <S.ChatWindowBtn>
            <AttachFileIcon style={{ color: Colors.colorIcons }} />
          </S.ChatWindowBtn>
          <S.ChatWindowBtn>
            <MoreVertIcon style={{ color: Colors.colorIcons }} />
          </S.ChatWindowBtn>
        </S.ChatWindowHeaderButtons>
      </S.ChatWindowHeader>

      <S.ChatWindowBody></S.ChatWindowBody>

      <S.ChatWindowFooter>
        <S.ChatWindowFooterPre>
          <S.ChatWindowBtn>
            <InsertEmoticonIcon style={{ color: Colors.colorIcons }} />
          </S.ChatWindowBtn>
        </S.ChatWindowFooterPre>

        <S.ChatWindowFooterInputArea>
          <S.ChatWindowFooterInput
            type="text"
            placeholder="Digite uma mensagem"
          />
        </S.ChatWindowFooterInputArea>

        <S.ChatWindowFooterPos>
          <S.ChatWindowBtn>
            <SendIcon style={{ color: Colors.colorIcons }} />
          </S.ChatWindowBtn>
        </S.ChatWindowFooterPos>
      </S.ChatWindowFooter>
    </S.ChatWindow>
  );
};

export default ChatWindow;
