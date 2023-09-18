import React from "react";

// Components
import Cards from "../components/Card/Cards";

function Home({
  items,
  cartItems,
  searchVal,
  setSearchVal,
  onChangeSearchInput,
  onFavorites,
  onAddToCart,
  dataLoad,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((data) =>
      data.name.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
    );
    return (dataLoad ? [...Array(8)] : filteredItems).map((data, index) => (
      <Cards
        key={index}
        onFavorite={() => onFavorites(data)}
        onPlus={() => onAddToCart(data)}
        added={cartItems.some((obj) => Number(obj.id) === Number(data.id))} // agar siz bulva true data ishlatmoqchi bolsangiz yozish shart emas Reactda
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
