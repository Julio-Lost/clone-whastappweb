import React from "react";
import { Colors } from "../../constants";
import { IUser } from "../../models/user";
import * as S from "./styles";

interface ListProps {
  id: number;
  body: string;
}

interface MessageItemProps {
  data: ListProps;
  user: IUser;
}

export const MessageItem = (props: MessageItemProps) => {
  return (
    <S.MessageLine
      style={{
        justifyContent:
          props.user.id === props.data.id ? "flex-end" : "flex-start",
      }}
    >
      <S.MessageItem
        style={{
          backgroundColor:
            props.user.id === props.data.id ? Colors.mytextColor : Colors.white,
        }}
      >
        <S.MessageText>{props.data.body}</S.MessageText>
        <S.MessageDate>19:00</S.MessageDate>
      </S.MessageItem>
    </S.MessageLine>
  );
};

export default MessageItem;
