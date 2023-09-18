import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

// Components
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";

// Pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [searchVal, setSearchVal] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Fetch short in axios
      const itemsRespons = await axios.get(
        "https://6501e20c736d26322f5c6ebd.mockapi.io/items"
      );
      const cartRespons = await axios.get(
        "https://6501e20c736d26322f5c6ebd.mockapi.io/cart"
      );
      const favoriteRespons = await axios.get(
        "https://6506d69d3a38daf4803ec489.mockapi.io/favorites"
      );

      setCartItems(cartRespons.data);
      setFavorites(favoriteRespons.data);
      setItems(itemsRespons.data);
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((cart) => Number(cart.id) === Number(obj.id))) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
        axios.delete(
          `https://6501e20c736d26322f5c6ebd.mockapi.io/cart/${obj.id}`
        ); // post obj data in beckend server
      } else {
        axios.post("https://6501e20c736d26322f5c6ebd.mockapi.io/cart", obj); // post obj data in beckend server
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      console.error("Error: 404");
    }
  };

  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://6501e20c736d26322f5c6ebd.mockapi.io/cart/${id}`); // delete obj data in beckend server
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onFavorites = async (obj) => {
    try {
      if (favorites.find((fav) => fav.id === obj.id)) {
        axios.delete(
          `https://6506d69d3a38daf4803ec489.mockapi.io/favorites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://6506d69d3a38daf4803ec489.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.error("Error: 404");
    }
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

      <Header onClickCart={() => setCartOpened(true)} cartItems={cartItems} />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchVal={searchVal}
              setSearchVal={setSearchVal}
              onChangeSearchInput={onChangeSearchInput}
              onFavorites={onFavorites}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route
          path="/favorites"
          element={<Favorites items={favorites} onFavorites={onFavorites} />}
        />
      </Routes>
    </div>
  );
}

export default App;
