import axios from "axios";
import { useState, useEffect, useContext } from "react";

import Cards from "../components/Card/Cards";
import Info from "../components/Info/Info";
import AppContext from "../Context";

function Orders() {
  const { onFavorites, onAddToCart } = useContext(AppContext);
  const [orderData, setOrderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(orderData);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://6506d69d3a38daf4803ec489.mockapi.io/orderCart"
        );
        setOrderData(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
        console.log(orderData);
      } catch (error) {
        alert("Ошибка при запросе заказов");
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      {orderData.length > 0 ? (
        <div className="Order__container p-45">
          <div className="back__container d-flex align-center">
            <a href="/" className="mr-20">
              <img
                width={35}
                height={35}
                src="./img/BackArrow.png"
                alt="back arrow"
              />
            </a>
            <h1 className="content__title">Мои покупки</h1>
          </div>
          <div className="mt-40 Cards">
            {(isLoading ? [...Array(8)] : orderData).map((data, index) => (
              <Cards
                key={index}
                dataLoad={isLoading}
                onFavorite={() => onFavorites(data)}
                {...data}
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          {!isLoading && (
            <div className="info__container">
              <Info
                image="./img/imoji-upsit.png"
                title="У вас нет заказов"
                text="Вы нищеброд?  Оформите хотя бы один заказ."
                link={true}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Orders;
