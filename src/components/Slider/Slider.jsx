import style from "./Slider.module.css";
import { ReactComponent as LeftArrow } from "../../assets/img/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/img/rightArrow.svg";
// import { Swiper } from "swiper/react";
// import { useSwiper } from "swiper/react";
// import "swiper/css";
// import { Navigation } from "swiper/modules";

// function PrevArrow(props) {
//   // const swiper = useSwiper();

//   return (
//     <button
//       className={`${style.btn} ${style.arrowLeft}`}
//       onClick={() => swiper.slidePrev()}
//     >
//       <LeftArrow className={style.img} />
//     </button>
//   );
// }

// function NextArrow(props) {
//   const swiper = useSwiper();
//   console.log(swiper);
//   return (
//     <button
//       className={`${style.btn} ${style.arrowRight}`}
//       onClick={() => swiper.slideNext()}
//     >
//       <RightArrow className={style.img} />
//     </button>
//   );
// }

function Slider(props) {
  // const settings = {
  //   spaceBetween: 24,
  //   slidesPerView: 6,
  //   // navigation: {
  //   //   nextEl: <NextArrow />,
  //   //   prevEl: <PrevArrow />,
  //   // },
  // };

  // console.log("test");
  // const swiper = useSwiper();
  // console.log("slider", swiper);
  return <div className={style.content}>{props.children}</div>;
}

export default Slider;
