import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { Navbar } from './Components/Navbar';
import MobileMenu from './Components/MobileMenu';
import MenuIcon from './Components/MenuIcon';
import DesktopMenu from './Components/DesktopMenu';


function App() {

  const width = window.innerWidth;
  const isMobile = (width <= 768);

  return (
    <>
      <ChakraProvider>
        <div>
          <div>
            <Navbar />
          </div>
          <Routes>
            {
              isMobile ?
                <Route exact path='/' element={<MenuIcon />}></Route>
                :
                <Route exact path='/' element={<DesktopMenu />}></Route>
            }
            <Route exact path='/MobileMenu' element={<MobileMenu />}></Route>
          </Routes>
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
