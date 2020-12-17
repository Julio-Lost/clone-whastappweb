import React from "react";
import * as S from "./styles";

export const ChatLisItem = () => {
  return (
    <S.ChatListItem>
      <S.ChatListItemAvatar
        src="https://www.w3schools.com/howto/img_avatar2.png"
        alt=""
      />
      <S.ChatListItemLines>
        <S.ChatLisItemtLine>
          <S.ChatListItemName>Julio Cesar</S.ChatListItemName>
          <S.ChatListItemDate>19:00</S.ChatListItemDate>
        </S.ChatLisItemtLine>
        <S.ChatLisItemtLine>
          <S.ChatListItemLastMsg>
            <S.ChatListItemLastMsgP>Opa, tudo bem?</S.ChatListItemLastMsgP>
          </S.ChatListItemLastMsg>
        </S.ChatLisItemtLine>
      </S.ChatListItemLines>
    </S.ChatListItem>
  );
};

export default ChatLisItem;
