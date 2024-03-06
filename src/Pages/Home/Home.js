import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "../Home/Home.css";
import RoadshowBanner from '../../Assets/Home/roadshow-banner.jpg';
import Roadshow from "../../Assets/Home/roadshow.png";
import NewspaperAds from "../../Assets/Home/newspaper_ads.png";
import Hoardings from "../../Assets/Home/hoardings.png";
import roadshow5 from "../../Assets/Home/5.jpg";
import roadshow7 from "../../Assets/Home/7.jpg";
import roadshow9 from "../../Assets/Home/9.jpg";

const Home = () => {
  const homePageServiceContainer = [
    {
      title: "Digital marketing services that help you grow.",
      para: "Fortune 100 companies and established brands trust our enterprise software development.",
    },
  ];

  const homeRoadShowContainer = [
    {
      image: Roadshow,
      title: "Roadshow",
      para: "In a world inundated with traditional advertisements, where consumers can easily tune out the noise of TV, radion and newspapers, roadshows emerge as a game-changer. These campaigns take your brand message on the road, venturing into the realms where conventional ads may not penetrate.",
    },
  ];
  const homeNewspaperAdsContainer = [
    {
      image: NewspaperAds,
      title: "Newspaper Ads",
      para: "In a world inundated with traditional advertisements, where consumers can easily tune out the noise of TV, radion and newspapers, roadshows emerge as a game-changer. These campaigns take your brand message on the road, venturing into the realms where conventional ads may not penetrate.",
    },
  ];
  const homeHoardingsContainer = [
    {
      image: Hoardings,
      title: "Hoardings",
      para: "In a world inundated with traditional advertisements, where consumers can easily tune out the noise of TV, radion and newspapers, roadshows emerge as a game-changer. These campaigns take your brand message on the road, venturing into the realms where conventional ads may not penetrate.",
    },
  ];

  return (
    <div>
      <div className="home-page">
        <div className="home-page-welcome-container">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 6500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="swiper-page1">
             
              <img src={RoadshowBanner} alt="Banner_Image" width={1400} height={600}  />
            </SwiperSlide>
            <SwiperSlide className="swiper-page2">
              <h1 className="second-banner-title">A winning digital agency</h1>

              <h3 className="banner-sub-title">
                We're Hi soft. We help drive change with technology
              </h3>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="home-page-service-container">
          {homePageServiceContainer.map((value, index) => {
            return (
              <div key={index}>
                <h1>{value.title}</h1>
                <p>{value.para}</p>
              </div>
            );
          })}
          <div className="home-page-service-types-container">
            {homeRoadShowContainer.map((value, index) => {
              return (
                <div className="roadshow-container" key={index}>
                  <img className="roadshow" src={value.image} />
                  <h1>{value.title}</h1>
                  <p>{value.para}</p>
                </div>
              );
            })}
            {homeNewspaperAdsContainer.map((value, index) => {
              return (
                <div className="newsads-container" key={index}>
                  <img className="news-ads" src={value.image} />
                  <h1>{value.title}</h1>
                  <p>{value.para}</p>
                </div>
              );
            })}
            {homeHoardingsContainer.map((value, index) => {
              return (
                <div className="hoarding-container" key={index}>
                  <img className="hoardings" src={value.image} />
                  <h1>{value.title}</h1>
                  <p>{value.para}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home-page-portfolio-container">
          <h1>
            <span>What's next?</span> our latest client stories
          </h1>
          <div className="roadways-container">
            <img className="roadshow5" src={roadshow5} />
            <img className="roadshow7" src={roadshow7} />
            <img className="roadshow9" src={roadshow9} />
          </div>
        </div>
        <div className="home-page-about-container">
          <div className="counter-container">
            <span
              class="elementor-counter-number"
              data-duration="2000"
              data-to-value="5"
              data-from-value="0"
              data-delimiter=","
            >
              5
            </span>
            <span class="elementor-counter-number-suffix">k+</span>
            <div class="elementor-counter-title">Happy Clients</div>
            <span
              class="elementor-counter-number"
              data-duration="2000"
              data-to-value="5"
              data-from-value="0"
              data-delimiter=","
            >
              250
            </span>
            <span class="elementor-counter-number-suffix">+</span>
            <div class="elementor-counter-title">Team Members</div>
            <span
              class="elementor-counter-number"
              data-duration="2000"
              data-to-value="5"
              data-from-value="0"
              data-delimiter=","
            >
              20
            </span>
            <div class="elementor-counter-title">Counters</div>
          </div>
          <div className="rightside-container">
            <h1>We create some things for your success future</h1>
            <p className="para1">
              Ballan wrasse climbing gourami amur pike Arctic char, steelhead
              sprat sea lamprey grunion. Old World knifefish pike conger burbot
              pollock herring? Tetra electric eel jellynose fish inconnu murray
              cod treefish false trevally orangespine.
            </p>
            <p className="para2">
              Walleye poolfish sand goby butterfly ray stream catfish jewfish
              spanish. Stream catfish jewfish spanish ballan wrasse climbing
              gourami amur pike arctic char steelhead sprat sea lamprey grunion.
              Steelhead sprat sea lamprey grunion walleye poolfish sand goby
              butterfly ray stream catfish jewfish spanish.Sixgill shark
              monkfish wrymouth Old World knifefish pike conger burbot pollock
              herring? Tetra electric eel.
            </p>
          </div>
        </div>
        <div className="home-page-idea-container">
          <h1>Tell us about your idea, and we’ll make it happen.</h1>
          <h3>
            Have a brand problem that needs to be solved? We’d love to hear
            about it!
          </h3>
          <div className="button">
            <button className="idea-btn">
              Let's Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-right"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
