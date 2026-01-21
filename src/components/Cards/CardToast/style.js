import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ temaOferta }) =>
    temaOferta === 'red' ? '#FF4F43' : '#07B2FD'};
  border-radius: 16px;
  padding: 12px 18px;
  height: 285px;
  width: 265px;
  box-sizing: border-box;
  text-align: left;
  position: relative;
`;

export const X = styled.div`
  color: #ffffff;
  text-align: right;
  height: 24px;
  font-weight: bold;
  user-select: none;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 28px;
    width: 28px;
    margin-bottom: 0;
  }

  h1 {
    font-size: 18px;
    font-weight: 800;
    line-height: 1.2;
    color: #000;
    margin-bottom: 0;

    //https://dev.to/geovrodri/dica-css-limitar-tamanho-de-um-texto-32m9
    display: -webkit-box;
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }

  p {
    color: #ffffff;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 0;
    line-height: 1.3;

    display: -webkit-box;
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    -webkit-line-clamp: 4; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }

  div {
    background-color: #ffffff;
    border-radius: 24px;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    padding: 16px 2px;
    width: 60%;
    color: #000;
    position: absolute;
    bottom: 16px;
  }
`;