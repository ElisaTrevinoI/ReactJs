import './App.css';
import logo from './logo.jpg';


//Components

import { NavBar } from './NavBar/NavBar';
import { CartWidget } from './CartWidget/CartWidget';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';



export const App = () => {
  return (
    <div className="grilla">
      <header>
        <a href="index.html">
          <img width={180} height={195} src={logo} alt="imagenLogo" />
        </a>
        <h1 className="encabezado1">TODO PARA TEJER</h1>
        <div>
        </div>
        <div>
        </div>

      </header>

      <NavBar />
      <ItemListContainer greeting={"Mensaje"} />


    </div>

  );
}

