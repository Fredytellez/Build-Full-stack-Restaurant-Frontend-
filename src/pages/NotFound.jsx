import {Link} from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const NotFound = () => {
  return (
    <>
     <section className="notFound">
      <div className="container">
        <img src="/notFound1.svg" alt="notFound" />
        <h1>LOOKS LIKE YOU ARE LOST</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <Link to={"/"}>
        Back to Home {" "}
        <span>
          <HiOutlineArrowNarrowRight/>
        </span>
        </Link>
      </div>
      </section> 
    </>
  )
}

export default NotFound
