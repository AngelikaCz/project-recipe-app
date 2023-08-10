import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "./Category.css";

function Category() {
  return (
    <div className="list">
      <NavLink className="link" to={"/cuisine/Italian"}>
        <FaPizzaSlice className="icon" />
      </NavLink>
      <NavLink className="link" to={"/cuisine/American"}>
        <FaHamburger className="icon" />
      </NavLink>
      <NavLink className="link" to={"/cuisine/Thai"}>
        <GiNoodles className="icon" />
      </NavLink>
      <NavLink className="link" to={"/cuisine/Japanese"}>
        <GiChopsticks className="icon" />
      </NavLink>
    </div>
  );
}

export default Category;
