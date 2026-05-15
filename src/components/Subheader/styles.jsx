import styled from "styled-components";

/* HEADER */
export const Subheaderdiv = styled.div`
 .marquee-container {
  width: 100%; /* Largura total */
  overflow: hidden; /* Esconde o conteúdo que sai da caixa */
  background-color: #161616; /* Fundo estilo painel LED */
  padding: 10px 0;
}

.marquee-text {
  display: inline-block;
  white-space: nowrap;
  color: #ffffff; /* Cor verde estilo LED */
  font-family: monospace;
  font-weight: bold;
  font-size: 20px;
  animation: marquee 120s linear infinite; /* Animação contínua */
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

.marquee-text:hover {
  animation-play-state: paused;
}
`;