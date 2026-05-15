import styled from "styled-components";

export const Section1div = styled.section`
  display: flex;
  align-items: center; /* 🔥 melhor alinhamento vertical */
  justify-content: center; /* 🔥 centraliza melhor */
  gap: 260px; /* espaço equilibrado */
  margin-bottom: 100px;

  background: transparent;
  padding: 0;

  &.reverse {
    flex-direction: row-reverse;
  }

  /* TEXTO */
  .text {
    max-width: 520px;
  }

  .text h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .text p {
    font-size: 20px; /* 🔥 diminuí um pouco (tava gigante) */
    line-height: 1.7;
    color: #333;
  }

  /* IMAGEM PRINCIPAL */
  img {
    width: 420px;
    border-radius: 18px;
    object-fit: cover;

    /* 🔥 puxa menos pra direita (antes tava exagerado) */
    transform: translateX(10px);
  }

  /* GRID DE IMAGENS */
  .images-grid {
    position: relative;
    width: 520px;
    height: 480px;
  }

  /* CUME2 */
  .images-grid img:first-child {
    width: 300px;
    border-radius: 18px;
    position: relative;
    z-index: 2;

    /* 🔥 menos exagero */
    transform: translateX(-40px) translateY(-20px);
  }

  /* CUME3 */
  .images-grid img:last-child {
    width: 520px;
    border-radius: 18px;
    position: absolute;
    top: 40px;
    left: -30px;
    z-index: 1;
  }

  /* RESPONSIVO */
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;

    &.reverse {
      flex-direction: column;
    }

    img {
      width: 100%;
      transform: none;
    }

    .images-grid {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .images-grid img,
    .images-grid img:last-child {
      position: relative;
      width: 100%;
      top: 0;
      left: 0;
      transform: none;
    }
  }
`;