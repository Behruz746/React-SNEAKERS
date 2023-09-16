import { v4 as uuidv4 } from "uuid";
import { useState, Fragment } from "react";
import axios from "axios";

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
  const [favorites, setFavorites] = useState([]);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
      axios.get("https://6501e20c736d26322f5c6ebd.mockapi.io/items").then((res)=> { // Fetch short in axios
        console.log(res.data);
        setItems(res.data);
      })

      axios.get("https://6501e20c736d26322f5c6ebd.mockapi.io/cart").then((res)=> { // Fetch short in axios
        console.log(res.data);
        setCartItems(res.data);
      })
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://6501e20c736d26322f5c6ebd.mockapi.io/cart", obj); // post obj data in beckend server
    if (!cartItems.includes(obj)) {
      setCartItems((prev) => [...prev, obj]); // reactda push qilish
    }
  };

  const onRemoveItem = (id)=> {
    console.log(id);
    axios.delete(`https://6501e20c736d26322f5c6ebd.mockapi.io/cart/${id}`); // delete obj data in beckend server
    setCartItems((prev) => prev.filter((item)=> item.id !== id));
  };

  const onFavorites = (obj) => {
    axios.post("https://serverfavorites.free.mockoapp.net/like", obj); // post obj data in beckend server
    setFavorites((prev) => [...prev, obj]); // reactda push qilish
  };

  const onChangeSearchInput = (event) => {
    setSearchVal(event.target.value); // search value
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onClose={() => setCartOpened(false)}
          cartItems={cartItems}
          searchVal={searchVal}
          onRemove={onRemoveItem}
        />
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
                onClick={() => setSearchVal("")}
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
          <>
            {items
              .filter((data) =>
                data.name
                  .toLocaleLowerCase()
                  .includes(searchVal.toLocaleLowerCase())
              )

              .map((data, index) => (
                <Cards
                  key={index}
                  name={data.name}
                  price={data.price}
                  image={data.image}
                  onFavorite={(item)=> onFavorites(data)}
                  onPlus={(item) => onAddToCart(data)}
                />
              ))}
          </>
        </div>
      </div>
    </div>
  );
}

export default App;
