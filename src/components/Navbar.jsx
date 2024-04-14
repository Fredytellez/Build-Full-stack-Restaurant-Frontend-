import { useState } from "react";
import { Link } from "react-scroll"; // importa el componente Link de la biblioteca "react-scroll", para crear enlaces suaves (smooth scrolling)
import { GiHamburgerMenu } from "react-icons/gi"; // importa un icono que se utiliza comúnmente para indicar un menu desplegable 
import { data } from "../restApi.json"; // importa los datos del archivo resApi.json

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">Este Es un LOGO</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => {
            return (
              <Link
                to={element.link}
                key={element.id}
                spy={true}
                smooth={true}
                duration={500}
              >
                {element.title}
              </Link>
            );
          })}
        </div>
        <button className="menuBtn">OUR MENU</button>
      </div>
      <div className="hamburger" onClick={()=> setShow(!show)}>
        <GiHamburgerMenu/>
      </div>
    </nav>
  );
};

export default Navbar;
