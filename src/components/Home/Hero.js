import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import Button from "@/shared/Buttons";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "sweetalert2/dist/sweetalert2.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Nav2 from "../Nav/Nav2";
import { Link } from "react-scroll";
import { Thumbs, EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { Element } from "react-scroll";
const MySwal = withReactContent(Swal);

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const showError = () => {
    MySwal.fire({
      title: <p>Registration Status</p>,
      footer: "SweetAlert in React",
      didOpen: () => {
        MySwal.clickConfirm();
      },
    }).then(() => {
      return MySwal.fire(<p>Failed</p>);
    });
  };

  const showSuccess = () => {
    MySwal.fire({
      title: <p>Success</p>,
      footer: "SweetAlert in React",
      didOpen: () => {
        MySwal.clickConfirm();
      },
    }).then(() => {
      return MySwal.fire(<p>Sent</p>);
    });
  };

  // Keys for the first form
  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const user_id = process.env.NEXT_PUBLIC_EMAILJS_API_KEY;

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    emailjs
      .send(service_id, template_id, templateParams, user_id)
      .then((response) => {
        setLoading(false);
        showSuccess();
        setValues({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        showError();
      });
  };

  //initializing animate on scroll

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    setCurrentIndex(newIndex);
    setAnimationKey((prevKey) => prevKey + 1); // Update key to refresh animation
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const swipesMedia = [
    {
      type: "video",
      src: "https://res.cloudinary.com/tongston-dev/video/upload/pitch_itw4kw.mp4",
    },
    {
      type: "video",
      // src: "https://res.cloudinary.com/tongston-dev/video/upload/invest_mdagix.mp4",
      src: "https://res.cloudinary.com/tongston-dev/video/upload/pitch_itw4kw.mp4",
    },
    {
      type: "video",
      // src: "https://res.cloudinary.com/tongston-dev/video/upload/connect_hvdn8i.mp4",
      src: "https://res.cloudinary.com/tongston-dev/video/upload/pitch_itw4kw.mp4",
    },
    {
      type: "video",
      // src: "https://res.cloudinary.com/tongston-dev/video/upload/learn_ruqpgy.mp4",
      src: "https://res.cloudinary.com/tongston-dev/video/upload/pitch_itw4kw.mp4",
    },
  ];

  const textsAndButtons = [
    {
      title: " PITCH | INSPIRE | SCALE",
      description:
        "Pitch your groundbreaking business ideas for funding opportunities, mentorship, and grants from top industry leaders",
      buttonText: "Join Now",
      linkTo: "section-1",
    },
    {
      title: "INVEST | IMPACT | PROFIT",
      description:
        "Turn visions into reality—seize the opportunity to invest in transformative ideas for high-impact financial & social returns.",
      buttonText: "Register Today",
      linkTo: "section-2",
    },
    {
      title: "CONNECT | ENGAGE | NETWORK",
      description:
        "Network with trailblazing industry experts, delegates, awardees and thought leaders.",
      buttonText: "Apply to Pitch",
      linkTo: "section-3",
    },
    {
      title: "LEARN | MASTER | THRIVE",
      description:
        "Gain exclusive insights and high-quality knowledge in entrepreneurial education, media, enterprise & finance from industry-leading experts globally.",
      buttonText: "Start Investing",
      linkTo: "section-4",
    },

    {
      title: "EMPOWER | ELEVATE | POSITION",
      description:
        " Explore Tongston's global services to make institutions, people & governments Valuable, Influential & Profitable [VIP]",
      buttonText: "Start Investing",
      linkTo: "section-4",
    },
  ];

  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="relative w-full  h-[800px] overflow-hidden   flex flex-col  justify-start items-start  pb-9     md:h-[700px] mb-9 ">
        {/* Swiper for media */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          autoplay={{
            delay: 7000,
            disableOnInteraction: true,
          }}
          effect="fade"
          onSlideChange={handleSlideChange}
          modules={[EffectFade, Thumbs, Autoplay]}
          className="mySwiper2"
        >
          {swipesMedia.map((media, index) => (
            <SwiperSlide key={index}>
              {media.type === "video" ? (
                <video
                  src={media.src}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  width={700}
                  height={700}
                  src={media.src}
                  alt={`swiper-media-${index}`}
                  className="w-full h-full object-cover"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <Nav2 />
        <div className=" absolute left-0 right-0 top-0  h-[768px]   bg-black bg-opacity-65  z-30  grid grid-cols-1 gap-y-[100px] w-full md:h-[660px]   justify-center items-center  mb-9   lg:grid-cols-2  lg:px-[4rem]  ">
          <section className="swiper-text-button-container h-[fixed] flex flex-col justify-start items-start px-4 gap-y-[30px] w-full relative top-[3rem] lg:top-0">
            {/* Text and Buttons with Framer Motion */}
            <motion.div
              key={animationKey} // Key to refresh animation
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="swiper-text-button-container flex flex-col gap-y-7 justify-start items-start "
            >
              <h1 className="text-white font-bold text-3xl  font-montserrat lg:text-5xl">
                {textsAndButtons[currentIndex].title}
              </h1>
              <p className="text-white font-medium   font-lato  text-xl lg:text-2xl">
                {textsAndButtons[currentIndex].description}
              </p>
              {/* <Link
                activeClass="active"
                to={textsAndButtons[currentIndex].linkTo}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button
                  className={`    bg-yellow-600 border-red-600 hover:border-black hover:bg-red-600   md:bg-red-600 md:border-yellow-500 md:hover:bg-black`}
                  text={textsAndButtons[currentIndex].buttonText}
                  icon={faChevronRight}
                />
              </Link> */}
            </motion.div>
          </section>

          <section
            data-aos="fade-up"
            data-aos-easing="ease-in linear"
            data-aos-mirror="true"
            className="form-container hidden md:block  w-full h-[fixed]  mt-[4rem] md:mt-0 px-5 "
          >
            {" "}
            <Element name="hero-forms"></Element>
            <form
              onSubmit={handleSubmit}
              className=" w-full  md:w-[350px] grid grid-cols-1 gap-x-3  gap-y-4  justify-start items-start p-2  border border-gray-800 shadow-2xl   md:ml-auto bg-white bg-opacity-40  "
            >
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full  p-3 px-2 text-gray-900 text-base font-cur  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
              />
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full  p-3 px-2 text-gray-900 text-base font-cur  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
              />

              <textarea
                type="text"
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full  p-3 h-[120px] px-2 text-gray-900 text-base font-cur  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
              ></textarea>

              {/* <input
                type="date"
                name="industry"
                placeholder="Industry"
                className="w-full  p-3 px-2 text-gray-900 text-base font-cur  focus:outline-none 
               focus:scale-100 transform transition-transform duration-700 ease-in-out bg-white border border-gray-700 "
              /> */}
              <Button
                text="Submit"
                type="submit"
                className={`bg-black  border-yellow-500  hover:border-black  hover:bg-yellow-600`}
              >
                {loading ? "Please Wait..." : "Submit"}
              </Button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Hero;
