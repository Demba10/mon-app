import './App.css';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Experiences from './pages/experiences/Experiences';
import Accueil from "./pages/accueil/Accueil";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu"; 

const router = createBrowserRouter([
  {
    path: '/experiences',
    element: <Experiences />
  }, 
  {
    path: '',
    element: <Accueil />
  }
])

function App() {
  return (
    <div>
      <div>
        {/* <Menu /> */}
      </div>
      <div className='topbar'>
        <Header />
      </div>
      <div className='main'>
        <RouterProvider router={router} />
        <div>
          <Footer />
        </div>
      </div>
    </div>
  ) 
}

export default App;
