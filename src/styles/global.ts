import styled, { createGlobalStyle } from 'styled-components';

interface IStyle {
    primary?: boolean;
    big?: boolean;
    fontBig?: boolean;
}


export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button<IStyle>`
    border-radius: 4px;
    background: ${p => p.primary ? '#4B59F7' : '#0467FB'};
    white-space: nowrap;
    padding: ${p => p.big ? '12px 64px' : '10px 20px'};
    color: #fff;
    font-size: ${p=> p.fontBig ? '20px' : '16px'};
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-out;

    &:hover {    
        background: #fff;
        background-color: ${p => p.primary? '#0467FB' : '#4B59F7'};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;




