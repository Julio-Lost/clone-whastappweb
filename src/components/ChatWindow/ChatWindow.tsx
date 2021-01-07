import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";
import { Colors } from "../../constants";

import EmojiPicker, { IEmojiData } from "emoji-picker-react";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { IUser } from "../../models/user";

//import local component
import MessageItem from "../MessageItem/MessageItem";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

interface ChatWindoProps {
  user: IUser;
}

interface ListProps {
  id: number;
  body: string;
}

const options = [
  "Dados do contato",
  "Selecionar mensagens",
  "Silenciar notificações",
  "Limpar mensagens",
  "Apagar conversa",
];

export const ChatWindow = (props: ChatWindoProps) => {
  const [emojiOpen, setEmojiOpen] = useState<boolean>(false);
  const [text, setText] = useState("");
  const [listening, setListening] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [list] = useState<ListProps[]>([
    { id: props.user.id, body: props.user.message },
    { id: 1, body: "bla bla bla" },
    { id: 1, body: props.user.message },
    { id: props.user.id, body: "bla bla bla" },
    { id: 1, body: "bla bla bla" },
    { id: 1, body: props.user.message },
    { id: props.user.id, body: "bla bla bla" },
    { id: 1, body: "bla bla bla" },
    { id: 1, body: props.user.message },
    { id: props.user.id, body: "bla bla bla" },
    { id: 1, body: "bla bla bla" },
    { id: 1, body: props.user.message },
    { id: props.user.id, body: "bla bla bla" },
    { id: 1, body: "bla bla bla" },
    { id: 1, body: props.user.message },
    { id: props.user.id, body: "bla bla bla" },
    { id: 1, body: "bla bla bla" },
    { id: 1, body: props.user.message },
    { id: props.user.id, body: "bla bla bla" },
    { id: 1, body: "bla bla bla" },
    { id: 1, body: props.user.message },
    { id: props.user.id, body: "bla bla bla" },
    { id: 1, body: "bla bla bla" },
    { id: 1, body: props.user.message },
    { id: props.user.id, body: "bla bla bla" },
    { id: 1, body: "bla bla bla" },
    { id: 1, body: props.user.message },
  ]);

  const body = useRef<any>();

  const ITEM_HEIGHT = 48;

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

  let recognition: SpeechRecognition | null = null;

  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
  }

  const handleEmojiClick = (e: any, emojiData: IEmojiData) => {
    setText(text + emojiData.emoji);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMicClick = () => {
    if (recognition) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.onresult = (e: any) => {
        setText(e.results[0][0].transcript);
      };

      recognition.start();
    }
  };

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };

  return (
    <S.ChatWindow>
      <S.ChatWindowHeader>
        <S.ChatWindowHeaderInfo>
          <S.ChatWindowHeaderInfoImage
            src="https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
            alt=""
          />
          <S.ChatWindowHeaderName>John Lennon</S.ChatWindowHeaderName>
        </S.ChatWindowHeaderInfo>

        <S.ChatWindowHeaderButtons>
          <S.ChatWindowBtn>
            <SearchIcon style={{ color: Colors.colorIcons, marginRight: 15 }} />
          </S.ChatWindowBtn>
          <S.ChatWindowBtn onClick={handleClick}>
            <MoreVertIcon style={{ color: Colors.colorIcons }} />
          </S.ChatWindowBtn>
        </S.ChatWindowHeaderButtons>
      </S.ChatWindowHeader>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "25ch",
            marginTop: 35,
          },
        }}
      >
        {" "}
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            style={{ fontSize: 14 }}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

      <S.ChatWindowBody ref={body}>
        {list.map((item, key) => (
          <MessageItem key={key} data={item} user={props.user} />
        ))}
      </S.ChatWindowBody>

      <S.ChatWindowEmojiArea emojiOpen={emojiOpen}>
        <EmojiPicker
          disableSearchBar
          disableSkinTonePicker
          onEmojiClick={handleEmojiClick}
        />
      </S.ChatWindowEmojiArea>

      <S.ChatWindowFooter>
        <S.ChatWindowFooterPre>
          <S.ChatWindowBtn style={{ width: emojiOpen ? "40px" : "0px" }}>
            <CloseIcon
              style={{ color: Colors.colorIcons }}
              onClick={handleCloseEmoji}
            />
          </S.ChatWindowBtn>
          <S.ChatWindowBtn>
            <InsertEmoticonIcon
              style={{
                color: emojiOpen ? Colors.colorSelectIcons : Colors.colorIcons,
                marginRight: 8,
              }}
              onClick={handleOpenEmoji}
            />
            <S.ChatWindowBtn>
              <AttachFileIcon
                style={{
                  color: Colors.colorIcons,
                  transform: "rotate(45deg)",
                }}
              />
            </S.ChatWindowBtn>
          </S.ChatWindowBtn>
        </S.ChatWindowFooterPre>

        <S.ChatWindowFooterInputArea>
          <S.ChatWindowFooterInput
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </S.ChatWindowFooterInputArea>

        <S.ChatWindowFooterPos>
          {!text && (
            <S.ChatWindowBtn onClick={handleMicClick}>
              <MicIcon
                style={{
                  color: listening ? Colors.micActiveColor : Colors.colorIcons,
                }}
              />
            </S.ChatWindowBtn>
          )}

          {text && (
            <S.ChatWindowBtn>
              <SendIcon style={{ color: Colors.colorIcons }} />
            </S.ChatWindowBtn>
          )}
        </S.ChatWindowFooterPos>
      </S.ChatWindowFooter>
    </S.ChatWindow>
  );
};

export default ChatWindow;
