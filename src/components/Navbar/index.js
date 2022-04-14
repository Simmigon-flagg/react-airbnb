import "./style.css";
import logo from "../../image/airbnb-logo.png"
const Navbar = () => {
  return (
    <nav>
      <img src={logo} className="nav--logo" alt="Airbnb"/>
    </nav>
  );
};
export default Navbar;
