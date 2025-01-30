import "./Hero.scss";
import heroBookOne from "../../assets/images/image-1.jpeg";
import heroBookTwo from "../../assets/images/image-2.jpeg";
import heroBookThree from "../../assets/images/image-6.jpeg";
import heroGirl from "../../assets/images/hero-girl.png";
import heroBoy from "../../assets/images/hero-boy.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__image">
        <img src={heroGirl} alt="Hero Girl" className="hero__image--girl" />
      </div>
      <div className="hero__image">
        <img src={heroBoy} alt="Hero Boy" className="hero__image--boy" />
      </div>
      <div className="hero__books">
        <img
          src={heroBookOne}
          alt="Book"
          className="hero__book hero__book--one"
        />
        <img
          src={heroBookTwo}
          alt="Book"
          className="hero__book hero__book--two"
        />
        <img
          src={heroBookThree}
          alt="Book"
          className="hero__book hero__book--three"
        />
      </div>
    </div>
  );
};

export default Hero;
