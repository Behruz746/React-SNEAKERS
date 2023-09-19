import React from "react";
import { useContext } from "react";
import Cards from "../components/Card/Cards";
import AppContext from "../Context";

function Favorites({ onFavorites }) {
  const { favorites } = useContext(AppContext);
  console.log(favorites);

  return (
    <>
      <div className="content p-45">
        <div className="d-flex justify-between align-center mb-40">
          <h1 className="content__title">Мои закладки</h1>
        </div>

        <div className="Cards">
          {favorites.map((data, index) => (
            <Cards
              key={index}
              favorited={true}
              onFavorite={() => onFavorites(data)}
              {...data}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Favorites;
