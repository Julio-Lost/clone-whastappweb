import styled from "styled-components";
import { Colors } from "../../../constants";

export const ChatIntro = styled.div`
  background-color: ${Colors.chatIntroBackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-bottom: 6px solid ${Colors.green};
`;

export const ChatIntroImage = styled.img`
  width: 250px;
  height: auto;
`;

export const ChatIntroH1 = styled.h1`
  font-size: 32px;
  color: ${Colors.grayChat};
  font-weight: normal;
  margin-top: 30px;
`;

export const ChatIntroH2 = styled.h2`
  font-size: 14px;
  color: ${Colors.darkGray};
  font-weight: normal;
  margin-top: 20px;
  line-height: 20px;
  text-align: center;
`;
