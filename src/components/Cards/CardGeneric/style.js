import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ temaOferta }) =>
    temaOferta === 'vermelho' ? '#FF4F43' : '#07B2FD'};
  border-radius: 16px;
  color: #ffffff;
  padding: 12px 16px;
  height: 132px;
  width: 265px;
  box-sizing: border-box;
  text-align: left;
  position: relative;

  h1 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    width: 90%;
    margin: 0;

    //https://dev.to/geovrodri/dica-css-limitar-tamanho-de-um-texto-32m9
    display: -webkit-box;
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    -webkit-line-clamp: 3; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }

  h2 {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.2;
    width: 90%;
    margin: 4px 0 0 0;

    display: -webkit-box;
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }

  div {
    p {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #ffffff;
      font-weight: 500;
      height: 28px;
      width: 190px;
      margin: 0;
      position: absolute;
      bottom: 8px;
    }

    img {
      height: 28px;
      width: 28px;
      margin-bottom: 0;
      position: absolute;
      bottom: 8px;
      right: 16px;
    }
  }
`;