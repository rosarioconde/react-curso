import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = ()=> {
  const nombre = "Rosario";
  const apellido = "Conde";
  const edad = 32;

  return (
    <div>
      <Header />
      <p>React es la onda</p>
      <p>{nombre} {apellido} </p>
      <Footer></Footer>
    </div>
  );
}

export default App;
