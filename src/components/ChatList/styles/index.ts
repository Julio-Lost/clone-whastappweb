import styled from "styled-components";
import { Colors } from "../../../constants";

export const ChatListItem = styled.div<{ active: boolean }>`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 70px;
  background-color: ${(props) => props.active && Colors.chatListActiveChat};

  &:hover {
    background-color: ${Colors.hoverChatList};
  }
`;

export const ChatListItemAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 15px;
`;

export const ChatListItemLines = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #eee;
  padding-right: 15px;
  margin-left: 15px;

  flex-wrap: wrap;
  min-width: 0;
`;

export const ChatLisItemtLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ChatListItemName = styled.div`
  font-size: 17px;
  color: #000;
`;

export const ChatListItemDate = styled.div`
  font-size: 12px;
  color: #999;
`;

export const ChatListItemLastMsg = styled.div`
  font-size: 14px;
  color: #999;
  display: flex;
  width: 100%;
`;

export const ChatListItemLastMsgP = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
`;
