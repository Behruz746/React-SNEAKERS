import React from "react";
import { useContext } from "react";

import Cards from "../components/Card/Cards";
import Info from "../components/Info/Info";

import AppContext from "../Context";

function Favorites({ onFavorites }) {
  const { favorites, dataLoad } = useContext(AppContext);
  console.log(favorites);

  return (
    <>
      {favorites.length > 0 ? (
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
      ) : (
        <div className="info__container">
          {!dataLoad && (
            <Info
              image="./img/favoriteImage.png"
              title="Закладок нет :("
              text="Вы ничего не добавляли в закладки"
              link={true}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Favorites;
