import React from "react";
import * as S from "./styles";

export const ChatIntro = () => {
  return (
    <S.ChatIntro>
      <S.ChatIntroImage
        src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg"
        alt=""
      />
      <S.ChatIntroH1>Mantenha seu celular conectado</S.ChatIntroH1>
      <S.ChatIntroH2>
        O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para
        reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi
      </S.ChatIntroH2>
    </S.ChatIntro>
  );
};

export default ChatIntro;
