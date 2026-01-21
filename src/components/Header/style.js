import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1a;
  padding: 8px 16px;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  z-index: 997;

  img {
    width: 192px;
    padding: 8px;
  }
`;

export const HeaderTitle = styled.div`
  min-width: 304px;

  h1 {
    font-size: 16px;
    color: #06B2FC;
    font-family: 'Poppins', sans-serif;
  }

  span {
    font-size: 20px;
  }
`;

export const HeaderButton = styled.div`
  display: flex;
  gap: 16px;

  select {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #242424;
    color: rgba(255, 255, 255, 0.87);
    cursor: pointer;
    max-width: 248px;

    &:hover {
      border-color: #646cff;
    }

    &:focus, &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  }
`;