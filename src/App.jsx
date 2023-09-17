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
    axios
      .get("https://6501e20c736d26322f5c6ebd.mockapi.io/items")
      .then((res) => {
        // Fetch short in axios
        console.log(res.data);
        setItems(res.data);
      });

    axios
      .get("https://6501e20c736d26322f5c6ebd.mockapi.io/cart")
      .then((res) => {
        // Fetch short in axios
        console.log(res.data);
        setCartItems(res.data);
      });
    axios
      .get("https://6506d69d3a38daf4803ec489.mockapi.io/favorites")
      .then((res) => {
        // Fetch short in axios
        console.log(res.data);
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://6501e20c736d26322f5c6ebd.mockapi.io/cart", obj); // post obj data in beckend server
    if (!cartItems.includes(obj)) {
      setCartItems((prev) => [...prev, obj]); // reactda push qilish
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
      console.error('Error: 404;');
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

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
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
