import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Routes } from './routes';

import { GlobalStyle } from "./styles/global";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
