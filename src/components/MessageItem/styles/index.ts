import styled from "styled-components";
import { Colors } from "../../../constants";

export const MessageLine = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

export const MessageItem = styled.div`
  background-color: ${Colors.white};
  border-radius: 10px;
  box-shadow: 0 1px 1px ${Colors.grayChatWindow};
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 90%;
`;

export const MessageText = styled.div`
  font-size: 14px;
  margin: 5px 40px 5px 5px;
`;

export const MessageDate = styled.div`
  font-size: 11px;
  color: ${Colors.grayChatList};
  margin-right: 5px;
  text-align: right;
  height: 15px;
  margin-top: -15px;
`;
