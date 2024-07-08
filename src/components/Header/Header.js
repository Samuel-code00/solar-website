import "./Header.css";
import logo1 from "./solar.png"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="nav">
        <img src={logo1}  className="logo" />
        <h1>SOLARIS</h1>
        <div className="link">
          <Link to="/" id="home">Home</Link>
          <Link to="/About">ABOUT</Link>
          <Link to="/Service">SERVICE</Link>
          <Link to="/Project">PROJECT</Link>
          <Link to="/Contact">CONTACT</Link>
        </div>
      </div>
    </div>
  );
}
