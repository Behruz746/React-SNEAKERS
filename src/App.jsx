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
import Orders from "./pages/Orders";

//Context
import AppContext from "./Context";

function App() {
  const [searchVal, setSearchVal] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [dataLoad, setDataLoad] = useState(true);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let totalNumbers = 0;

    for (let i = 0; i < cartItems.length; i++) {
      const price = Number(cartItems[i].price.replace(/\s/g, ""));
      totalNumbers += price;
    }

    setNumber(totalNumbers);
  }, [cartItems]);

  const onClose = () => {
    setCartOpened(false);
  };

  useEffect(() => {
    async function fetchData() {
      // Fetch short in axios
      setDataLoad(true);

      try {
        const [cartResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://6501e20c736d26322f5c6ebd.mockapi.io/cart"),
            axios.get("https://6506d69d3a38daf4803ec489.mockapi.io/favorites"),
            axios.get("https://6501e20c736d26322f5c6ebd.mockapi.io/items"),
          ]);

        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
        setDataLoad(false);
      } catch (error) {
        console.log("Error: 404");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((cart) => Number(cart.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://6501e20c736d26322f5c6ebd.mockapi.io/cart/${Number(findItem.id)}`
        ); // post obj data in beckend server
      } else {
        setCartItems((prev) => [...prev, obj]);
        const {data} = await axios.post("https://6501e20c736d26322f5c6ebd.mockapi.io/cart", obj); // post obj data in beckend server
        setCartItems((prev) => prev.map(item=> {
          if(item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            };
          };
          return item;
        }));
      }
    } catch (error) {
      console.error("Error: 404");
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://6501e20c736d26322f5c6ebd.mockapi.io/cart/${id}`); // delete obj data in beckend server
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      console.log("Error: 404");
      console.error(error);
    }
  };

  const onFavorites = async (obj) => {
    console.log(obj.id);
    try {
      if (favorites.find((fav) => Number(fav.id) === Number(obj.id))) {
        axios.delete(
          `https://6506d69d3a38daf4803ec489.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        ); // delete favorite cards
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        dataLoad,
        isItemAdded,
        onClose,
        setCartItems,
        number,
        setNumber,
        searchVal,
        setSearchVal,
        onRemoveItem,
        onChangeSearchInput,
        onFavorites,
        onAddToCart,
        cartOpened,
      }}
    >
      <div className="wrapper clear">
        <Drawer />
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/favorites"
            element={<Favorites onFavorites={onFavorites} />}
          />
          <Route path="/user" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
