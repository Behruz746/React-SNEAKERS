// Components
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Cards from "./components/Card/Cards";

// Images
import { search } from "./assets/index.js";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const num = 0;

  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-45">
        <div className="d-flex justify-between align-center mb-40">
          <h1 className="content__title">Все кроссовки</h1>
          <div className="search__block d-flex">
            <img src={search} alt="Search" />
            <input type="search" placeholder="Поиск..." />
          </div>
        </div>

        <Cards
          onClickFavorite={() => console.log("Hello")}
          onClickPlus={() => console.log("Hello")}
        />
      </div>
    </div>
  );
}

export default App;
