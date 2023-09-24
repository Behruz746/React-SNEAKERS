import React from "react";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

// Components
import Cards from "../components/Card/Cards";

// AppContext
import AppContext from "../Context";

function Home() {
  const {
    dataLoad,
    isItemAdded,
    searchVal,
    setSearchVal,
    items,
    onChangeSearchInput,
    onFavorites,
    onAddToCart,
  } = useContext(AppContext); // useContext //

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
    );
    return (dataLoad ? [...Array(8)] : filteredItems).map((data, index) => (
      <Cards
        key={index}
        onFavorite={(obj) => onFavorites(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        dataLoad={dataLoad}
        {...data}
      />
    ));
  };
  return (
    <>
      <div className="content p-45">
        <div className="d-flex justify-between align-center mb-40">
          <h1 className="content__title">
            {searchVal ? `Поиск по запросу: "${searchVal}"` : "Все кроссовки"}
          </h1>
          <div className="search__block d-flex">
            <img src={"./img/search.svg"} alt="Search" />
            {searchVal && (
              <img
                width={32}
                height={32}
                src={"./img/remove-btn.svg"}
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
          <>{renderItems()}</>
        </div>
      </div>
    </>
  );
}

export default Home;
