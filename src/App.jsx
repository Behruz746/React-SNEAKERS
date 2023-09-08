// Components
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Cards from "./components/Cards";

// Images
import { search } from "./assets/index.js";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-45">
        <div className="d-flex justify-between align-center mb-40">
          <h1 className="content__title">Все кроссовки</h1>
          <div className="search__block d-flex">
            <img src={search} alt="Search" />
            <input type="search" placeholder="Поиск..." />
          </div>
        </div>

        <Cards />
      </div>
    </div>
  );
}

export default App;
