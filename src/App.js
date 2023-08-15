import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import ShoppingListWrapper from "./shopping/ShoppingListWrapper";
import { GiKnifeFork } from "react-icons/gi";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav">
          <GiKnifeFork className="svg" />
          <Link to={"/"} className="logo">
            RecipesByAnn
          </Link>
        </div>
        <Search />
        <Category />
        <Pages />
        <ShoppingListWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
