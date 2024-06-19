import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="container-fluid p-0">
      <div className="carousel-items owl-carousel owl-theme">
        <div
          id="slider"
          className="overlay-parallax-slider"
          style={{
            width: "1200px",
            height: "650px",
            margin: "0 auto",
            marginBottom: "0px",
          }}>
          <div
            className="ls-slide overlay2"
            data-ls="duration:4000; transition2d:7;">
            <img
              src="img/slider/slide1-parallax.jpg"
              className="ls-bg"
              alt=""
            />
            <img
              width="1200"
              height="376"
              src="img/slider/slide1-element.png"
              className="ls-l"
              alt=""
              style={{
                position: "absolute",
                top: "296px",
                right: "0%",
              }}
              data-ls="offsetxin:10; offsetyin:120; durationin:1100; rotatein:5; transformoriginin:59.3% 80.3% 0; offsetxout:-80; durationout:400; parallax:true; parallaxlevel:-4;"
            />
            <div
              className="ls-l header-wrapper"
              data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; parallax:true; parallaxlevel:2;">
              <div className="header-text full-width text-light">
                <h1>
                  Welcome to <span>United pets</span>
                </h1>
                <div className="hidden-small">
                  <p className="header-p">
                    We offer the best services for your pets, contact us today
                    and book a service
                  </p>
                  <Link className="btn btn-primary " to="/contact">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="ls-slide overlay2"
            data-ls="duration:4000; transition2d:7;">
            <img src="img/slider/image-2.jpg" className="ls-bg" alt="" />
            <img
              width="1200"
              height="376"
              className="ls-l"
              alt=""
              style={{
                position: "absolute",
                top: "296px",
                right: "0%",
              }}
              data-ls="offsetxin:10; offsetyin:120; durationin:1100; rotatein:5; transformoriginin:59.3% 80.3% 0; offsetxout:-80; durationout:400; parallax:true; parallaxlevel:-4;"
            />
            <div
              className="ls-l header-wrapper"
              data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; parallax:true; parallaxlevel:2;">
              <div className="header-text full-width text-light">
                <h1>
                  ADOPTION <span>STORIES</span>
                </h1>
                <div className="hidden-small">
                  <p className="header-p">
                    Adoption stories are often deeply personal and emotionally
                    resonant narratives that highlight the journey of
                    individuals or families as they welcome a new member into
                    their lives through adoption.
                  </p>
                  <Link className="btn btn-primary " to="/adoption-stories">
                    Adoption Stories
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="ls-slide overlay2"
            data-ls="duration:4000; transition2d:7;">
            <img src="img/family.jpg" className="ls-bg" alt="" />
            <img
              width="1200"
              height="376"
              className="ls-l"
              alt=""
              style={{
                position: "absolute",
                top: "296px",
                right: "0%",
              }}
              data-ls="offsetxin:10; offsetyin:120; durationin:1100; rotatein:5; transformoriginin:59.3% 80.3% 0; offsetxout:-80; durationout:400; parallax:true; parallaxlevel:-4;"
            />
            <div
              className="ls-l header-wrapper"
              data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; parallax:true; parallaxlevel:2;">
              <div className="header-text full-width text-light">
                <h1>
                  ADOPTING IS AN ACT OF <span>LOVE</span>
                </h1>
                <div className="hidden-small">
                  <p className="header-p">
                    Search our list of dogs, cats and other pets available for
                    adoption near you
                  </p>
                  <Link className="btn btn-primary " to="/pet-gallery">
                    ADOPT TODAY
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
