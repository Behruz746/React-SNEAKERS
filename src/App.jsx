import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

// Components
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Cards from "./components/Card/Cards";

// Images
import { search } from "./assets/index.js";
import { useEffect } from "react";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://6501e20c736d26322f5c6ebd.mockapi.io/items")
      .then((data) => data.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-45">
        <div className="d-flex justify-between align-center mb-40">
          <h1 className="content__title">Все кроссовки</h1>
          <div className="search__block d-flex">
            <img src={search} alt="Search" />
            <input type="search" placeholder="Поиск..." />
          </div>
        </div>

        <div className="Cards">
          {items.map((data) => (
            <Cards
              title={data.name}
              price={data.price}
              image={data.image}
              key={uuidv4()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
