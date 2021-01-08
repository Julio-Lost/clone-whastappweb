import React from "react";
import { IChatList } from "../../models/chatList";
import * as S from "./styles";

interface ChatListItemProps {
  onClick: () => void;
  active: boolean;
  data: IChatList;
}

export const ChatLisItem = ({ onClick, active, data }: ChatListItemProps) => {
  return (
    <S.ChatListItem onClick={onClick} active={active}>
      <S.ChatListItemAvatar src={data.avatar} alt="" />
      <S.ChatListItemLines>
        <S.ChatLisItemtLine>
          <S.ChatListItemName>{data.title}</S.ChatListItemName>
          <S.ChatListItemDate>19:00</S.ChatListItemDate>
        </S.ChatLisItemtLine>
        <S.ChatLisItemtLine>
          <S.ChatListItemLastMsg>
            <S.ChatListItemLastMsgP>bla bla bla</S.ChatListItemLastMsgP>
          </S.ChatListItemLastMsg>
        </S.ChatLisItemtLine>
      </S.ChatListItemLines>
    </S.ChatListItem>
  );
};

export default ChatLisItem;
