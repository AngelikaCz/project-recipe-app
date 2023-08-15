import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import ShoppingListWrapper from "./shopping/ShoppingListWrapper";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
        <ShoppingListWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
