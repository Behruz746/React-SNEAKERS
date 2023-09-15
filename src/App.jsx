import { v4 as uuidv4 } from "uuid";
import { useState, Fragment } from "react";

// Components
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Cards from "./components/Card/Cards";

// Images
import { search, remove_btn } from "./assets/index.js";
import { useEffect } from "react";

function App() {
  const [searchVal, setSearchVal] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  const onAddToCart = (obj) => {
    console.log(obj);

    if (!cartItems.includes(obj)) {
      setCartItems((prev) => [...prev, obj]); // reactda push qilish
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchVal(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer onClose={() => setCartOpened(false)} cartItems={cartItems} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-45">
        <div className="d-flex justify-between align-center mb-40">
          <h1 className="content__title">
            {searchVal ? `Поиск по запросу: "${searchVal}"` : "Все кроссовки"}
          </h1>
          <div className="search__block d-flex">
            <img src={search} alt="Search" />
            {searchVal && (
              <img
                width={32}
                height={32}
                src={remove_btn}
                alt="Remove btn"
                className="cu-p clear"
                onClick={()=> setSearchVal('')}
              />
            )}

            <input
              onChange={onChangeSearchInput}
              type="text"
              placeholder="Поиск..."
              value={searchVal}
            />
          </div>
        </div>

        <div className="Cards">
          {items.map((data, index) => (
            <Cards
              key={index} // key is Error
              title={data.name}
              price={data.price}
              image={data.image}
              onPlus={(item) => onAddToCart(data)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
