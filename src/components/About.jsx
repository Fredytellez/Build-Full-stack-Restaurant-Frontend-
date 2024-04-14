import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading"></h1>
            <p>The only thing we are serious about is food</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem delectus maxime impedit eaque facere dignissimos, tempora
            ipsum expedita eum praesentium sequi error cupiditate repellendus
            perspiciatis explicabo possimus ut et sapiente odio recusandae
            voluptate. Et pariatur enim nisi, voluptas debitis obcaecati
            voluptatibus, rem non molestiae provident odit ducimus, ut nesciunt!
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
