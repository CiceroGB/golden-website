import styled, { createGlobalStyle } from 'styled-components';

interface IStyle {
    primary?: boolean;
    big?: boolean;
    fontBig?: boolean;
}


export const GlobalStyle = createGlobalStyle`
  * {  
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body { 
  -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
  font-family: 'Source Sans Pro', sans-serif;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
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

  @media screen and (max-width: 994px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button<IStyle>`
    border-radius: 4px;
    background: ${p => p.primary ? '#F9A526' : '#A05E0A'};
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
        background-color: ${p => p.primary? '#A05E0A' : '#F9A526'};
    }

    [disable] {
      opacity: 0.6; 
      cursor: not-allowed; 
    }
   
    @media screen and (max-width: 960px) {
      width: 100%;
    }
`;




