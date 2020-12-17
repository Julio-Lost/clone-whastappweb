import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "./constants";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
 }
body {
    margin: 0;
    background-color: ${Colors.backgroundColorBody};
    font-family: 'Segoe UI', Arial, Helvetica Neue, Helvetica, Lucida Grande
  }
`;

export const AppWindow = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${Colors.backgroundColorAppWindow};
`;

export const SideBar = styled.div`
  width: 35%;
  max-width: 415px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
`;

export const ContentArea = styled.div``;

export const Header = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const ChatList = styled.div`
  flex: 1;
  background-color: #fff;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const HeaderAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
`;

export const HeaderButton = styled.div`
  display: flex;
`;

export const HeaderBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Search = styled.div`
  background-color: ${Colors.backgroundColorSearch};
  border-bottom: 1px solid #eee;
  padding: 5px 15px;
`;

export const SearchInput = styled.div`
  background-color: ${Colors.white};
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;
export const InputSearch = styled.input`
  flex: 1;
  border: 0;
  outline: 0;
  background-color: transparent;
  margin-left: 10px;
`;
