import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { Routes } from './routes';

import { GlobalStyle } from "./styles/global";


function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <Routes />
        <Footer/>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
