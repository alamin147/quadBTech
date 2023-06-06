import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  );
}

export default App;
